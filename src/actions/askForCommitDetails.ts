import inquirer from 'inquirer';

enum EnumCommitType {
  feat = 'feat',
  fix = 'fix',
  build = 'build',
  style = 'style',
  refactor = 'refactor',
  test = 'test',
  chore = 'chore',
}

interface CommitTypeMap {
  [p: string]: { name: string; value: string };
}

const commitTypeMap: CommitTypeMap = {
  [EnumCommitType.feat]: {
    name: '新功能',
    value: EnumCommitType.feat,
  },
  [EnumCommitType.fix]: {
    name: '修复',
    value: EnumCommitType.fix,
  },
  [EnumCommitType.build]: {
    name: '构建打包',
    value: EnumCommitType.build,
  },
  [EnumCommitType.style]: {
    name: '代码样式',
    value: EnumCommitType.style,
  },
  [EnumCommitType.refactor]: {
    name: '重构（不新增功能也不是修改bug）',
    value: EnumCommitType.refactor,
  },
  [EnumCommitType.test]: {
    name: '添加测试',
    value: EnumCommitType.test,
  },
  [EnumCommitType.chore]: {
    name: '流程或工具更改',
    value: EnumCommitType.chore,
  },
};

export const askForCommitDetails = async () => {
  const { type, message } = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: '选择提交类型',
      choices: Object.values(commitTypeMap),
    },
    {
      type: 'input',
      name: 'message',
      message: '填写提交内容',
      validate(input) {
        const message = String(input).trim();
        if (message.length === 0) {
          return '请输入本次提交内容';
        } else if (message.length > 70) {
          return '提交内容不能超过70个字';
        } else {
          return true;
        }
      },
    },
  ]);
  return `[${type}]: ${message}`;
};
