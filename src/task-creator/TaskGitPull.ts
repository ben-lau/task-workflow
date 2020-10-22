import { TaskCreator } from './base';

export class TaskGitPull<T> extends TaskCreator<T> {
  async onStart() {
    console.log('onStart');
    return true;
  }

  async run() {
    console.log('run');
  }

  async onDone(context: T, _result: any) {
    console.log(_result);
    console.log('onDone');
  }
}
