import { TaskCreator } from '.';
import { store } from '../contexts/store';

export class TaskInit extends TaskCreator {
  name = '获取初始化配置';

  async run(params: any) {
    store.setData(params);
    return params;
  }
}
