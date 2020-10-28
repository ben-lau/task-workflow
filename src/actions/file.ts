import { execute } from '../utils/execute';

export const copyFileTo = (from: string, to: string) => {
  return execute('cp', ['-R', from, to]);
};
