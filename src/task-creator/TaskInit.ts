import { TaskCreator } from '.';

export class TaskInit extends TaskCreator {
  name = '获取初始化配置';

  async run(params: any) {
    return params;
  }
}
