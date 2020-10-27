"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startTask = void 0;
var tslib_1 = require("tslib");
var TaskAsk_1 = require("../task-creator/TaskAsk");
var TaskGitPush_1 = require("../task-creator/TaskGitPush");
var compose_1 = require("../utils/compose");
var tips_1 = require("../utils/tips");
var createTaskQueue = function (taskList) {
    return taskList.map(function (Creator, index) { return function (_context, next) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var task, taskIndex, shouldStart, _a, prevTaskResult;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    task = new Creator();
                    taskIndex = index + 1;
                    // 打印空行
                    tips_1.tips.log('');
                    tips_1.tips.info("=====" + taskIndex + "\u3001\u5F00\u59CB\u3010" + task.taskName + "\u3011=====");
                    return [4 /*yield*/, task.callHook('onStart', _context)];
                case 1:
                    shouldStart = _b.sent();
                    _a = shouldStart;
                    if (!_a) return [3 /*break*/, 3];
                    return [4 /*yield*/, task.callHook('run', _context)];
                case 2:
                    _a = (_b.sent());
                    _b.label = 3;
                case 3:
                    _a;
                    tips_1.tips.info("=====" + taskIndex + "\u3001\u3010" + task.taskName + "\u3011\u5B8C\u6210=====");
                    return [4 /*yield*/, next()];
                case 4:
                    prevTaskResult = _b.sent();
                    return [4 /*yield*/, task.callHook('onDone', _context, prevTaskResult)];
                case 5: return [2 /*return*/, _b.sent()];
            }
        });
    }); }; });
};
exports.startTask = compose_1.compose(createTaskQueue([TaskAsk_1.TaskAsk, TaskGitPush_1.TaskGitPush]));
