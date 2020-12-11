import { inquireCommitDetails } from '../actions/inquire';
import { TaskCreator } from '.';

export class TaskCommitMessage extends TaskCreator {
  name = '提交信息填写';

  async run() {
    const message = await inquireCommitDetails();
    return message;
  }
}
