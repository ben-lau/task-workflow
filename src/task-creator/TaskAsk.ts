import { askForCommitDetails } from '../actions/askForCommitDetails';
import { TaskCreator } from '.';
import { store } from '../contexts/store';

export class TaskAsk extends TaskCreator {
  taskName = '提交信息填写';

  async run() {
    const message = await askForCommitDetails();
    store.setData({ commitMessage: message });
  }
}
