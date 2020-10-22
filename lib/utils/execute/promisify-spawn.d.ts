/**
 * @description 为什么不用shelljs?因为他底层实现为exec，有固定缓冲区，而且nodejs的exec有bug（错误码不保证为数字）
 */
/// <reference types="node" />
import { SpawnOptions } from 'child_process';
export declare namespace PromisifySpawnLib {
    interface Options extends SpawnOptions {
    }
    interface Result {
        code: number;
        message: string;
    }
}
export declare const CODE_SUCCESS = 0;
export declare const CODE_ERROR = 10086;
export declare const promisifySpawn: (command: string, argumentList: Array<string>, options?: PromisifySpawnLib.Options) => Promise<PromisifySpawnLib.Result>;
