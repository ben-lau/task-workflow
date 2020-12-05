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

export namespace Commit {
  export const enum Types {
    feat = 'feat',
    fix = 'fix',
    build = 'build',
    style = 'style',
    refactor = 'refactor',
    test = 'test',
    chore = 'chore',
    conflict = 'conflict',
    merge = 'merge',
  }

  interface ITypesMap {
    [p: string]: { name: string; value: string };
  }

  export const typesMap: ITypesMap = {
    [Types.feat]: {
      name: '新功能',
      value: Types.feat,
    },
    [Types.fix]: {
      name: '修复',
      value: Types.fix,
    },
    [Types.build]: {
      name: '构建打包',
      value: Types.build,
    },
    [Types.style]: {
      name: '代码样式',
      value: Types.style,
    },
    [Types.refactor]: {
      name: '重构（不新增功能也不是修改bug）',
      value: Types.refactor,
    },
    [Types.test]: {
      name: '添加测试',
      value: Types.test,
    },
    [Types.chore]: {
      name: '流程或工具更改',
      value: Types.chore,
    },
    [Types.conflict]: {
      name: '冲突解决',
      value: Types.conflict,
    },
    [Types.merge]: {
      name: '代码合并',
      value: Types.merge,
    },
  };
}
