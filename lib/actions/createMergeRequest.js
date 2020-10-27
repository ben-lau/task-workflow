"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMergeRequest = void 0;
var tslib_1 = require("tslib");
var open_1 = tslib_1.__importDefault(require("open"));
/**
 * @todo 申请机器人账号，使用机器人账号创建mr
 */
exports.createMergeRequest = function (_a) {
    var projectId = _a.projectId, sourceBranch = _a.sourceBranch, targetBranch = _a.targetBranch, title = _a.title;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_b) {
            return [2 /*return*/, open_1.default("https://code.inke.cn/" + projectId + "/merge_requests/new?merge_request[source_branch]=" + sourceBranch + "&merge_request[target_branch]=" + targetBranch + "&merge_request[title]=" + title)];
        });
    });
};
