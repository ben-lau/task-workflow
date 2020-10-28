import { TaskCreator } from '.';
import { createMergeRequest } from '../actions/createMergeRequest';
import { store } from '../contexts/store';

export class TaskMergeRequest extends TaskCreator {
  taskName = '提交merge request';

  async run() {
    createMergeRequest({
      title: store.getData('commitMessage'),
      targetBranch: store.getData('targetBranch'),
      sourceBranch: store.getData('sourceBranch'),
      projectId: store.getData('projectId'),
    });
  }
}
