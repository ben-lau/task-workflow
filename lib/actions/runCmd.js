"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCmd = void 0;
var child_process_1 = require("child_process");
var util_1 = require("util");
var TEN_MBYTE = 10 * 1024 * 1024;
/**
 * 执行指令
 * @param cmd 字符串指令
 */
var runCmd = function (_a) {
    var cmd = _a.cmd;
    return util_1.promisify(child_process_1.exec)(cmd, { maxBuffer: TEN_MBYTE, windowsHide: true });
};
exports.runCmd = runCmd;
