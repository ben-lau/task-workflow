import { execute } from '../utils/execute';
import { homedir } from 'os';

export namespace File {
  /**
   * 复制文件
   * @param from 起始目录
   * @param to 终点目录
   */
  export const copyTo = ({ from, to }: { from: string; to: string }) =>
    execute('cp', ['-R', from, to]);

  /**
   * 进入文件夹
   * @param dir 文件夹路径
   */
  export const entryDirectory = async ({ dir }: { dir: string }) => {
    if (!dir) {
      dir = homedir();
    }
    await execute('cd', [dir]); // 如果找不到文件或目录会在这里停止
    process.chdir(dir);
  };

  /**
   * 确认文件夹存在（不存在则创建）
   * @param dir 文件夹路径
   */
  export const generateDir = ({ dir }: { dir: string }) =>
    execute('mkdir', ['-p', dir]);
}
