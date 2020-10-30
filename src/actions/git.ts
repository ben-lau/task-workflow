import { Commit } from '../constants';
import { git, gitInSilent, gitWithoutBreak } from '../utils/execute/git';
import { CODE_SUCCESS } from '../utils/execute/promisify-spawn';
import { tips } from '../utils/tips';
import { getLineCount } from '../utils/tools';
import { inquireContinue } from './inquire';

// 冲突正则
const RegConflictMessage = /CONFLICT/i;

// 检查是否有冲突标志
const checkConflict = (message: string) => RegConflictMessage.test(message);

/**
 * 提交操作
 * @param message 提交信息
 */
export const gitCommit = async (message: string) => {
  tips.showLoading('检查工作区');
  const { message: status } = await git('status', '-z', '-u');

  if (!status) {
    tips.error('无需要提交的文件');
    return;
  }

  tips.showLoading('添加文件');
  await git('add', '-A');

  tips.showLoading('提交');
  await git('commit', '-m', message);
  tips.hideLoading();
};

export const gitPull = async () => {
  const currentBranch = await getCurrentBranchName();
  tips.showLoading(`拉取远程【${currentBranch}】`);
  const { code, message } = await gitInSilent('pull');
  tips.hideLoading();

  if (code !== CODE_SUCCESS && checkConflict(message)) {
    if (await waitForDealWithConflict()) {
      await gitCommit(`【${Commit.EnumTypes.conflict}】合并冲突`);
    } else {
      tips.error('发现冲突，请解决后再提交');
      return;
    }
  }
};

/**
 * 推送操作
 */
export const gitPush = async () => {
  await gitPull();

  const currentBranch = await getCurrentBranchName();
  tips.showLoading(`推送至远程【${currentBranch}】`);
  await gitInSilent('push', 'origin');
  tips.hideLoading();
};

/**
 * 切换分支
 * @param targetBranch 目标分支
 */
export const gitCheckout = async (targetBranch: string) => {
  tips.showLoading('检查工作区');
  const { message } = await git('status', '-z', '-u');
  tips.hideLoading();

  if (
    message &&
    !(await inquireContinue('工作区尚有未提交更改，是否切换分支？'))
  ) {
    tips.error('已取消');
    return Promise.reject('已取消');
  }

  tips.showLoading(`切换至【${targetBranch}】`);
  await git('checkout', targetBranch);
  await gitPull();
  tips.hideLoading();
};

/**
 * 合并操作
 * @param targetBranch
 */
export const gitMerge = async (targetBranch: string) => {
  tips.showLoading(`正在合并【${targetBranch}】`);
  const currentBranch = await getCurrentBranchName();
  const { code, message } = await gitInSilent(
    'merge',
    targetBranch,
    '--no-ff',
    '-m',
    `【${Commit.EnumTypes.merge}】Merge branch '${targetBranch}' into '${currentBranch}'`
  );
  tips.hideLoading();

  if (code !== CODE_SUCCESS && checkConflict(message)) {
    if (await waitForDealWithConflict()) {
      await gitCommit(`【${Commit.EnumTypes.conflict}】合并冲突`);
    } else {
      tips.error('发现冲突，请解决后再提交');
      return;
    }
  }
};

/**
 * 获取当前分支名
 */
export const getCurrentBranchName = async () => {
  const { message } = await git('name-rev', '--name-only', 'HEAD');
  return message;
};

/**
 * 获取分支上游分支名
 * @param branchName
 */
export const getUpstreamBranchName = async (branchName: string) => {
  const { message } = await git(
    'rev-parse',
    '--symbolic-full-name',
    `${branchName}@{u}`
  );
  return message;
};

/**
 * 获取未推送远程的commit
 */
export const getToBePushed = async () => {
  const { message } = await git('cherry', '-v');
  return message;
};
// git rev-list --left-right test...refs/remotes/origin/test

/**
 * 等待冲突处理
 * 当无冲突则返回true；
 * 有冲突会询问是否解决完毕，如果不继续则返回false，如果继续则递归。
 */
export const waitForDealWithConflict = async (): Promise<boolean> => {
  const { message, code } = await gitWithoutBreak(
    '--no-pager',
    'diff',
    '--check'
  );
  if (code !== CODE_SUCCESS) {
    return (await inquireContinue(
      `还有${getLineCount(message)}处冲突未解决，请先解决，是否继续？`
    ))
      ? await waitForDealWithConflict()
      : false;
  } else {
    return true;
  }
};
