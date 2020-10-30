"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLineCount = void 0;
/**
 * 获取行数
 * @param {string} str 文本
 */
exports.getLineCount = function (str) {
    return (str.match(/\r\n|\r|\n/g) || []).length;
};
