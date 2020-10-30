import { gitCommit, gitPush } from '../actions/git';
import { TaskCreator } from '.';
import { store } from '../contexts/store';

export class TaskGitPush extends TaskCreator {
  taskName = '提交代码到远程';

  async run() {
    await gitCommit(store.getData('commitMessage'));
    await gitPush();
  }
}
