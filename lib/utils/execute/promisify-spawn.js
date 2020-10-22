"use strict";
/**
 * @description 为什么不用shelljs?因为他底层实现为exec，有固定缓冲区，而且nodejs的exec有bug（错误码不保证为数字）
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisifySpawn = exports.CODE_ERROR = exports.CODE_SUCCESS = void 0;
var tslib_1 = require("tslib");
var cross_spawn_1 = require("cross-spawn");
exports.CODE_SUCCESS = 0;
exports.CODE_ERROR = 10086;
exports.promisifySpawn = function (command, argumentList, options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        var task = cross_spawn_1.spawn(command, argumentList, tslib_1.__assign(tslib_1.__assign({}, options), { stdio: 'pipe' }));
        var cache = [];
        task.stdout.on('data', function (chunk) {
            cache.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        });
        task.stderr.on('data', function (chunk) {
            cache.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        });
        task.on('close', function (code) {
            var message = Buffer.concat(cache).toString();
            /* exec的bug */
            code === undefined || code === null || code === exports.CODE_SUCCESS
                ? resolve({ code: exports.CODE_SUCCESS, message: message })
                : reject({ code: code, message: message });
        });
        task.on('error', function (err) {
            reject({
                code: exports.CODE_ERROR,
                message: err.message + " \n" + err.stack,
            });
        });
    });
};
