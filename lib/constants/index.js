"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSymbol = exports.Commit = exports.Environment = void 0;
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
    Commit.typesMap = (_a = {},
        _a["feat" /* feat */] = {
            name: '新功能',
            value: "feat" /* feat */,
        },
        _a["fix" /* fix */] = {
            name: '修复',
            value: "fix" /* fix */,
        },
        _a["build" /* build */] = {
            name: '构建打包',
            value: "build" /* build */,
        },
        _a["style" /* style */] = {
            name: '代码样式',
            value: "style" /* style */,
        },
        _a["refactor" /* refactor */] = {
            name: '重构（不新增功能也不是修改bug）',
            value: "refactor" /* refactor */,
        },
        _a["test" /* test */] = {
            name: '添加测试',
            value: "test" /* test */,
        },
        _a["chore" /* chore */] = {
            name: '流程或工具更改',
            value: "chore" /* chore */,
        },
        _a["conflict" /* conflict */] = {
            name: '冲突解决',
            value: "conflict" /* conflict */,
        },
        _a["merge" /* merge */] = {
            name: '代码合并',
            value: "merge" /* merge */,
        },
        _a);
})(Commit = exports.Commit || (exports.Commit = {}));
var TaskSymbol;
(function (TaskSymbol) {
    TaskSymbol.FunctionalTask = Symbol('functional_task');
    TaskSymbol.ClassTask = Symbol('class_task');
})(TaskSymbol = exports.TaskSymbol || (exports.TaskSymbol = {}));
