"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.askForCommitDetails = void 0;
var tslib_1 = require("tslib");
var inquirer_1 = tslib_1.__importDefault(require("inquirer"));
var EnumCommitType;
(function (EnumCommitType) {
    EnumCommitType["feat"] = "feat";
    EnumCommitType["fix"] = "fix";
    EnumCommitType["build"] = "build";
    EnumCommitType["style"] = "style";
    EnumCommitType["refactor"] = "refactor";
    EnumCommitType["test"] = "test";
    EnumCommitType["chore"] = "chore";
})(EnumCommitType || (EnumCommitType = {}));
var commitTypeMap = (_a = {},
    _a[EnumCommitType.feat] = {
        name: '新功能',
        value: EnumCommitType.feat,
    },
    _a[EnumCommitType.fix] = {
        name: '修复',
        value: EnumCommitType.fix,
    },
    _a[EnumCommitType.build] = {
        name: '构建打包',
        value: EnumCommitType.build,
    },
    _a[EnumCommitType.style] = {
        name: '代码样式',
        value: EnumCommitType.style,
    },
    _a[EnumCommitType.refactor] = {
        name: '重构（不新增功能也不是修改bug）',
        value: EnumCommitType.refactor,
    },
    _a[EnumCommitType.test] = {
        name: '添加测试',
        value: EnumCommitType.test,
    },
    _a[EnumCommitType.chore] = {
        name: '流程或工具更改',
        value: EnumCommitType.chore,
    },
    _a);
exports.askForCommitDetails = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, type, message;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        type: 'list',
                        name: 'type',
                        message: '选择提交类型',
                        choices: Object.values(commitTypeMap),
                    },
                    {
                        type: 'input',
                        name: 'message',
                        message: '填写提交内容',
                        filter: function (mes) { return mes.trim(); },
                        validate: function (input) {
                            var mes = String(input).trim();
                            if (mes.length === 0) {
                                return '请输入本次提交内容';
                            }
                            else if (mes.length > 70) {
                                return '提交内容不能超过70个字';
                            }
                            else {
                                return true;
                            }
                        },
                    },
                ])];
            case 1:
                _a = _b.sent(), type = _a.type, message = _a.message;
                return [2 /*return*/, "[" + type + "]: " + message];
        }
    });
}); };
