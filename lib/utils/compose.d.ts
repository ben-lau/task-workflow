export declare type Next = (p: unknown) => Promise<unknown>;
export declare type Middleware = (params: unknown, next: Next) => Promise<unknown>;
export declare type Composed = (params?: unknown, next?: Next) => Promise<unknown>;
export declare const compose: (middlewares: Array<Middleware>) => Composed;
