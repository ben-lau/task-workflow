"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMergeRequest = void 0;
var tslib_1 = require("tslib");
var createMergeRequest_1 = require("../actions/createMergeRequest");
var base_1 = require("./base");
var TaskMergeRequest = /** @class */ (function (_super) {
    tslib_1.__extends(TaskMergeRequest, _super);
    function TaskMergeRequest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskName = '提交merge request';
        return _this;
    }
    TaskMergeRequest.prototype.run = function (context) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                createMergeRequest_1.createMergeRequest({
                    title: context.getData('commitMessage'),
                    targetBranch: context.getData('targetBranch'),
                    sourceBranch: context.getData('sourceBranch'),
                    projectId: context.getData('projectId'),
                });
                return [2 /*return*/];
            });
        });
    };
    return TaskMergeRequest;
}(base_1.TaskCreator));
exports.TaskMergeRequest = TaskMergeRequest;