export declare type Next = (p: unknown) => Promise<unknown>;
export declare type Middleware = (params: unknown, next: Next) => Promise<unknown>;
export declare type Composed = (params?: unknown) => Promise<unknown>;
/**
 * 将中间层函数组合到一起
 * @param middlewares 中间层函数
 */
export declare const compose: (middlewares: Array<Middleware>) => Composed;
