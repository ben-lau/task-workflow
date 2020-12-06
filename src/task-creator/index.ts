interface ILifeHooks<P = any, N = any> {
  onStart?(): Promise<boolean>;
  run?(_prevTaskParams: P): Promise<any>;
  onDone?(_nextTaskResult: N): Promise<any>;
}

export class TaskCreator<P = any, N = any> implements ILifeHooks<P, N> {
  name = '默认任务';

  protected state = {};

  async onStart() {
    return true;
  }

  /**
   * @description run的参数能获取上一个任务run的返回
   */
  async run(_prevTaskParams: P): Promise<any> {
    return;
  }

  /**
   * @description onDone的参数是下一个任务onDone的返回
   */
  async onDone(_nextTaskResult: N): Promise<any> {
    return;
  }
}

export const callHook = <H extends keyof ILifeHooks, TH extends TaskCreator[H]>(
  task: TaskCreator,
  hook: H,
  ...params: Parameters<TH>
): ReturnType<TH> => (task[hook] as any)(...params);
