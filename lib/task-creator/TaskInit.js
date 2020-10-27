"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskInit = void 0;
var tslib_1 = require("tslib");
var base_1 = require("./base");
var TaskInit = /** @class */ (function (_super) {
    tslib_1.__extends(TaskInit, _super);
    function TaskInit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskName = '获取初始化配置';
        return _this;
    }
    TaskInit.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return TaskInit;
}(base_1.TaskCreator));
exports.TaskInit = TaskInit;