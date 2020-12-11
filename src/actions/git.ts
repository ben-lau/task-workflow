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
 */
export const gitCommit = async ({ message }: { message: string }) => {
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
  const { code, message } = await gitInSilent('pull', '--rebase');
  tips.hideLoading();

  if (code !== CODE_SUCCESS && checkConflict(message)) {
    if (await waitForDealWithConflict()) {
      await gitCommit({ message: `【${Commit.Types.conflict}】合并冲突` });
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
 */
export const gitCheckout = async ({ branch }: { branch: string }) => {
  tips.showLoading('检查工作区');
  const { message } = await git('status', '-z', '-u');
  tips.hideLoading();

  if (
    message &&
    !(await inquireContinue({
      message: '工作区尚有未提交更改，是否切换分支？',
    }))
  ) {
    tips.error('已取消');
    return Promise.reject('已取消');
  }

  tips.showLoading(`切换至【${branch}】`);
  if (await getIsExistLocalBranch({ branch })) {
    await git('checkout', branch);
  } else {
    await git(
      'checkout',
      branch,
      '-b',
      await getUpstreamBranchName({ branch })
    );
  }
  await gitPull();
  tips.hideLoading();
};

/**
 * 合并操作
 */
export const gitMerge = async ({ branch }: { branch: string }) => {
  tips.showLoading(`正在合并【${branch}】`);
  const currentBranch = await getCurrentBranchName();
  const { code, message } = await gitInSilent(
    'merge',
    branch,
    '--no-ff',
    '-m',
    `【${Commit.Types.merge}】Merge branch '${branch}' into '${currentBranch}'`
  );
  tips.hideLoading();

  if (code !== CODE_SUCCESS && checkConflict(message)) {
    if (await waitForDealWithConflict()) {
      await gitCommit({ message: `【${Commit.Types.conflict}】合并冲突` });
    } else {
      tips.error('发现冲突，请解决后再提交');
    }
  }
};

/**
 * 获取当前分支名
 */
export const getCurrentBranchName = async () => {
  // git branch --show-current
  const { message } = await git('name-rev', '--name-only', 'HEAD');
  return message;
};

/**
 * 获取本地分支是否存在
 */
export const getIsExistLocalBranch = async ({ branch }: { branch: string }) => {
  const { message } = await git('branch', '--list', `${branch}`);
  return message.trim() === '';
};

/**
 * 获取分支上游分支名
 */
export const getUpstreamBranchName = async ({ branch }: { branch: string }) => {
  if (await getIsExistLocalBranch({ branch })) {
    return `origin/${branch}`;
  } else {
    const { message } = await git(
      'rev-parse',
      '--symbolic-full-name',
      `${branch}@{u}`
    );
    return message;
  }
};

/**
 * 获取未推送远程的commit
 */
export const getToBePushed = async () => {
  const { message } = await git('cherry', '-v');
  return message;
};

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
    return (await inquireContinue({
      message: `还有${getLineCount(message)}处冲突未解决，请先解决，是否继续？`,
    }))
      ? await waitForDealWithConflict()
      : false;
  } else {
    return true;
  }
};

/**
 * 获取远程url
 */
export const getRemoteUrl = async () => {
  const { message } = await git('remote', 'get-url', '--push', 'origin');
  return message;
};

/**
 * 获取分支上一次提交记录
 */
export const getLastCommit = async ({ branch }: { branch: string }) => {
  const remoteBranchName = await getUpstreamBranchName({ branch });
  const { message } = await git('log', remoteBranchName, '-1', '--format=%s');
  return message;
};
