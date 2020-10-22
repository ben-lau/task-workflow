import { PromisifySpawnLib } from './promisify-spawn';
export declare const execute: (command: string, argumentList: Array<string>, options?: PromisifySpawnLib.Options) => Promise<PromisifySpawnLib.Result>;
export declare const executeWithoutBreak: (command: string, argumentList: Array<string>, options?: PromisifySpawnLib.Options) => Promise<PromisifySpawnLib.Result>;
export declare const executeInSlient: (command: string, argumentList: Array<string>, options?: PromisifySpawnLib.Options) => Promise<PromisifySpawnLib.Result>;
