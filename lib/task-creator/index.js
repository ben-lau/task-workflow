"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callHook = exports.TaskCreator = void 0;
var tslib_1 = require("tslib");
var constants_1 = require("../constants");
var TaskCreator = /** @class */ (function () {
    function TaskCreator() {
        this.name = '默认任务';
        this.state = {};
    }
    TaskCreator.prototype.onStart = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    /**
     * @description run的参数能获取上一个任务run的返回
     */
    TaskCreator.prototype.run = function (_prevTaskParams) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     * @description onDone的参数是下一个任务onDone的返回
     */
    TaskCreator.prototype.onDone = function (_nextTaskResult) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    TaskCreator.__type__ = constants_1.TaskSymbol.FunctionalTask;
    return TaskCreator;
}());
exports.TaskCreator = TaskCreator;
var callHook = function (task, hook) {
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    return task[hook].apply(task, params);
};
exports.callHook = callHook;
