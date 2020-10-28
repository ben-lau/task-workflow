import { createMergeRequest } from '../actions/createMergeRequest';
import { Context } from '../contexts';
import { TaskCreator } from './base';

export class TaskMergeRequest extends TaskCreator {
  taskName = '提交merge request';

  async run() {
    // const context = this.context;
    // createMergeRequest({
    //   title: context.getData('commitMessage'),
    //   targetBranch: context.getData('targetBranch'),
    //   sourceBranch: context.getData('sourceBranch'),
    //   projectId: context.getData('projectId'),
    // });
  }
}
