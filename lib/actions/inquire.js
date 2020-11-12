"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inquireContinue = exports.inquireCommitDetails = void 0;
var tslib_1 = require("tslib");
var inquirer_1 = tslib_1.__importDefault(require("inquirer"));
var constants_1 = require("../constants");
exports.inquireCommitDetails = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, type, message;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        type: 'list',
                        name: 'type',
                        message: '选择提交类型',
                        choices: Object.values(constants_1.Commit.typesMap),
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
/**
 * 询问是否继续
 * @param message 提示信息
 */
exports.inquireContinue = function (message) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var confirm;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        type: 'confirm',
                        name: 'confirm',
                        message: message || '是否继续？',
                        default: false,
                    },
                ])];
            case 1:
                confirm = (_a.sent()).confirm;
                return [2 /*return*/, confirm];
        }
    });
}); };