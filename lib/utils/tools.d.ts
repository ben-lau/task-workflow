/**
 * 获取行数
 * @param {string} str 文本
 */
export declare const getLineCount: (str: string) => number;
export declare type Awaited<T extends Promise<unknown>> = T extends Promise<infer U> ? U : never;
