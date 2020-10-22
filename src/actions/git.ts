import { execute, executeInSlient } from '../utils/execute';
import { CODE_SUCCESS } from '../utils/execute/promisify-spawn';
import { tips } from '../utils/tips';

const RegConflictMessage = /CONFLICT/;

export const gitCommit = async (message: string) => {
  const { message: status } = await execute(`git status -z -u`);

  if (!status) {
    tips.error('无需要提交的文件');
    return;
  }

  await execute(`git add -A`);
  await execute(`git commit -m "${message}"`);
  const pullResult = await executeInSlient(`git pull`);

  if (
    pullResult.code !== CODE_SUCCESS &&
    RegConflictMessage.test(pullResult.message)
  ) {
    tips.error('发现冲突，请解决后再提交');
    return;
  }
  await executeInSlient(`git push origin`);
};
