"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduler = void 0;
var tslib_1 = require("tslib");
var compose_1 = require("../utils/compose");
var tips_1 = require("../utils/tips");
var Scheduler = /** @class */ (function () {
    function Scheduler(taskList) {
        var _this = this;
        this.taskQueue = taskList.map(function (Creator, index) { return function (prev, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var task, taskIndex, result, shouldStart, _a, nextTaskResult;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        task = new Creator();
                        taskIndex = index + 1;
                        // 打印空行
                        tips_1.tips.log('');
                        tips_1.tips.log("=====" + taskIndex + "\u3001\u5F00\u59CB\u3010" + task.taskName + "\u3011=====");
                        return [4 /*yield*/, task.callHook('onStart')];
                    case 1:
                        shouldStart = _b.sent();
                        _a = shouldStart;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, task.callHook('run', prev)];
                    case 2:
                        _a = (result = _b.sent());
                        _b.label = 3;
                    case 3:
                        _a;
                        tips_1.tips.log("=====" + taskIndex + "\u3001\u3010" + task.taskName + "\u3011\u5B8C\u6210=====");
                        return [4 /*yield*/, next(result)];
                    case 4:
                        nextTaskResult = _b.sent();
                        return [4 /*yield*/, task.callHook('onDone', nextTaskResult)];
                    case 5: return [2 /*return*/, _b.sent()];
                }
            });
        }); }; });
    }
    Scheduler.prototype.start = function () {
        var launcher = compose_1.compose(this.taskQueue);
        return launcher();
    };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
