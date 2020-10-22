import { askForCommitDetails } from '../actions/askForCommitDetails';
import { Context } from '../context';
import { TaskCreator } from './base';

export class TaskAsk extends TaskCreator<Context> {
  taskName = '提交信息填写';

  state = {};

  async run(context: Context) {
    const message = await askForCommitDetails();
    context.setData({ commitMessage: message });
  }
}
