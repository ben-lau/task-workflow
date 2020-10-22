"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = void 0;
exports.wait = function (delay) {
    if (delay === void 0) { delay = 0; }
    return new Promise(function (resolve) { return setTimeout(resolve, delay); });
};
