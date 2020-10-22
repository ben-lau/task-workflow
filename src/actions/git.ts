import { git, gitInSlient } from '../utils/execute/git';
import { CODE_SUCCESS } from '../utils/execute/promisify-spawn';
import { tips } from '../utils/tips';

const RegConflictMessage = /CONFLICT/;

export const gitCommit = async (message: string) => {
  const { message: status } = await git('status', '-z', '-u');

  if (!status) {
    tips.error('无需要提交的文件');
    return;
  }

  await git('add', '-A');
  await git('commit', '-m', message);
  const pullResult = await gitInSlient('pull');

  if (
    pullResult.code !== CODE_SUCCESS &&
    RegConflictMessage.test(pullResult.message)
  ) {
    tips.error('发现冲突，请解决后再提交');
    return;
  }
  await gitInSlient('push', 'origin');
};
