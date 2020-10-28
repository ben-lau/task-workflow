"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
var tslib_1 = require("tslib");
var Context = /** @class */ (function () {
    function Context(_data) {
        this._data = _data;
        this.env = {
            isCi: process.env.CI === 'true',
        };
    }
    Context.prototype.setData = function (data) {
        this._data = tslib_1.__assign(tslib_1.__assign({}, this._data), data);
    };
    Context.prototype.getData = function (keyName) {
        return this._data[keyName];
    };
    return Context;
}());
exports.Context = Context;
