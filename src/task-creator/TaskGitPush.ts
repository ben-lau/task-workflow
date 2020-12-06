import { gitCommit, gitPush } from '../actions/git';
import { TaskCreator } from '.';
import { store } from '../contexts/store';

export class TaskGitPush extends TaskCreator {
  name = '提交代码到远程';

  async run() {
    await gitCommit({ message: store.getData('commitMessage') });
    await gitPush();
  }
}
