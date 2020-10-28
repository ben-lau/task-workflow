import { Context } from '.';

export const store = new Context({
  projectId: '',
  sourceBranch: '',
  targetBranch: '',
  commitMessage: '', // 提交内容
});
