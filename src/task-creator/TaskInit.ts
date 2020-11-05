import { TaskCreator } from '.';
import { getRemoteUrl } from '../actions/git';
import { store } from '../contexts/store';

export class TaskInit extends TaskCreator {
  name = '获取初始化配置';

  async run(params: any) {
    const url = await getRemoteUrl();
    store.setData(params);
    return;
  }
}
