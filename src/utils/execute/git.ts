import { execute, executeWithoutBreak, executeInSlient } from '.';

export const git = (...args: Array<string>) => {
  return execute('git', args);
};

export const gitWithoutBreak = (...args: Array<string>) => {
  return executeWithoutBreak('git', args);
};

export const gitInSlient = (...args: Array<string>) => {
  return executeInSlient('git', args);
};
