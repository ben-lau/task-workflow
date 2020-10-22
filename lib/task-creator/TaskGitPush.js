"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskGitPush = void 0;
var tslib_1 = require("tslib");
var git_1 = require("../actions/git");
var base_1 = require("./base");
var TaskGitPush = /** @class */ (function (_super) {
    tslib_1.__extends(TaskGitPush, _super);
    function TaskGitPush() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskName = '提交代码到远程';
        return _this;
    }
    TaskGitPush.prototype.run = function (context) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var message;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = context.getData('commitMessage');
                        return [4 /*yield*/, git_1.gitCommit(message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TaskGitPush;
}(base_1.TaskCreator));
exports.TaskGitPush = TaskGitPush;
