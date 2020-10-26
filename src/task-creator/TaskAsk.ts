import { askForCommitDetails } from '../actions/askForCommitDetails';
import { Context } from '../contexts';
import { TaskCreator } from './base';

export class TaskAsk extends TaskCreator<Context> {
  taskName = '提交信息填写';

  async run(context: Context) {
    const message = await askForCommitDetails();
    context.setData({ commitMessage: message });
  }
}
