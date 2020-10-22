import { gitCommit } from '../actions/git';
import { Context } from '../context';
import { TaskCreator } from './base';

export class TaskGitPush extends TaskCreator<Context> {
  taskName = '提交代码到远程';

  async run(context: Context) {
    const message = context.getData('commitMessage');
    await gitCommit(message);
  }
}
