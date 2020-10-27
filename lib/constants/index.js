"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = exports.Environment = void 0;
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var Environment;
(function (Environment) {
    /**
     * 调试模式
     */
    Environment.DEBUG_MODE = false;
    /**
     * 根目录
     */
    Environment.DIR_HOME = process.env.HOME;
    /**
     * 存储目录
     */
    Environment.DIR_STORAGE = path_1.default.resolve(Environment.DIR_HOME, '.ik-gz');
    /**
     * 用户账号
     */
    Environment.FILE_USER_ACCOUNT = path_1.default.resolve(Environment.DIR_STORAGE, 'user_account');
})(Environment = exports.Environment || (exports.Environment = {}));
var Key;
(function (Key) {
    Key.publicKey = 'MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAddqe+u8H6xslXHwcRKaf4AU+hTsSSFi99E0wba+YcXmpr4b/uMSUTRKWYDsj2nTB2LUMdV/Kq1XInvh2i03oswIDAQAB';
    Key.privateKey = 'MIIBOQIBAAJAddqe+u8H6xslXHwcRKaf4AU+hTsSSFi99E0wba+YcXmpr4b/uMSUTRKWYDsj2nTB2LUMdV/Kq1XInvh2i03oswIDAQABAkBN+piEilIf8rc2yXvexK02CeJDP0GqkuUk10n62VuxgJu0Cpkwk8cPwOfq1D9/COjEC43CZ1vHrkIvHLG6YF4pAiEArq7X5V/fhmpSp3DrLcgWK8cNBksHgtbIRgp7CltuPgcCIQCst2f2aqWvxEBtoPPElGysaiBmkoCT7BWhoAnG5WwU9QIgMEzGA3VL7/WsHwI49PKzNq2WK1xJmmLbA4rYVJfNVrcCIG1Tuw8T+sUDqPS8CRHKEfAhTVkgKxt3OUoRj57C4mNxAiEAkKY41iA6efs8LGUG7/OO+YfpBGRQXCf1T1F7BbMmSy4=';
})(Key = exports.Key || (exports.Key = {}));
