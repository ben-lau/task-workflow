"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGitlabMergeRequest = void 0;
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var URL_INKE_GITLAB = 'https://code.inke.cn/api/v4';
exports.createGitlabMergeRequest = function (_a) {
    var projectId = _a.projectId, source_branch = _a.sourceBranch, target_branch = _a.targetBranch, title = _a.title, private_token = _a.token;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rs, err_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.post(URL_INKE_GITLAB + "/projects/" + encodeURIComponent(projectId) + "/merge_requests", {
                            private_token: private_token,
                            source_branch: source_branch,
                            target_branch: target_branch,
                            title: title,
                        })];
                case 1:
                    rs = _b.sent();
                    return [2 /*return*/, rs.data];
                case 2:
                    err_1 = _b.sent();
                    return [2 /*return*/, Promise.reject(err_1.response)];
                case 3: return [2 /*return*/];
            }
        });
    });
};
// (async () => {
//   await createGitlabMergeRequest({
//     projectId: 'gz/web/opd/ik-ui/ik-ui-vue',
//     sourceBranch: 'test',
//     targetBranch: 'master',
//     title: '创建mr',
//     token: 'Qqpqu81yBSXJyCC4E55D',
//   });
// })();
