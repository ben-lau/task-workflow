import { execute } from '../utils/execute';

export const copyTo = ({ from, to }: { from: string; to: string }) =>
  execute('cp', ['-R', from, to]);

export const entryDirectory = ({ dir }: { dir: string }) =>
  execute('cd', [dir]);

export const generateDir = ({ dir }: { dir: string }) =>
  execute('mkidr', ['-p', dir]);
