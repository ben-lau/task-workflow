"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeInSlient = exports.executeWithoutBreak = exports.execute = void 0;
var tslib_1 = require("tslib");
var promisify_spawn_1 = require("./promisify-spawn");
var tips_1 = require("../tips");
var getErrorMessageInExecute = function (error, command) {
    return error instanceof Error
        ? "ERROR IN\u3010" + command + "\u3011" + (error.stack ? "\nSTACK:" + error.stack + " " : '') + "\n" + error.message
        : "ERROR IN\u3010" + command + "\u3011\nCODE:" + error.code + " \n" + error.message;
};
exports.execute = function (command, argumentList, options) {
    if (options === void 0) { options = {}; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, promisify_spawn_1.promisifySpawn(command, argumentList, options)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    err_1 = _a.sent();
                    tips_1.tips.error(getErrorMessageInExecute(err_1, command));
                    return [2 /*return*/, err_1];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.executeWithoutBreak = function (command, argumentList, options) {
    if (options === void 0) { options = {}; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, promisify_spawn_1.promisifySpawn(command, argumentList, options)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    err_2 = _a.sent();
                    tips_1.tips.warn(getErrorMessageInExecute(err_2, command));
                    return [2 /*return*/, err_2];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.executeInSlient = function (command, argumentList, options) {
    if (options === void 0) { options = {}; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, promisify_spawn_1.promisifySpawn(command, argumentList, options)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    err_3 = _a.sent();
                    return [2 /*return*/, err_3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
