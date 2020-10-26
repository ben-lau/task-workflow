import { Context } from '../contexts';

export class TaskCreator<T extends Context> implements ILifeHooks<T> {
  taskName = '默认任务';

  protected state = {};

  async onStart(_context: T) {
    return true;
  }

  async run(_context: T) {
    return;
  }

  async onDone(_context: T, _prevTaskResult: any): Promise<any> {
    return;
  }

  callHook<H extends keyof ILifeHooks<T>>(
    hook: H,
    ...params: Parameters<this[H]>
  ): ReturnType<this[H]> {
    // TODO: 这里的类型推断有问题
    return (this[hook] as any)(...params);
  }
}

export interface ILifeHooks<T> {
  onStart(_context: T): Promise<boolean>;
  run(_context: T): Promise<any>;
  onDone(_context: T, _prevTaskResult: any): Promise<any>;
}
