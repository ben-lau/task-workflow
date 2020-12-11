"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
var tslib_1 = require("tslib");
var Actions = tslib_1.__importStar(require("./../actions"));
/**
 * 将任务方法包装成统一的延迟执行函数，支持传入原任务参数或者函数获取任务参数
 * @param task 任务方法
 */
var createTaskFactory = function (task) { return function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    return function (p) {
        return task.apply(void 0, (typeof params[0] === 'function' ? params[0](p) : params));
    };
}; };
exports.Tasks = Object.keys(Actions).reduce(function (previous, key) {
    var _a;
    return (tslib_1.__assign(tslib_1.__assign({}, previous), (_a = {}, _a[key] = createTaskFactory(Actions[key]), _a)));
}, {});
