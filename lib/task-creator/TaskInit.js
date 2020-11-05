"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskInit = void 0;
var tslib_1 = require("tslib");
var _1 = require(".");
var git_1 = require("../actions/git");
var store_1 = require("../contexts/store");
var TaskInit = /** @class */ (function (_super) {
    tslib_1.__extends(TaskInit, _super);
    function TaskInit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '获取初始化配置';
        return _this;
    }
    TaskInit.prototype.run = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, git_1.getRemoteUrl()];
                    case 1:
                        url = _a.sent();
                        store_1.store.setData(params);
                        return [2 /*return*/];
                }
            });
        });
    };
    return TaskInit;
}(_1.TaskCreator));
exports.TaskInit = TaskInit;
