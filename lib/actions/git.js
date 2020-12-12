"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastCommit = exports.getRemoteUrl = exports.waitForDealWithConflict = exports.getToBePushed = exports.getUpstreamBranchName = exports.getIsExistLocalBranch = exports.getCurrentBranchName = exports.gitMerge = exports.gitCheckout = exports.gitPush = exports.gitPull = exports.gitCommit = void 0;
var tslib_1 = require("tslib");
var git_1 = require("../utils/execute/git");
var promisify_spawn_1 = require("../utils/execute/promisify-spawn");
var tips_1 = require("../utils/tips");
var tools_1 = require("../utils/tools");
var inquire_1 = require("./inquire");
// 冲突正则
var RegConflictMessage = /CONFLICT/i;
// 检查是否有冲突标志
var checkConflict = function (message) { return RegConflictMessage.test(message); };
/**
 * 提交操作
 */
var gitCommit = function (_a) {
    var message = _a.message;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var status;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    tips_1.tips.showLoading('检查工作区');
                    return [4 /*yield*/, git_1.git('status', '-z', '-u')];
                case 1:
                    status = (_b.sent()).message;
                    if (!status) {
                        tips_1.tips.error('无需要提交的文件');
                        return [2 /*return*/];
                    }
                    tips_1.tips.showLoading('添加文件');
                    return [4 /*yield*/, git_1.git('add', '-A')];
                case 2:
                    _b.sent();
                    tips_1.tips.showLoading('提交');
                    return [4 /*yield*/, git_1.git('commit', '-m', message)];
                case 3:
                    _b.sent();
                    tips_1.tips.hideLoading();
                    return [2 /*return*/];
            }
        });
    });
};
exports.gitCommit = gitCommit;
var gitPull = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var currentBranch, _a, code, message;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, exports.getCurrentBranchName()];
            case 1:
                currentBranch = _b.sent();
                tips_1.tips.showLoading("\u62C9\u53D6\u8FDC\u7A0B\u3010" + currentBranch + "\u3011");
                return [4 /*yield*/, git_1.gitInSilent('pull')];
            case 2:
                _a = _b.sent(), code = _a.code, message = _a.message;
                tips_1.tips.hideLoading();
                if (!(code !== promisify_spawn_1.CODE_SUCCESS && checkConflict(message))) return [3 /*break*/, 6];
                return [4 /*yield*/, exports.waitForDealWithConflict()];
            case 3:
                if (!_b.sent()) return [3 /*break*/, 5];
                return [4 /*yield*/, exports.gitCommit({ message: "\u3010" + "conflict" /* conflict */ + "\u3011\u5408\u5E76\u51B2\u7A81" })];
            case 4:
                _b.sent();
                return [3 /*break*/, 6];
            case 5:
                tips_1.tips.error('发现冲突，请解决后再提交');
                return [2 /*return*/];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.gitPull = gitPull;
/**
 * 推送操作
 */
var gitPush = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var currentBranch;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.gitPull()];
            case 1:
                _a.sent();
                return [4 /*yield*/, exports.getCurrentBranchName()];
            case 2:
                currentBranch = _a.sent();
                tips_1.tips.showLoading("\u63A8\u9001\u81F3\u8FDC\u7A0B\u3010" + currentBranch + "\u3011");
                return [4 /*yield*/, git_1.gitInSilent('push', 'origin')];
            case 3:
                _a.sent();
                tips_1.tips.hideLoading();
                return [2 /*return*/];
        }
    });
}); };
exports.gitPush = gitPush;
/**
 * 切换分支
 */
var gitCheckout = function (_a) {
    var branch = _a.branch;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var message, _b, _c, _d;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    tips_1.tips.showLoading('检查工作区');
                    return [4 /*yield*/, git_1.git('status', '-z', '-u')];
                case 1:
                    message = (_e.sent()).message;
                    tips_1.tips.hideLoading();
                    _b = message;
                    if (!_b) return [3 /*break*/, 3];
                    return [4 /*yield*/, inquire_1.inquireContinue({
                            message: '工作区尚有未提交更改，是否切换分支？',
                        })];
                case 2:
                    _b = !(_e.sent());
                    _e.label = 3;
                case 3:
                    if (_b) {
                        tips_1.tips.error('已取消');
                        return [2 /*return*/, Promise.reject('已取消')];
                    }
                    tips_1.tips.showLoading("\u5207\u6362\u81F3\u3010" + branch + "\u3011");
                    return [4 /*yield*/, exports.getIsExistLocalBranch({ branch: branch })];
                case 4:
                    if (!_e.sent()) return [3 /*break*/, 6];
                    return [4 /*yield*/, git_1.git('checkout', branch)];
                case 5:
                    _e.sent();
                    return [3 /*break*/, 9];
                case 6:
                    _c = git_1.git;
                    _d = ['checkout',
                        branch,
                        '-b'];
                    return [4 /*yield*/, exports.getUpstreamBranchName({ branch: branch })];
                case 7: return [4 /*yield*/, _c.apply(void 0, _d.concat([_e.sent()]))];
                case 8:
                    _e.sent();
                    _e.label = 9;
                case 9: return [4 /*yield*/, exports.gitPull()];
                case 10:
                    _e.sent();
                    tips_1.tips.hideLoading();
                    return [2 /*return*/];
            }
        });
    });
};
exports.gitCheckout = gitCheckout;
/**
 * 合并操作
 */
var gitMerge = function (_a) {
    var branch = _a.branch;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var currentBranch, _b, code, message;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    tips_1.tips.showLoading("\u6B63\u5728\u5408\u5E76\u3010" + branch + "\u3011");
                    return [4 /*yield*/, exports.getCurrentBranchName()];
                case 1:
                    currentBranch = _c.sent();
                    return [4 /*yield*/, git_1.gitInSilent('merge', branch, '--no-ff', '-m', "\u3010" + "merge" /* merge */ + "\u3011Merge branch '" + branch + "' into '" + currentBranch + "'")];
                case 2:
                    _b = _c.sent(), code = _b.code, message = _b.message;
                    tips_1.tips.hideLoading();
                    if (!(code !== promisify_spawn_1.CODE_SUCCESS && checkConflict(message))) return [3 /*break*/, 6];
                    return [4 /*yield*/, exports.waitForDealWithConflict()];
                case 3:
                    if (!_c.sent()) return [3 /*break*/, 5];
                    return [4 /*yield*/, exports.gitCommit({ message: "\u3010" + "conflict" /* conflict */ + "\u3011\u5408\u5E76\u51B2\u7A81" })];
                case 4:
                    _c.sent();
                    return [3 /*break*/, 6];
                case 5:
                    tips_1.tips.error('发现冲突，请解决后再提交');
                    _c.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
};
exports.gitMerge = gitMerge;
/**
 * 获取当前分支名
 */
var getCurrentBranchName = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var message;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, git_1.git('name-rev', '--name-only', 'HEAD')];
            case 1:
                message = (_a.sent()).message;
                return [2 /*return*/, message];
        }
    });
}); };
exports.getCurrentBranchName = getCurrentBranchName;
/**
 * 获取本地分支是否存在
 */
var getIsExistLocalBranch = function (_a) {
    var branch = _a.branch;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var message;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, git_1.git('branch', '--list', "" + branch)];
                case 1:
                    message = (_b.sent()).message;
                    return [2 /*return*/, message.trim() !== ''];
            }
        });
    });
};
exports.getIsExistLocalBranch = getIsExistLocalBranch;
/**
 * 获取分支上游分支名
 */
var getUpstreamBranchName = function (_a) {
    var branch = _a.branch;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var message;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, exports.getIsExistLocalBranch({ branch: branch })];
                case 1:
                    if (!_b.sent()) return [3 /*break*/, 3];
                    return [4 /*yield*/, git_1.git('rev-parse', '--abbrev-ref', branch + "@{u}")];
                case 2:
                    message = (_b.sent()).message;
                    return [2 /*return*/, message];
                case 3: return [2 /*return*/, "origin/" + branch];
            }
        });
    });
};
exports.getUpstreamBranchName = getUpstreamBranchName;
/**
 * 获取未推送远程的commit
 */
var getToBePushed = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var message;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, git_1.git('cherry', '-v')];
            case 1:
                message = (_a.sent()).message;
                return [2 /*return*/, message];
        }
    });
}); };
exports.getToBePushed = getToBePushed;
/**
 * 等待冲突处理
 * 当无冲突则返回true；
 * 有冲突会询问是否解决完毕，如果不继续则返回false，如果继续则递归。
 */
var waitForDealWithConflict = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, message, code, _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, git_1.gitWithoutBreak('--no-pager', 'diff', '--check')];
            case 1:
                _a = _c.sent(), message = _a.message, code = _a.code;
                if (!(code !== promisify_spawn_1.CODE_SUCCESS)) return [3 /*break*/, 6];
                return [4 /*yield*/, inquire_1.inquireContinue({
                        message: "\u8FD8\u6709" + tools_1.getLineCount(message) + "\u5904\u51B2\u7A81\u672A\u89E3\u51B3\uFF0C\u8BF7\u5148\u89E3\u51B3\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
                    })];
            case 2:
                if (!(_c.sent())) return [3 /*break*/, 4];
                return [4 /*yield*/, exports.waitForDealWithConflict()];
            case 3:
                _b = _c.sent();
                return [3 /*break*/, 5];
            case 4:
                _b = false;
                _c.label = 5;
            case 5: return [2 /*return*/, _b];
            case 6: return [2 /*return*/, true];
        }
    });
}); };
exports.waitForDealWithConflict = waitForDealWithConflict;
/**
 * 获取远程url
 */
var getRemoteUrl = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var message;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, git_1.git('remote', 'get-url', '--push', 'origin')];
            case 1:
                message = (_a.sent()).message;
                return [2 /*return*/, message];
        }
    });
}); };
exports.getRemoteUrl = getRemoteUrl;
/**
 * 获取分支上一次提交记录
 */
var getLastCommit = function (_a) {
    var branch = _a.branch;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var remoteBranchName, message;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, exports.getUpstreamBranchName({ branch: branch })];
                case 1:
                    remoteBranchName = _b.sent();
                    return [4 /*yield*/, git_1.git('log', remoteBranchName, '-1', '--format=%s')];
                case 2:
                    message = (_b.sent()).message;
                    return [2 /*return*/, message];
            }
        });
    });
};
exports.getLastCommit = getLastCommit;
