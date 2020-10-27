import { PromisifySpawnLib } from './promisify-spawn';
interface ExecuteOptions extends PromisifySpawnLib.Options {
    level?: EnumExecuteLevel;
}
export declare enum EnumExecuteLevel {
    None = 0,
    Warn = 1,
    Fatal = 2
}
export declare const execute: (command: string, argumentList: Array<string>, options?: ExecuteOptions) => Promise<PromisifySpawnLib.Result>;
export {};
