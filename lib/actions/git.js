"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitCommit = void 0;
var tslib_1 = require("tslib");
var git_1 = require("../utils/execute/git");
var promisify_spawn_1 = require("../utils/execute/promisify-spawn");
var tips_1 = require("../utils/tips");
var RegConflictMessage = /CONFLICT/i;
exports.gitCommit = function (message) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var status, pullResult;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tips_1.tips.showLoading('检查工作区');
                return [4 /*yield*/, git_1.git('status', '-z', '-u')];
            case 1:
                status = (_a.sent()).message;
                if (!status) {
                    tips_1.tips.error('无需要提交的文件');
                    return [2 /*return*/];
                }
                tips_1.tips.showLoading('添加文件');
                return [4 /*yield*/, git_1.git('add', '-A')];
            case 2:
                _a.sent();
                tips_1.tips.showLoading('提交');
                return [4 /*yield*/, git_1.git('commit', '-m', message)];
            case 3:
                _a.sent();
                tips_1.tips.showLoading('拉取远程');
                return [4 /*yield*/, git_1.gitInSilent('pull')];
            case 4:
                pullResult = _a.sent();
                if (pullResult.code !== promisify_spawn_1.CODE_SUCCESS &&
                    RegConflictMessage.test(pullResult.message)) {
                    tips_1.tips.error('发现冲突，请解决后再提交');
                    return [2 /*return*/];
                }
                tips_1.tips.showLoading('推送至远程');
                return [4 /*yield*/, git_1.gitInSilent('push', 'origin')];
            case 5:
                _a.sent();
                tips_1.tips.hideLoading();
                return [2 /*return*/];
        }
    });
}); };
