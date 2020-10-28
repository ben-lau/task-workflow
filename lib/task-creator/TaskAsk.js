"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskAsk = void 0;
var tslib_1 = require("tslib");
var askForCommitDetails_1 = require("../actions/askForCommitDetails");
var base_1 = require("./base");
var TaskAsk = /** @class */ (function (_super) {
    tslib_1.__extends(TaskAsk, _super);
    function TaskAsk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskName = '提交信息填写';
        return _this;
    }
    TaskAsk.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var message;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, askForCommitDetails_1.askForCommitDetails()];
                    case 1:
                        message = _a.sent();
                        return [2 /*return*/, { commitMessage: message }];
                }
            });
        });
    };
    return TaskAsk;
}(base_1.TaskCreator));
exports.TaskAsk = TaskAsk;
