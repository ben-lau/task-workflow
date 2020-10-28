export declare type Next = (p: any) => Promise<any>;
export declare type Middleware<T> = (context: T, next: Next) => Promise<any>;
export declare type Composed<T> = (context?: T, next?: Next) => Promise<any>;
export declare const compose: <T>(middlewares: Middleware<T>[]) => Composed<T>;
