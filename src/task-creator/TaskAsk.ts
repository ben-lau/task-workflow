import inquirer from 'inquirer';
import { tips } from './../utils/tips';
import { TaskCreator } from './base';

const commitType = {
  feat: { value: 123 },
};

const commitTypeSelectList = [commitType.feat];

export class TaskAsk<T> extends TaskCreator<T> {
  state = {};

  async run() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'commitType',
        message: '选择提交类型',
        choices: [],
      },
    ]);
  }

  async onDone(context: T, _result: any) {
    console.log(_result);
    console.log('onDone');
  }
}
