/**
 * 获取行数
 * @param {string} str 文本
 */
export const getLineCount = (str: string) =>
  (str.match(/\r\n|\r|\n/g) || []).length;

export type Awaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U
  : never;
