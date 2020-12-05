import { TaskCreator } from '.';
import { gitCheckout, gitMerge, gitPush } from '../actions/git';
import { store } from '../contexts/store';

export class TaskGitMerge extends TaskCreator {
  name = '合并代码';

  async run() {
    const targetBranch = store.getData('targetBranch');
    const sourceBranch = store.getData('sourceBranch');

    await gitCheckout({ branch: sourceBranch });
    await gitCheckout({ branch: targetBranch });

    await gitMerge({ branch: sourceBranch });

    await gitPush();
  }
}
