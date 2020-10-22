"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = exports.Context = void 0;
var tslib_1 = require("tslib");
var initialData_1 = require("./initialData");
var instance;
var Context = /** @class */ (function () {
    function Context() {
        this.env = {
            isCi: process.env.CI === 'true',
        };
        this._data = initialData_1.contextData;
    }
    Context.prototype.setData = function (data) {
        this._data = tslib_1.__assign(tslib_1.__assign({}, this._data), data);
    };
    Context.prototype.getData = function (keyName) {
        return this._data[keyName];
    };
    Context.create = function () { return instance !== null && instance !== void 0 ? instance : (instance = new Context()); };
    return Context;
}());
exports.Context = Context;
exports.context = Context.create();
