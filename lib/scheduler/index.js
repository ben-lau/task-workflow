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
            var task, taskIndex, result, shouldStart, _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        task = new Creator();
                        taskIndex = index + 1;
                        // 打印空行
                        tips_1.tips.log('');
                        tips_1.tips.log("=====" + taskIndex + "\u3001\u5F00\u59CB\u3010" + task.name + "\u3011=====");
                        return [4 /*yield*/, task.callHook('onStart')];
                    case 1:
                        shouldStart = _d.sent();
                        if (!shouldStart) return [3 /*break*/, 3];
                        return [4 /*yield*/, task.callHook('run', prev)];
                    case 2:
                        result = _d.sent();
                        tips_1.tips.log("=====" + taskIndex + "\u3001\u3010" + task.name + "\u3011\u5B8C\u6210=====");
                        return [3 /*break*/, 4];
                    case 3:
                        tips_1.tips.log("=====" + taskIndex + "\u3001\u3010" + task.name + "\u3011\u88AB\u8DF3\u8FC7=====");
                        _d.label = 4;
                    case 4:
                        _b = (_a = task).callHook;
                        _c = ['onDone'];
                        return [4 /*yield*/, next(result)];
                    case 5: return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent()]))];
                    case 6: return [2 /*return*/, _d.sent()];
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
