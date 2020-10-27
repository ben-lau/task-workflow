import { createMergeRequest } from '../actions/createMergeRequest';
import { Context } from '../contexts';
import { TaskCreator } from './base';

export class TaskMergeRequest extends TaskCreator<Context> {
  taskName = '提交merge request';

  async run(context: Context) {
    createMergeRequest({
      title: context.getData('commitMessage'),
      targetBranch: context.getData('targetBranch'),
      sourceBranch: context.getData('sourceBranch'),
      projectId: context.getData('projectId'),
    });
  }
}
