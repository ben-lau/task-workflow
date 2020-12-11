"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCommitMessage = void 0;
var tslib_1 = require("tslib");
var inquire_1 = require("../actions/inquire");
var _1 = require(".");
var TaskCommitMessage = /** @class */ (function (_super) {
    tslib_1.__extends(TaskCommitMessage, _super);
    function TaskCommitMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '提交信息填写';
        return _this;
    }
    TaskCommitMessage.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var message;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquire_1.inquireCommitDetails()];
                    case 1:
                        message = _a.sent();
                        return [2 /*return*/, message];
                }
            });
        });
    };
    return TaskCommitMessage;
}(_1.TaskCreator));
exports.TaskCommitMessage = TaskCommitMessage;
