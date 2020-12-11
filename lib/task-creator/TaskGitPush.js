"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskGitPush = void 0;
var tslib_1 = require("tslib");
var git_1 = require("../actions/git");
var _1 = require(".");
var TaskGitPush = /** @class */ (function (_super) {
    tslib_1.__extends(TaskGitPush, _super);
    function TaskGitPush() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '提交代码到远程';
        return _this;
    }
    TaskGitPush.prototype.run = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, git_1.gitCommit({ message: message })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, git_1.gitPush()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TaskGitPush;
}(_1.TaskCreator));
exports.TaskGitPush = TaskGitPush;
