export type Next = (p: unknown) => Promise<unknown>;

export type Middleware = (params: unknown, next: Next) => Promise<unknown>;

export type Composed = (params?: unknown) => Promise<unknown>;

const callOnce = (fn: Next) => {
  let called = false;
  return (args => {
    if (called) {
      throw new Error("next can't not be called twice");
    }
    called = true;
    return fn(args);
  }) as Next;
};

/**
 * 将中间层函数组合到一起
 * @param middlewares 中间层函数
 */
export const compose =
  (middlewares: Array<Middleware>): Composed =>
  <T>(initialData: T) =>
    middlewares.reduce(
      (prev, current) => (params, next) =>
        prev(
          params,
          callOnce(params2 => current(params2, next))
        ),
      (p, n) => n(p)
    )(initialData, p => Promise.resolve(p));

// (async () => {
//   const result = await compose([
//     async (prev, next) => {
//       console.log(1, prev);
//       const rs = await next('01');
//       console.log(rs);
//       return 12;
//     },
//     async (prev, next) => {
//       console.log(2, prev);
//       const rs = await next('02');
//       console.log(rs);
//       return 11;
//     },
//     async (prev, next) => {
//       console.log(3, prev);
//       const rs = await next('03');
//       console.log(rs);
//       return 10;
//     },
//     async (prev, next) => {
//       console.log(4, prev);
//       const rs = await next('04');
//       console.log(rs);
//       return 9;
//     },
//     async (prev, next) => {
//       console.log(5, prev);
//       const rs = await next('05');
//       console.log(rs);
//       return 8;
//     },
//     async (prev, next) => {
//       console.log(6, prev);
//       const rs = await next('06');
//       console.log(rs);
//       return 7;
//     },
//   ])(777777);
//   console.log(result);
// })();
