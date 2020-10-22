"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
exports.compose = function (middlewares) {
    return middlewares.reduce(function (prev, current) { return function (ctx, next) {
        if (next === void 0) { next = function () { return Promise.resolve(); }; }
        return prev(ctx, function () { return current(ctx, next); });
    }; });
};
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
