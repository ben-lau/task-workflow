interface ILifeHooks<P = any, N = any> {
    onStart?(): Promise<boolean>;
    run?(_prevTaskParams: P): Promise<any>;
    onDone?(_nextTaskResult: N): Promise<any>;
}
export declare class TaskCreator<P = any, N = any> implements ILifeHooks<P, N> {
    name: string;
    protected state: {};
    onStart(): Promise<boolean>;
    /**
     * @description run的参数能获取上一个任务run的返回
     */
    run(_prevTaskParams: P): Promise<any>;
    /**
     * @description onDone的参数是下一个任务onDone的返回
     */
    onDone(_nextTaskResult: N): Promise<any>;
}
export declare const callHook: <H extends "onStart" | "run" | "onDone", TH extends TaskCreator<any, any>[H]>(task: TaskCreator, hook: H, ...params: Parameters<TH>) => ReturnType<TH>;
export {};
