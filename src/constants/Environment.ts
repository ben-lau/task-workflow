import path from 'path';
import fse from 'fs-extra';

export namespace Environment {
  /**
   * 调试模式
   */
  let DEBUG_MODE = false;

  export const setDebugMode = (isOn: boolean) => (DEBUG_MODE = !!isOn);

  export const getDebugMode = () => DEBUG_MODE;

  /**
   * 根目录
   */
  export const DIR_ROOT = process.cwd();

  /**
   * 存储目录
   */
  export const DIR_STORAGE = path.resolve(
    DIR_ROOT,
    'node_modules',
    '.task-workflow'
  );

  /**
   * 日志目录
   */
  export const FILE_LOG = path.resolve(DIR_STORAGE, './log');

  // 确保文件存在
  fse.ensureFileSync(FILE_LOG);

  /**
   * 错误退出码
   */
  export const ERROR_CODE = 10;
}
