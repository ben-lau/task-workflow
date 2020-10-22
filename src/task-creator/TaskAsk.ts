import inquirer from 'inquirer';
import { askForCommitDetails } from '../actions/askForCommitDetails';
import { TaskCreator } from './base';

export class TaskAsk<T> extends TaskCreator<T> {
  taskName = '提交信息填写';

  state = {};

  async run() {
    await askForCommitDetails();
  }
}
