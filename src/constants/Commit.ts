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
    doc = 'doc',
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
    [Types.doc]: {
      name: '文档修改',
      value: Types.doc,
    },
  };

  // 默认最大更改数
  export const DEFAULT_MAX_CHANGES = 100;
}
