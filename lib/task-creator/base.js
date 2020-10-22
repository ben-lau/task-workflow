"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreator = void 0;
var tslib_1 = require("tslib");
var TaskCreator = /** @class */ (function () {
    function TaskCreator() {
        this.taskName = '默认任务';
        this.state = {};
    }
    TaskCreator.prototype.onStart = function (_context) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    TaskCreator.prototype.run = function (_context) {
        return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    TaskCreator.prototype.onDone = function (_context, _prevTaskResult) {
        return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    TaskCreator.prototype.callHook = function (hook) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        // TODO: 这里的类型推断有问题
        return this[hook].apply(this, params);
    };
    return TaskCreator;
}());
exports.TaskCreator = TaskCreator;
