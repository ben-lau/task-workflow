"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = exports.contextData = void 0;
var _1 = require(".");
exports.contextData = {
    projectId: '',
    sourceBranch: '',
    targetBranch: '',
    commitMessage: '',
};
exports.context = new _1.Context(exports.contextData);
