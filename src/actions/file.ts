import { execute } from '../utils/execute';

/**
 * 复制文件
 * @param from 起始目录
 * @param to 终点目录
 */
export const copyTo = ({ from, to }: { from: string; to: string }) =>
  execute('cp', ['-R', from, to]);

/**
 * 进入文件夹
 * @param dir 文件夹路径
 */
export const entryDirectory = ({ dir }: { dir: string }) =>
  execute('cd', [dir]);

/**
 * 确认文件夹存在（不存在则创建）
 * @param dir 文件夹路径
 */
export const generateDir = ({ dir }: { dir: string }) =>
  execute('mkidr', ['-p', dir]);
