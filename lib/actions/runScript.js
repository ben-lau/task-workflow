"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runScript = void 0;
var child_process_1 = require("child_process");
var util_1 = require("util");
var TEN_MBYTE = 10 * 1024 * 1024;
exports.runScript = function (script) {
    return util_1.promisify(child_process_1.exec)(script, { maxBuffer: TEN_MBYTE, windowsHide: true });
};
