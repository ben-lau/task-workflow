import { Context } from '.';

export const contextData = {
  projectId: '',
  sourceBranch: '',
  targetBranch: '',
  commitMessage: '', // 提交内容
};

export const context = new Context(contextData);
