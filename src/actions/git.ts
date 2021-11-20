import { Commit } from '../constants';
import { git, gitInSilent, gitWithoutBreak } from '../utils/execute/git';
import { CODE_SUCCESS } from '../utils/execute/promisify-spawn';
import { tips } from '../utils/tips';
import { getLineCount } from '../utils/tools';
import { AskFor } from './askFor';

// 冲突正则
const RegConflictMessage = /CONFLICT/i;

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
  export const commit = async ({
    message,
    maxChanges = Commit.DEFAULT_MAX_CHANGES,
  }: {
    message: string;
    maxChanges?: number;
  }) => {
    tips.showLoading('检查工作区');
    const count = await getCountOfToBeCommit();
    tips.hideLoading();

    if (count === 0) {
      tips.error('无需要提交的文件');
      return;
    } else if (
      maxChanges &&
      maxChanges > 0 &&
      count > maxChanges &&
      !(await AskFor.shouldContinue({
        message: `本次提交修改数为${count}，是否确认继续？`,
      }))
    ) {
      tips.error('因更改数过多而终止');
      return;
    }

    tips.showLoading('添加文件');
    await git('add', '-A');
    tips.hideLoading();

    tips.showLoading('提交');
    await git('commit', '-m', message);
    tips.hideLoading();
  };

  export const pull = async () => {
    const currentBranch = await getCurrentBranchName();
    await getUpstreamBranchName({ branch: currentBranch });
    tips.showLoading(`拉取远程【${currentBranch}】`);
    const { code, message } = await gitInSilent('pull', '--ff');
    tips.hideLoading();

    if (
      code !== CODE_SUCCESS &&
      (await getIsHasConflict({ message })) // 防止git输出为中文
    ) {
      if (await waitForDealWithConflict()) {
        await commit({ message: `${Commit.Types.conflict}: 合并冲突` });
      } else {
        tips.error('发现冲突，请解决后再提交');
        return;
      }
    } else if (code !== CODE_SUCCESS) {
      tips.error(message);
      return Promise.reject(message);
    }
  };

  /**
   * 推送操作
   */
  export const push = async () => {
    await pull();

    const currentBranch = await getCurrentBranchName();
    tips.showLoading(`推送至远程【${currentBranch}】`);
    await git('push', await getRemoteName(), currentBranch);
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
    const hasToBeCommit = await getToBeCommit();
    tips.hideLoading();

    if (
      hasToBeCommit &&
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
        '-b',
        branch,
        await getUpstreamBranchName({ branch })
      );
    }
    tips.hideLoading();
    await pull();
  };

  /**
   * 合并操作
   */
  export const merge = async ({
    branch,
    message,
    fastForward = true,
  }: {
    branch: string;
    message?: string;
    fastForward?: boolean;
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
      fastForward ? '--ff' : '--no-ff',
      '-m',
      mergeMessage
    );
    tips.hideLoading();

    if (code !== CODE_SUCCESS && (await getIsHasConflict({ message: rs }))) {
      if (await waitForDealWithConflict()) {
        await commit({ message: mergeMessage });
      } else {
        tips.error('发现冲突，请解决后再提交');
      }
    } else if (code !== CODE_SUCCESS) {
      tips.error(rs);
      return Promise.reject(rs);
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
    tips.showLoading(`克隆【${url}】，分支【${branch}】`);
    await git('clone', url, '-b', branch, path);
    tips.hideLoading();
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
    const remoteName = await getRemoteName();
    if (await getIsExistLocalBranch({ branch })) {
      const { code, message: upstreamBranch } = await gitWithoutBreak(
        'rev-parse',
        '--abbrev-ref',
        `${branch}@{u}`
      );
      if (code) {
        tips.showLoading('上游分支不存在，开始创建上游分支');
        await git('push', '-u', remoteName, branch);
        tips.hideLoading();
        return getUpstreamBranchName({ branch });
      } else {
        if (upstreamBranch.replace(`${remoteName}/`, '') !== branch) {
          tips.warn(
            `本地分支：【${branch}】和上游分支：【${upstreamBranch}】似乎不一致`
          );
        }
        return upstreamBranch;
      }
    } else {
      return `${remoteName}/${branch}`;
    }
  };

  /**
   * 获取是否存在还在工作区的更改
   */
  export const getToBeCommit = async () => {
    const count = await getCountOfToBeCommit();
    return count !== 0;
  };

  /**
   * 获取还在工作区更改数
   */
  export const getCountOfToBeCommit = async () => {
    const { message } = await git('status', '-s', '-u');
    return message
      .trim()
      .split(/\r\n|\r|\n/g)
      .filter(Boolean).length;
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
    return message.trim() !== '';
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
    const { message } = await git(
      'remote',
      'get-url',
      '--push',
      await getRemoteName()
    );
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

  /**
   * 获取git配置
   */
  export const getConfig = async ({ key }: { key: string }) => {
    const { code, message } = await gitWithoutBreak('config', '--get', key);
    return code === CODE_SUCCESS ? message : '';
  };

  /**
   * 检查是否有冲突
   */
  export const getIsHasConflict = async ({ message }: { message: string }) => {
    if (RegConflictMessage.test(message)) {
      return true;
    } else {
      // 防止git输出语言为非英语
      const { code } = await gitWithoutBreak('--no-pager', 'diff', '--check');
      return code !== CODE_SUCCESS;
    }
  };

  /**
   * 获取remote名称
   */
  export const getRemoteName = async () => {
    const { code, message } = await gitInSilent('remote');
    return code !== CODE_SUCCESS ? 'origin' : message || 'origin';
  };
}
