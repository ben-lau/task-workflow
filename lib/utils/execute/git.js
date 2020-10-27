"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitInSilent = exports.gitWithoutBreak = exports.git = void 0;
var _1 = require(".");
exports.git = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _1.execute('git', args, { level: _1.EnumExecuteLevel.Fatal });
};
exports.gitWithoutBreak = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _1.execute('git', args, { level: _1.EnumExecuteLevel.Warn });
};
exports.gitInSilent = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _1.execute('git', args, { level: _1.EnumExecuteLevel.None });
};
