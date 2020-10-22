/**
 * @description 为什么不用shelljs?因为他底层实现为exec，有固定缓冲区，而且nodejs的exec有bug（错误码不保证为数字）
 */

import { SpawnOptions } from 'child_process';
import { spawn } from 'cross-spawn';
// import { TranformStream } from './TransformStream';

export namespace PromisifySpawnLib {
  export interface Options extends SpawnOptions {}

  export interface Result {
    code: number;
    message: string;
  }
}

export const CODE_SUCCESS = 0;

export const CODE_ERROR = 10086;

export const promisifySpawn = (
  command: string,
  argumentList: Array<string>,
  options: PromisifySpawnLib.Options = {}
) =>
  new Promise<PromisifySpawnLib.Result>((resolve, reject) => {
    const task = spawn(command, argumentList, { ...options, stdio: 'pipe' });

    const cache: Array<Buffer> = [];

    task.stdout.on('data', chunk => {
      cache.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });

    task.stderr.on('data', chunk => {
      cache.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });

    task.on('close', code => {
      const message = Buffer.concat(cache).toString();
      /* exec的bug */
      code === undefined || code === null || code === CODE_SUCCESS
        ? resolve({ code: CODE_SUCCESS, message })
        : reject({ code, message });
    });

    task.on('error', err => {
      reject({
        code: CODE_ERROR,
        message: `${err.message} \n${err.stack}`,
      });
    });
  });
