"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMergeRequest = void 0;
var tslib_1 = require("tslib");
var open_1 = tslib_1.__importDefault(require("open"));
var getMergeRequestAddress = function (_a) {
    var projectId = _a.projectId, sourceBranch = _a.sourceBranch, targetBranch = _a.targetBranch, title = _a.title;
    return "https://code.inke.cn/" + projectId + "/merge_requests/new?merge_request[source_branch]=" + sourceBranch + "&merge_request[target_branch]=" + targetBranch + "&merge_request[title]=" + title;
};
/**
 * @todo 申请机器人账号，使用机器人账号创建mr
 */
exports.createMergeRequest = function (mrParams) {
    return open_1.default(getMergeRequestAddress(mrParams));
};
