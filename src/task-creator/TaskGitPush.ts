import { gitCommit, gitPush } from '../actions/git';
import { TaskCreator } from '.';

export class TaskGitPush extends TaskCreator {
  name = '提交代码到远程';

  async run(message: string) {
    await gitCommit({ message });
    await gitPush();
  }
}
