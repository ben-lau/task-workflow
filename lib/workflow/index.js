"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workflow = void 0;
var tslib_1 = require("tslib");
var compose_1 = require("../utils/compose");
var timer_1 = require("../utils/timer");
var tips_1 = require("../utils/tips");
var DEFAULT_CONFIG = {
    description: '未命名流程',
    validate: function () { return true; },
    steps: [],
};
var Workflow = /** @class */ (function () {
    function Workflow(name, config) {
        this.name = name;
        this.config = tslib_1.__assign(tslib_1.__assign({}, DEFAULT_CONFIG), config);
        this.description = this.config.description;
        this.register();
    }
    Workflow.prototype.register = function () {
        if (Workflow.maps.has(this.name)) {
            tips_1.tips.warn("\u5DF2\u5B58\u5728\u3010" + this.name + "\u3011\u6D41\u7A0B");
        }
        Workflow.maps.set(this.name, this);
    };
    Workflow.prototype.start = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.config.validate()];
                    case 1:
                        if (!(_a.sent())) {
                            tips_1.tips.warn(this.name + "\u9A8C\u8BC1\u5931\u8D25\uFF0C\u5DF2\u7EC8\u6B62");
                            return [2 /*return*/];
                        }
                        else {
                            return [2 /*return*/, compose_1.compose(this.createTaskQueue())()];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Workflow.prototype.createTaskQueue = function () {
        var _this = this;
        var queue = this.config.steps
            .filter(Boolean)
            .map(function (item, index) { return function (prev, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var taskName, task, taskIndex, result, timeConsuming;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskName = '未命名任务';
                        task = function () { return void 0; };
                        if (typeof item !== 'function') {
                            taskName = item.name;
                            task = item.use;
                        }
                        else {
                            task = item;
                        }
                        taskIndex = index + 1;
                        // 打印空行
                        tips_1.tips.log('');
                        tips_1.tips.log("=====" + taskIndex + "\u3001\u5F00\u59CB\u3010" + taskName + "\u3011=====");
                        timer_1.timer.start(taskName);
                        return [4 /*yield*/, task(prev)];
                    case 1:
                        result = _a.sent();
                        timeConsuming = timer_1.timer.end(taskName);
                        tips_1.tips.log("=====" + taskIndex + "\u3001\u3010" + taskName + "\u3011\u5B8C\u6210\uFF0C\u8017\u65F6" + timeConsuming + "ms=====");
                        return [4 /*yield*/, next(result)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); }; });
        return queue;
    };
    Workflow.maps = new Map();
    return Workflow;
}());
exports.Workflow = Workflow;
