"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDir = exports.entryDirectory = exports.copyTo = void 0;
var execute_1 = require("../utils/execute");
exports.copyTo = function (_a) {
    var from = _a.from, to = _a.to;
    return execute_1.execute('cp', ['-R', from, to]);
};
exports.entryDirectory = function (_a) {
    var dir = _a.dir;
    return execute_1.execute('cd', [dir]);
};
exports.generateDir = function (_a) {
    var dir = _a.dir;
    return execute_1.execute('mkidr', ['-p', dir]);
};
