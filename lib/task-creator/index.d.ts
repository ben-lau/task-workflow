interface ILifeHooks {
    onStart?(): Promise<boolean>;
    run?(_prevTaskParams: any): Promise<any>;
    onDone?(_nextTaskResult: any): Promise<any>;
}
export declare class TaskCreator implements ILifeHooks {
    taskName: string;
    protected state: {};
    onStart(): Promise<boolean>;
    /**
     * @description run的参数能获取上一个任务run的返回
     */
    run(_prevTaskParams: any): Promise<any>;
    /**
     * @description onDone的参数是下一个任务onDone的返回
     */
    onDone(_nextTaskResult: any): Promise<any>;
    callHook<H extends keyof ILifeHooks>(hook: H, ...params: Parameters<this[H]>): ReturnType<this[H]>;
}
export {};
