"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitCommit = void 0;
var tslib_1 = require("tslib");
var execute_1 = require("../utils/execute");
var promisify_spawn_1 = require("../utils/execute/promisify-spawn");
var tips_1 = require("../utils/tips");
var RegConflictMessage = /CONFLICT/;
var git = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return execute_1.execute('git', args);
};
var gitInSlient = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return execute_1.executeInSlient('git', args);
};
exports.gitCommit = function (message) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var status, pullResult;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, git('status', '-z', '-u')];
            case 1:
                status = (_a.sent()).message;
                if (!status) {
                    tips_1.tips.error('无需要提交的文件');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, git('add', '-A')];
            case 2:
                _a.sent();
                return [4 /*yield*/, git('commit', '-m', "" + message)];
            case 3:
                _a.sent();
                return [4 /*yield*/, gitInSlient('pull')];
            case 4:
                pullResult = _a.sent();
                if (pullResult.code !== promisify_spawn_1.CODE_SUCCESS &&
                    RegConflictMessage.test(pullResult.message)) {
                    tips_1.tips.error('发现冲突，请解决后再提交');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, gitInSlient('push', 'origin')];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
