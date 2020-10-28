"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMergeRequest = void 0;
var tslib_1 = require("tslib");
var _1 = require(".");
var createMergeRequest_1 = require("../actions/createMergeRequest");
var store_1 = require("../contexts/store");
var TaskMergeRequest = /** @class */ (function (_super) {
    tslib_1.__extends(TaskMergeRequest, _super);
    function TaskMergeRequest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskName = '提交merge request';
        return _this;
    }
    TaskMergeRequest.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                createMergeRequest_1.createMergeRequest({
                    title: store_1.store.getData('commitMessage'),
                    targetBranch: store_1.store.getData('targetBranch'),
                    sourceBranch: store_1.store.getData('sourceBranch'),
                    projectId: store_1.store.getData('projectId'),
                });
                return [2 /*return*/];
            });
        });
    };
    return TaskMergeRequest;
}(_1.TaskCreator));
exports.TaskMergeRequest = TaskMergeRequest;
