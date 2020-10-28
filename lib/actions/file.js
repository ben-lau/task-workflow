"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyFileTo = void 0;
var execute_1 = require("../utils/execute");
exports.copyFileTo = function (from, to) {
    return execute_1.execute('cp', ['-R', from, to]);
};
