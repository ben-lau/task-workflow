import { promisifySpawn, PromisifySpawnLib } from './promisify-spawn';
import { tips } from '../tips';

interface ExecuteOptions extends PromisifySpawnLib.Options {
  /**
   * 错误等级
   */
  level?: EnumExecuteLevel;
}

/**
 * 错误等级枚举
 */
export enum EnumExecuteLevel {
  /**
   * 不报错
   */
  None,

  /**
   * 仅显示报错信息
   */
  Warn,

  /**
   * 报错并退出当前进程
   */
  Fatal,
}

const getWarnMessageInExecute = (error: PromisifySpawnLib.Result | Error) =>
  error instanceof Error
    ? `${error.stack ? `STACK:${error.stack} ` : ''}\n${error.message}`
    : `CODE:${error.code} \n${error.message}`;

const getErrorMessageInExecute = (
  error: PromisifySpawnLib.Result | Error,
  command: string
) =>
  error instanceof Error
    ? `ERROR IN【${command}】${error.stack ? `\nSTACK:${error.stack} ` : ''}\n${
        error.message
      }`
    : `ERROR IN【${command}】\nCODE:${error.code} \n${error.message}`;

/**
 * 执行命令，并且按照错误等级在错误时作出不同反应
 * @param command 命令
 * @param argumentList 参数列表
 * @param options  配置
 */
export const execute = async (
  command: string,
  argumentList: Array<string>,
  options: ExecuteOptions = {}
): Promise<PromisifySpawnLib.Result> => {
  try {
    return await promisifySpawn(command, argumentList, options);
  } catch (err) {
    const cmd = `${command} ${argumentList.join(' ')}`;
    if (options.level === EnumExecuteLevel.Fatal) {
      tips.error(getErrorMessageInExecute(err, cmd));
    } else if (options.level === EnumExecuteLevel.Warn) {
      tips.warn(getWarnMessageInExecute(err));
    }
    return err;
  }
};
