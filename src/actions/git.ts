import { execute, executeInSlient } from '../utils/execute';
import { tips } from '../utils/tips';

const RegConflictMessage = /CONFLICT/;

const commit = async (message: string) => {
  const { message: status } = await execute(`git status -z -u`);

  if (!status) {
    tips.error('无需要提交的文件');
    return;
  }
  try {
    await execute(`git add -A`);
    await execute(`git commit -m ${message}`);
    const pullResult = await execute(`git pull`);
  } catch (err) {
    if (err.message && RegConflictMessage.test(err.message)) {
      tips.error('发现冲突，请解决后再提交');
    }
  }
  // if (code) {
  //   const rs = await execute(`git add -a`);
  //   console.log(rs);
  //   // await execute(`git commit -m ${message}`);
  // } else {
  //   tips.error('无工作区提交文件');
  // }
};

(async () => {
  try {
    const rs = await execute(`git pull`);
    console.log(rs);
  } catch (err) {
    console.log(err);
  }
})();
