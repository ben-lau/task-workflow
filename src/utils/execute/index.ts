import { promisifySpawn, PromisifySpawnLib } from './promisify-spawn';
import { tips } from '../tips';

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
  options: PromisifySpawnLib.Options = {}
): Promise<PromisifySpawnLib.Result> => {
  try {
    return await promisifySpawn(command, argumentList, options);
  } catch (err) {
    tips.error(getErrorMessageInExecute(err, command));
    return err;
  }
};

export const executeWithoutBreak = async (
  command: string,
  argumentList: Array<string>,
  options: PromisifySpawnLib.Options = {}
): Promise<PromisifySpawnLib.Result> => {
  try {
    return await promisifySpawn(command, argumentList, options);
  } catch (err) {
    tips.warn(getErrorMessageInExecute(err, command));
    return err;
  }
};

export const executeInSlient = async (
  command: string,
  argumentList: Array<string>,
  options: PromisifySpawnLib.Options = {}
): Promise<PromisifySpawnLib.Result> => {
  try {
    return await promisifySpawn(command, argumentList, options);
  } catch (err) {
    return err;
  }
};
