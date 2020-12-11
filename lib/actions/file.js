"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDir = exports.entryDirectory = exports.copyTo = void 0;
var execute_1 = require("../utils/execute");
/**
 * 复制文件
 * @param from 起始目录
 * @param to 终点目录
 */
var copyTo = function (_a) {
    var from = _a.from, to = _a.to;
    return execute_1.execute('cp', ['-R', from, to]);
};
exports.copyTo = copyTo;
/**
 * 进入文件夹
 * @param dir 文件夹路径
 */
var entryDirectory = function (_a) {
    var dir = _a.dir;
    return execute_1.execute('cd', [dir]);
};
exports.entryDirectory = entryDirectory;
/**
 * 确认文件夹存在（不存在则创建）
 * @param dir 文件夹路径
 */
var generateDir = function (_a) {
    var dir = _a.dir;
    return execute_1.execute('mkidr', ['-p', dir]);
};
exports.generateDir = generateDir;
