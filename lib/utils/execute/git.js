"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitInSilent = exports.gitWithoutBreak = exports.git = void 0;
var _1 = require(".");
exports.git = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _1.execute('git', args);
};
exports.gitWithoutBreak = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _1.executeWithoutBreak('git', args);
};
exports.gitInSilent = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _1.executeInSlient('git', args);
};
