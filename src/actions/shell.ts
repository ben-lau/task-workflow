import { spawn } from 'cross-spawn';
import { execute } from '../utils/execute';

/**
 * 成功状态码
 */
const CODE_SUCCESS = 0;

/**
 * 失败状态码
 */
const CODE_ERROR = 10086;

export namespace Shell {
  /**
   * 执行指令，但无法获取结果，只能返回成功失败
   */
  export const run = ({ cmd }: { cmd: string }) =>
    new Promise((resolve, reject) => {
      const task = spawn(cmd, [], { shell: true, stdio: 'inherit' });

      task.on('close', code => {
        /* exec的bug */
        code === undefined || code === null || code === CODE_SUCCESS
          ? resolve({ code: CODE_SUCCESS })
          : reject({ code });
      });

      task.on('error', err => {
        reject({
          code: CODE_ERROR,
          message: `${err.message} \n${err.stack}`,
        });
      });
    });

  /**
   * 执行指令，可以获取结果，但是会丢失颜色等信息
   */
  export const exec = ({ cmd }: { cmd: string }) =>
    execute(cmd, [], { shell: true });
}
