"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
var tslib_1 = require("tslib");
var node_rsa_1 = tslib_1.__importDefault(require("node-rsa"));
var constants_1 = require("../constants");
exports.encrypt = function (data, encode) {
    if (encode === void 0) { encode = 'base64'; }
    return new node_rsa_1.default(constants_1.Key.publicKey, 'public').encrypt(data, encode);
};
exports.decrypt = function (data, encode) {
    if (encode === void 0) { encode = 'utf8'; }
    return new node_rsa_1.default(constants_1.Key.privateKey, 'private').decrypt(data, encode);
};
