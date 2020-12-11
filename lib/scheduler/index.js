"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduler = void 0;
var tslib_1 = require("tslib");
var task_creator_1 = require("../task-creator");
var compose_1 = require("../utils/compose");
var timer_1 = require("../utils/timer");
var tips_1 = require("../utils/tips");
var Scheduler = /** @class */ (function () {
    function Scheduler(taskList) {
        var _this = this;
        this.taskQueue = taskList.map(function (Creator, index) { return function (prev, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var task, taskIndex, result, shouldStart, timeConsuming, _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        task = new Creator();
                        taskIndex = index + 1;
                        // 打印空行
                        tips_1.tips.log('');
                        tips_1.tips.log("=====" + taskIndex + "\u3001\u5F00\u59CB\u3010" + task.name + "\u3011=====");
                        return [4 /*yield*/, task_creator_1.callHook(task, 'onStart')];
                    case 1:
                        shouldStart = _c.sent();
                        if (!shouldStart) return [3 /*break*/, 3];
                        timer_1.timer.start(task.name);
                        return [4 /*yield*/, task_creator_1.callHook(task, 'run', prev)];
                    case 2:
                        result = _c.sent();
                        timeConsuming = timer_1.timer.end(task.name);
                        tips_1.tips.log("=====" + taskIndex + "\u3001\u3010" + task.name + "\u3011\u5B8C\u6210\uFF0C\u8017\u65F6" + timeConsuming + "ms=====");
                        return [3 /*break*/, 4];
                    case 3:
                        tips_1.tips.log("=====" + taskIndex + "\u3001\u3010" + task.name + "\u3011\u88AB\u8DF3\u8FC7=====");
                        _c.label = 4;
                    case 4:
                        _a = task_creator_1.callHook;
                        _b = [task, 'onDone'];
                        return [4 /*yield*/, next(result)];
                    case 5: return [4 /*yield*/, _a.apply(void 0, _b.concat([_c.sent()]))];
                    case 6: return [2 /*return*/, _c.sent()];
                }
            });
        }); }; });
    }
    Scheduler.prototype.start = function (launchOptions) {
        var launcher = compose_1.compose(this.taskQueue);
        return launcher(launchOptions);
    };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
