import { git, gitInSilent } from '../utils/execute/git';
import { CODE_SUCCESS } from '../utils/execute/promisify-spawn';
import { tips } from '../utils/tips';

const RegConflictMessage = /CONFLICT/i;

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

  tips.showLoading('拉取远程');
  const pullResult = await gitInSilent('pull');

  if (
    pullResult.code !== CODE_SUCCESS &&
    RegConflictMessage.test(pullResult.message)
  ) {
    tips.error('发现冲突，请解决后再提交');
    return;
  }

  tips.showLoading('推送至远程');
  await gitInSilent('push', 'origin');
  
  tips.hideLoading();
};
