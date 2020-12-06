import { TaskCreator } from '.';
import { createMergeRequest } from '../actions/createMergeRequest';
import { store } from '../contexts/store';

export class TaskMergeRequest extends TaskCreator {
  name = '提交merge request';

  async run() {
    createMergeRequest({
      title: store.getData('commitMessage'),
      targetBranch: store.getData('targetBranch'),
      sourceBranch: store.getData('sourceBranch'),
      projectUrl: store.getData('projectId'),
    });
  }
}
