import { EnumExecuteLevel, execute } from '.';

export const git = (...args: Array<string>) => {
  return execute('git', args, { level: EnumExecuteLevel.Fatal });
};

export const gitWithoutBreak = (...args: Array<string>) => {
  return execute('git', args, { level: EnumExecuteLevel.Warn });
};

export const gitInSilent = (...args: Array<string>) => {
  return execute('git', args, { level: EnumExecuteLevel.None });
};
