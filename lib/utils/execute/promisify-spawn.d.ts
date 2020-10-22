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
