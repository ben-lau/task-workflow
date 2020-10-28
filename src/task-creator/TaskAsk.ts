import { askForCommitDetails } from '../actions/askForCommitDetails';
import { Context } from '../contexts';
import { contextData } from '../contexts/initialData';
import { TaskCreator } from './base';

export class TaskAsk extends TaskCreator {
  taskName = '提交信息填写';

  async run() {
    const message = await askForCommitDetails();
    return { commitMessage: message };
  }
}
