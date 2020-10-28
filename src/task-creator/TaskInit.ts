import { Context } from '../contexts';
import { TaskCreator } from './base';

export class TaskInit extends TaskCreator {
  taskName = '获取初始化配置';

  async run() {
    return;
  }
}
