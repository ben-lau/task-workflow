interface ILifeHooks {
  onStart?(): Promise<boolean>;
  run?(_prevTaskParams: any): Promise<any>;
  onDone?(_nextTaskResult: any): Promise<any>;
}

export class TaskCreator implements ILifeHooks {
  taskName = '默认任务';

  protected state = {};

  async onStart() {
    return true;
  }

  /**
   * @description run的参数能获取上一个任务run的返回
   */
  async run(_prevTaskParams: any): Promise<any> {
    return;
  }

  /**
   * @description onDone的参数是下一个任务onDone的返回
   */
  async onDone(_nextTaskResult: any): Promise<any> {
    return;
  }

  callHook<H extends keyof ILifeHooks>(
    hook: H,
    ...params: Parameters<this[H]>
  ): ReturnType<this[H]> {
    // TODO: 这里的类型推断有问题
    return (this[hook] as any)(...params);
  }
}
