"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMergeRequest = void 0;
var tslib_1 = require("tslib");
var open_1 = tslib_1.__importDefault(require("open"));
var git_1 = require("./git");
var REG_GITLAB_PROJECT = /(?<=(git@|https:\/\/)).*(?=\.git)/;
var getMergeRequestAddress = function (_a) {
    var projectUrl = _a.projectUrl, sourceBranch = _a.sourceBranch, targetBranch = _a.targetBranch, title = _a.title;
    return "https://" + projectUrl + "/merge_requests/new?merge_request[source_branch]=" + sourceBranch + "&merge_request[target_branch]=" + targetBranch + "&merge_request[title]=" + title;
};
/**
 *
 * @param repo ssh类型的git repo
 * @returns 仓库地址
 */
var getProjectUrlFromRepo = function (repo) {
    return (repo.match(REG_GITLAB_PROJECT) || [''])[0].replace(/\:/, '/');
};
/**
 * @todo 申请机器人账号，使用机器人账号创建mr
 */
exports.createMergeRequest = function (_a) {
    var projectUrl = _a.projectUrl, sourceBranch = _a.sourceBranch, targetBranch = _a.targetBranch, title = _a.title;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _b, _c, _d, _e;
        var _f;
        return tslib_1.__generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _b = open_1.default;
                    _c = getMergeRequestAddress;
                    _f = {};
                    _d = projectUrl;
                    if (_d) return [3 /*break*/, 2];
                    _e = getProjectUrlFromRepo;
                    return [4 /*yield*/, git_1.getRemoteUrl()];
                case 1:
                    _d = _e.apply(void 0, [_g.sent()]);
                    _g.label = 2;
                case 2: return [2 /*return*/, _b.apply(void 0, [_c.apply(void 0, [(_f.projectUrl = _d,
                                _f.sourceBranch = sourceBranch,
                                _f.targetBranch = targetBranch,
                                _f.title = title,
                                _f)])])];
            }
        });
    });
};
