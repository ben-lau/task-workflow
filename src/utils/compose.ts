export type Next = (p: unknown) => Promise<unknown>;

export type Middleware = (params: unknown, next: Next) => Promise<unknown>;

export type Composed = (params?: unknown, next?: Next) => Promise<unknown>;

export const compose = (middlewares: Array<Middleware>): Composed =>
  middlewares.reduce(
    (prev, current) => (params, next = p => Promise.resolve(p)) =>
      prev(params, params2 => current(params2, next))
  ) as Composed;

// compose([
//   async (prev, next) => {
//     console.log(1, prev);
//     const rs = await next(12345);
//     console.log(rs);
//     return 12;
//   },
//   async (prev, next) => {
//     console.log(2, prev);
//     const rs = await next(234);
//     console.log(rs);
//     return 11;
//   },
//   async (prev, next) => {
//     console.log(3, prev);
//     const rs = await next(456);
//     console.log(rs);
//     return 10;
//   },
//   async (prev, next) => {
//     console.log(4, prev);
//     const rs = await next(789);
//     console.log(rs);
//     return 9;
//   },
//   async (prev, next) => {
//     console.log(5, prev);
//     const rs = await next(101112);
//     console.log(rs);
//     return 8;
//   },
//   async (prev, next) => {
//     console.log(6, prev);
//     const rs = await next(131415);
//     console.log(rs);
//     return 7;
//   },
// ])(777777);
