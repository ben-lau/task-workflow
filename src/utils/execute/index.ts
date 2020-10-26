import { promisifySpawn, PromisifySpawnLib } from './promisify-spawn';
import { tips } from '../tips';

interface ExecuteOptions extends PromisifySpawnLib.Options {
  level?: EnumExecuteLevel;
}
export enum EnumExecuteLevel {
  None,
  Warn,
  Fatal,
}

const getErrorMessageInExecute = (
  error: PromisifySpawnLib.Result | Error,
  command: string
) =>
  error instanceof Error
    ? `ERROR IN【${command}】${error.stack ? `\nSTACK:${error.stack} ` : ''}\n${
        error.message
      }`
    : `ERROR IN【${command}】\nCODE:${error.code} \n${error.message}`;

export const execute = async (
  command: string,
  argumentList: Array<string>,
  options: ExecuteOptions = {}
): Promise<PromisifySpawnLib.Result> => {
  try {
    return await promisifySpawn(command, argumentList, options);
  } catch (err) {
    if (options.level === EnumExecuteLevel.Fatal) {
      tips.error(getErrorMessageInExecute(err, command));
    } else if (options.level === EnumExecuteLevel.Warn) {
      tips.warn(getErrorMessageInExecute(err, command));
    }
    return err;
  }
};
