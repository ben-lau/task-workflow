import { gitCommit } from '../actions/git';
import { TaskCreator } from './base';

export class TaskGitPush extends TaskCreator {
  taskName = '提交代码到远程';

  async run({ commitMessage }: { commitMessage: string }) {
    await gitCommit(commitMessage);
  }
}
