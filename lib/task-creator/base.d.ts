interface ILifeHooks {
    onStart?(): Promise<boolean>;
    run?(_prevTaskParams: any): Promise<any>;
    onDone?(_nextTaskResult: any): Promise<any>;
}
export declare class TaskCreator implements ILifeHooks {
    taskName: string;
    protected state: {};
    onStart(): Promise<boolean>;
    run(_prevTaskParams: any): Promise<any>;
    onDone(_nextTaskResult: any): Promise<any>;
    callHook<H extends keyof ILifeHooks>(hook: H, ...params: Parameters<this[H]>): ReturnType<this[H]>;
}
export {};
