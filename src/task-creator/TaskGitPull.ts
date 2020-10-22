import { TaskCreator } from './base';

export class TaskGitPull<T> extends TaskCreator<T> {
  taskName = '拉取代码';

  async run() {}
}
