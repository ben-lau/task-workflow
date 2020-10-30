"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commit = exports.Environment = void 0;
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var Environment;
(function (Environment) {
    /**
     * 调试模式
     */
    Environment.DEBUG_MODE = false;
    /**
     * 根目录
     */
    Environment.DIR_HOME = process.env.HOME;
    /**
     * 存储目录
     */
    Environment.DIR_STORAGE = path_1.default.resolve(Environment.DIR_HOME, '.ik-gz');
    /**
     * 用户账号
     */
    Environment.FILE_USER_ACCOUNT = path_1.default.resolve(Environment.DIR_STORAGE, 'user_account');
})(Environment = exports.Environment || (exports.Environment = {}));
var Commit;
(function (Commit) {
    var _a;
    var EnumTypes;
    (function (EnumTypes) {
        EnumTypes["feat"] = "feat";
        EnumTypes["fix"] = "fix";
        EnumTypes["build"] = "build";
        EnumTypes["style"] = "style";
        EnumTypes["refactor"] = "refactor";
        EnumTypes["test"] = "test";
        EnumTypes["chore"] = "chore";
        EnumTypes["conflict"] = "conflict";
        EnumTypes["merge"] = "merge";
    })(EnumTypes = Commit.EnumTypes || (Commit.EnumTypes = {}));
    Commit.typesMap = (_a = {},
        _a[EnumTypes.feat] = {
            name: '新功能',
            value: EnumTypes.feat,
        },
        _a[EnumTypes.fix] = {
            name: '修复',
            value: EnumTypes.fix,
        },
        _a[EnumTypes.build] = {
            name: '构建打包',
            value: EnumTypes.build,
        },
        _a[EnumTypes.style] = {
            name: '代码样式',
            value: EnumTypes.style,
        },
        _a[EnumTypes.refactor] = {
            name: '重构（不新增功能也不是修改bug）',
            value: EnumTypes.refactor,
        },
        _a[EnumTypes.test] = {
            name: '添加测试',
            value: EnumTypes.test,
        },
        _a[EnumTypes.chore] = {
            name: '流程或工具更改',
            value: EnumTypes.chore,
        },
        _a[EnumTypes.conflict] = {
            name: '冲突解决',
            value: EnumTypes.conflict,
        },
        _a[EnumTypes.merge] = {
            name: '代码合并',
            value: EnumTypes.merge,
        },
        _a);
})(Commit = exports.Commit || (exports.Commit = {}));
