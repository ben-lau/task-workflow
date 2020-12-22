import path from 'path';

export namespace Environment {
  /**
   * 调试模式
   */
  export const DEBUG_MODE = false;

  /**
   * 根目录
   */
  export const DIR_HOME = process.env.HOME!;

  /**
   * 存储目录
   */
  export const DIR_STORAGE = path.resolve(DIR_HOME, '.ik-gz');

  /**
   * 用户账号
   */
  export const FILE_USER_ACCOUNT = path.resolve(DIR_STORAGE, 'user_account');
}
