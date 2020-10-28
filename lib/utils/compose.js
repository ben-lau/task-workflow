"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
exports.compose = function (middlewares) {
    return middlewares.reduce(function (prev, current) { return function (params, next) {
        if (next === void 0) { next = function (p) { return Promise.resolve(p); }; }
        return prev(params, function (params2) { return current(params2, next); });
    }; });
};
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
