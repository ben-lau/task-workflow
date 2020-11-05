import { inquireCommitDetails } from '../actions/inquire';
import { TaskCreator } from '.';
import { store } from '../contexts/store';

export class TaskCommitMessage extends TaskCreator {
  name = '提交信息填写';

  async run() {
    const message = await inquireCommitDetails();
    store.setData({ commitMessage: message });
  }
}
