import { exec } from 'child_process';
import { promisify } from 'util';

const TEN_MBYTE = 10 * 1024 * 1024;

export const runScript = (script: string) =>
  promisify(exec)(script, { maxBuffer: TEN_MBYTE, windowsHide: true });
