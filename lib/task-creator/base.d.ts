import { Context } from '../context';
export declare class TaskCreator<T extends Context> implements ILifeHooks<T> {
    taskName: string;
    protected state: {};
    onStart(_context: T): Promise<boolean>;
    run(_context: T): Promise<void>;
    onDone(_context: T, _prevTaskResult: any): Promise<any>;
    callHook<H extends keyof ILifeHooks<T>>(hook: H, ...params: Parameters<this[H]>): ReturnType<this[H]>;
}
export interface ILifeHooks<T> {
    onStart(_context: T): Promise<boolean>;
    run(_context: T): Promise<any>;
    onDone(_context: T, _prevTaskResult: any): Promise<any>;
}
