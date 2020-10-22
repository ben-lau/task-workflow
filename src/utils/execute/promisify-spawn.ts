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
  options: PromisifySpawnLib.Options = {}
) =>
  new Promise<PromisifySpawnLib.Result>((resolve, reject) => {
    const [cmd, ...args] = command.split(' ');
    const task = spawn(cmd, args, { ...options, stdio: 'pipe' });

    const cache: Array<Buffer> = [];

    task.stdout.on('data', chunk => {
      cache.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });

    task.stderr.on('data', chunk => {
      cache.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });

    task.on('close', code => {
      const message = Buffer.concat(cache).toString();
      code === CODE_SUCCESS
        ? resolve({ code, message })
        : reject({ code, message });
    });

    task.on('error', err => {
      reject({
        code: CODE_ERROR,
        message: `${err.message} \n${err.stack}`,
      });
    });
  });
