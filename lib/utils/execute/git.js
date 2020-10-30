"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitInSilent = exports.gitWithoutBreak = exports.git = void 0;
var tslib_1 = require("tslib");
var _1 = require(".");
var cmdGit = 'git';
var RegLastNewLine = /(\n\r|\n|\r)$/;
var NoNewLine = function (gitMethod) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a, message, code;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, gitMethod.apply(void 0, args)];
                case 1:
                    _a = _b.sent(), message = _a.message, code = _a.code;
                    return [2 /*return*/, {
                            message: message.replace(RegLastNewLine, ''),
                            code: code,
                        }];
            }
        });
    });
}; };
exports.git = NoNewLine(function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _1.execute(cmdGit, args, { level: _1.EnumExecuteLevel.Fatal });
});
exports.gitWithoutBreak = NoNewLine(function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _1.execute(cmdGit, args, { level: _1.EnumExecuteLevel.Warn });
});
exports.gitInSilent = NoNewLine(function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _1.execute(cmdGit, args, { level: _1.EnumExecuteLevel.None });
});
