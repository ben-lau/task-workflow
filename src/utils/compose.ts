export type Next = () => Promise<any>;

export type Middleware<T> = (context: T, next: Next) => Promise<any>;

export type Composed<T> = (context: T, next?: Next) => Promise<any>;

export const compose = <T>(middlewares: Array<Middleware<T>>): Composed<T> =>
  middlewares.reduce(
    (prev, current) => (ctx, next: Next = () => Promise.resolve()) =>
      prev(ctx, () => current(ctx, next))
  ) as Composed<T>;

// compose<number>([
//   async (prev, next) => {
//     console.log(1, prev);
//     const rs = await next();
//     console.log(rs);
//     return 12;
//   },
//   async (prev, next) => {
//     console.log(2, prev);
//     const rs = await next();
//     console.log(rs);
//     return 11;
//   },
//   async (prev, next) => {
//     console.log(3, prev);
//     const rs = await next();
//     console.log(rs);
//     return 10;
//   },
//   async (prev, next) => {
//     console.log(4, prev);
//     const rs = await next();
//     console.log(rs);
//     return 9;
//   },
//   async (prev, next) => {
//     console.log(5, prev);
//     const rs = await next();
//     console.log(rs);
//     return 8;
//   },
//   async (prev, next) => {
//     console.log(6, prev);
//     const rs = await next();
//     console.log(rs);
//     return 7;
//   },
// ])(88888888);
