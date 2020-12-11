import { exec } from 'child_process';
import { promisify } from 'util';

const TEN_MBYTE = 10 * 1024 * 1024;

/**
 * 执行指令
 * @param cmd 字符串指令
 */
export const runCmd = ({ cmd }: { cmd: string }) =>
  promisify(exec)(cmd, { maxBuffer: TEN_MBYTE, windowsHide: true });
