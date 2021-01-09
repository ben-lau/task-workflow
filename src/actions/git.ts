import { Commit } from '../constants';
import { git, gitInSilent, gitWithoutBreak } from '../utils/execute/git';
import { CODE_SUCCESS } from '../utils/execute/promisify-spawn';
import { tips } from '../utils/tips';
import { getLineCount } from '../utils/tools';
import { AskFor } from './askFor';

// 冲突正则
const RegConflictMessage = /CONFLICT/i;

// 检查是否有冲突标志
const checkConflict = (message: string) => RegConflictMessage.test(message);

export namespace Git {
  /**
   * 初始化it
   */
  export const init = () => git('init');

  /**
   * 配置git
   */
  export const config = async ({
    name,
    email,
  }: {
    name?: string;
    email?: string;
  } = {}) => {
    if (name) {
      await git('config', 'user.name', `"${name}"`);
    }
    if (email) {
      await git('config', 'user.email', `"${email}"`);
    }
  };

  /**
   * 提交操作
   */
  export const commit = async ({ message }: { message: string }) => {
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

  export const pull = async () => {
    const currentBranch = await getCurrentBranchName();
    tips.showLoading(`拉取远程【${currentBranch}】`);
    const { code, message } = await gitInSilent('pull');
    tips.hideLoading();

    if (code !== CODE_SUCCESS && checkConflict(message)) {
      if (await waitForDealWithConflict()) {
        await commit({ message: `${Commit.Types.conflict}: 合并冲突` });
      } else {
        tips.error('发现冲突，请解决后再提交');
        return;
      }
    }
  };

  /**
   * 推送操作
   */
  export const push = async () => {
    await pull();

    const currentBranch = await getCurrentBranchName();
    tips.showLoading(`推送至远程【${currentBranch}】`);
    await gitInSilent('push', 'origin', currentBranch);
    tips.hideLoading();
  };

  /**
   * 强推至远程分支【危险操作】
   */
  export const pushForceDangerously = async ({
    url,
    branch,
  }: {
    url: string;
    branch: string;
  }) => {
    if (
      await AskFor.shouldContinue({
        message: `危险！将要强推至【${url}】：分支【${branch}】，请确认`,
      })
    ) {
      tips.showLoading(`推送至远程【${url}】：分支【${branch}】`);
      await git('push', '-u', url, `HEAD:${branch}`, '--force');
      tips.hideLoading();
    } else {
      tips.error('已取消');
      return Promise.reject('已取消');
    }
  };

  /**
   * 切换分支
   */
  export const checkout = async ({ branch }: { branch: string }) => {
    tips.showLoading('检查工作区');
    const { message } = await git('status', '-z', '-u');
    tips.hideLoading();

    if (
      message &&
      !(await AskFor.shouldContinue({
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
    await pull();
    tips.hideLoading();
  };

  /**
   * 合并操作
   */
  export const merge = async ({
    branch,
    message,
  }: {
    branch: string;
    message?: string;
  }) => {
    tips.showLoading(`正在合并【${branch}】`);
    const currentBranch = await getCurrentBranchName();
    const remoteBranchName = await getUpstreamBranchName({ branch });
    const mergeMessage = `${
      Commit.Types.merge
    }: Merge branch '${branch}' into '${currentBranch}'${
      message ? ` -> ${message}` : ''
    }`;
    const { code, message: rs } = await gitInSilent(
      'merge',
      remoteBranchName,
      '--no-ff',
      '-m',
      mergeMessage
    );
    tips.hideLoading();

    if (code !== CODE_SUCCESS && checkConflict(rs)) {
      if (await waitForDealWithConflict()) {
        await commit({
          message: mergeMessage,
        });
      } else {
        tips.error('发现冲突，请解决后再提交');
      }
    }
  };

  /**
   * 克隆仓库
   */
  export const clone = async ({
    url,
    branch = 'master',
    path = '',
  }: {
    url: string;
    branch?: string;
    path?: string;
  }) => {
    const msg = `克隆【${url}】，分支【${branch}】`;
    tips.showLoading(msg);
    await git('clone', url, '-b', branch, path);
    tips.succeed(msg);
  };

  /**
   * 获取当前分支名
   */
  export const getCurrentBranchName = async () => {
    // git branch --show-current 这个要求版本高点
    // git symbolic-ref --short -q HEAD
    // git rev-parse --abbrev-ref HEAD
    const { message } = await git('rev-parse', '--abbrev-ref', 'HEAD');
    return message;
  };

  /**
   * 获取本地分支是否存在
   */
  export const getIsExistLocalBranch = async ({
    branch,
  }: {
    branch: string;
  }) => {
    const { message } = await git('branch', '--list', `${branch}`);
    return message.trim() !== '';
  };

  /**
   * 获取分支上游分支名
   */
  export const getUpstreamBranchName = async ({
    branch,
  }: {
    branch: string;
  }): Promise<string> => {
    if (await getIsExistLocalBranch({ branch })) {
      const { code, message } = await gitWithoutBreak(
        'rev-parse',
        '--abbrev-ref',
        `${branch}@{u}`
      );
      if (code) {
        tips.showLoading('上游分支不存在，开始创建上游分支');
        await git('push', '-u', 'origin', branch);
        tips.hideLoading();
        return getUpstreamBranchName({ branch });
      } else {
        return message;
      }
    } else {
      return `origin/${branch}`;
    }
  };

  /**
   * 获取还在工作区的更改
   */
  export const getTobeCommit = async () => {
    const { message } = await git('status', '-s');
    return message;
  };

  /**
   * 获取未推送远程的commit
   */
  export const getToBePushed = async () => {
    // const { message } = await git('cherry', '-v'); //只会打印自己的提交并没有合并
    const branch = await getCurrentBranchName();
    const remoteBranchName = await getUpstreamBranchName({ branch });
    const { message } = await git(
      'log',
      branch,
      `^${remoteBranchName}`,
      '--oneline'
    );
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
      return (await AskFor.shouldContinue({
        message: `还有${getLineCount(
          message
        )}处冲突未解决，请先解决，是否继续？`,
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
  export const getLastCommitMessage = async ({
    branch,
  }: {
    branch: string;
  }) => {
    const remoteBranchName = await getUpstreamBranchName({ branch });
    const { message } = await git('log', remoteBranchName, '-1', '--format=%s');
    return message;
  };

  /**
   * 获取分支上一次提交记录主体
   */
  export const getLastCommitBody = async ({ branch }: { branch: string }) => {
    const remoteBranchName = await getUpstreamBranchName({ branch });
    const { message } = await git('log', remoteBranchName, '-1', '--format=%b');
    return message;
  };

  /**
   * 获取分支上一次提交记录哈希
   */
  export const getLastCommitHash = async ({ branch }: { branch: string }) => {
    const remoteBranchName = await getUpstreamBranchName({ branch });
    const { message } = await git('log', remoteBranchName, '-1', '--format=%H');
    return message;
  };
}
