import inquirer from 'inquirer';
import { Commit } from '../constants';

interface IAnswerCommitDetails {
  type: Commit.Types;
  message: string;
}

export const inquireCommitDetails = async (): Promise<string> => {
  const choices = Object.values(Commit.typesMap);
  const { type, message } = await inquirer.prompt<IAnswerCommitDetails>([
    {
      type: 'list',
      name: 'type',
      message: '选择提交类型',
      choices,
      pageSize: choices.length,
    },
    {
      type: 'input',
      name: 'message',
      message: '填写提交内容',
      filter: mes => mes.trim(),
      validate(input) {
        const mes = String(input).trim();
        if (mes.length === 0) {
          return '请输入本次提交内容';
        } else if (mes.length > 70) {
          return '提交内容不能超过70个字';
        } else {
          return true;
        }
      },
    },
  ]);
  return `${type}: ${message}`;
};

interface IAnswerContinue {
  confirm: boolean;
}

/**
 * 询问是否继续
 * @param message 提示信息
 */
export const inquireContinue = async ({ message }: { message?: string }) => {
  const { confirm } = await inquirer.prompt<IAnswerContinue>([
    {
      type: 'confirm',
      name: 'confirm',
      message: message || '是否继续？',
      default: false, // 默认是否了，免得手快快就点确定了
    },
  ]);
  return confirm;
};
