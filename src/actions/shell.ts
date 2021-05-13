import { exec } from 'child_process';
import { tips } from '../utils/tips';

const TEN_MBYTE = 10 * 1024 * 1024;

const CODE_SUCCESS = 0;

export namespace Shell {
  interface IResultRunCommand
    extends Promise<{ stdout: string; stderr: string }> {}

  /**
   * 执行指令
   * @param cmd 字符串指令
   */
  export const run = ({ cmd }: { cmd: string }): IResultRunCommand =>
    new Promise((resolve, reject) => {
      const cProcess = exec(
        cmd,
        {
          maxBuffer: TEN_MBYTE,
          env: { ...process.env, NPM_CONFIG_COLOR: 'always' },
          encoding: 'utf8',
        },
        (err, stdout, stderr) => {
          if (!err) {
            resolve({ stdout, stderr });
          } else if (
            err.code === undefined ||
            err.code === null ||
            err.code === CODE_SUCCESS
          ) {
            /* exec的bug */
            resolve({ stdout, stderr });
          } else {
            tips.error(String(err));
            reject({ stdout, stderr });
          }
        }
      );
      if (cProcess.stdout) {
        cProcess.stdout.pipe(process.stdout);
      }
      // if (cProcess.stderr) {
      //   cProcess.stderr.pipe(process.stderr);
      // }
    });
}
