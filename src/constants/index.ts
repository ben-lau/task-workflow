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
  export enum EnumTypes {
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

  interface TypesMap {
    [p: string]: { name: string; value: string };
  }

  export const typesMap: TypesMap = {
    [EnumTypes.feat]: {
      name: '新功能',
      value: EnumTypes.feat,
    },
    [EnumTypes.fix]: {
      name: '修复',
      value: EnumTypes.fix,
    },
    [EnumTypes.build]: {
      name: '构建打包',
      value: EnumTypes.build,
    },
    [EnumTypes.style]: {
      name: '代码样式',
      value: EnumTypes.style,
    },
    [EnumTypes.refactor]: {
      name: '重构（不新增功能也不是修改bug）',
      value: EnumTypes.refactor,
    },
    [EnumTypes.test]: {
      name: '添加测试',
      value: EnumTypes.test,
    },
    [EnumTypes.chore]: {
      name: '流程或工具更改',
      value: EnumTypes.chore,
    },
    [EnumTypes.conflict]: {
      name: '冲突解决',
      value: EnumTypes.conflict,
    },
    [EnumTypes.merge]: {
      name: '代码合并',
      value: EnumTypes.merge,
    },
  };
}
