"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskGitMerge = void 0;
var tslib_1 = require("tslib");
var _1 = require(".");
var git_1 = require("../actions/git");
var TaskGitMerge = /** @class */ (function (_super) {
    tslib_1.__extends(TaskGitMerge, _super);
    function TaskGitMerge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '合并代码';
        return _this;
    }
    TaskGitMerge.prototype.run = function (_a) {
        var branch = _a.branch;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currentBranch;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, git_1.getCurrentBranchName()];
                    case 1:
                        currentBranch = _b.sent();
                        return [4 /*yield*/, git_1.gitCheckout({ branch: currentBranch })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, git_1.gitCheckout({ branch: branch })];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, git_1.gitMerge({ branch: currentBranch })];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, git_1.gitPush()];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TaskGitMerge;
}(_1.TaskCreator));
exports.TaskGitMerge = TaskGitMerge;
