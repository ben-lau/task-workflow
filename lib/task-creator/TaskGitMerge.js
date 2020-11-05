"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskGitMerge = void 0;
var tslib_1 = require("tslib");
var _1 = require(".");
var git_1 = require("../actions/git");
var store_1 = require("../contexts/store");
var TaskGitMerge = /** @class */ (function (_super) {
    tslib_1.__extends(TaskGitMerge, _super);
    function TaskGitMerge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '合并代码';
        return _this;
    }
    TaskGitMerge.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var targetBranch, sourceBranch;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targetBranch = store_1.store.getData('targetBranch');
                        sourceBranch = store_1.store.getData('sourceBranch');
                        return [4 /*yield*/, git_1.gitCheckout(sourceBranch)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, git_1.gitCheckout(targetBranch)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, git_1.gitMerge(sourceBranch)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, git_1.gitPush()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TaskGitMerge;
}(_1.TaskCreator));
exports.TaskGitMerge = TaskGitMerge;
