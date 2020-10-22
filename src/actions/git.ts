import { execute, executeInSlient } from '../utils/execute';
import { tips } from '../utils/tips';

const commit = async (message: string) => {
  const { code } = await executeInSlient(`git stat2us -z -u`);
  if (code) {
    const rs = await execute(`git add -a`);
    console.log(rs);
    await execute(`git commit -m ${message}`);
  } else {
    tips.error('无工作区提交文件');
  }
};

commit('');
