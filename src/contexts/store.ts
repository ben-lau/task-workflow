import { Context } from '.';

export const store = new Context({
  projectId: '',
  sourceBranch: 'master',
  targetBranch: 'dev1',
  commitMessage: '', // 提交内容
});
