"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranformStream = void 0;
var tslib_1 = require("tslib");
var stream_1 = require("stream");
var TranformStream = /** @class */ (function (_super) {
    tslib_1.__extends(TranformStream, _super);
    function TranformStream(_encode) {
        if (_encode === void 0) { _encode = 'utf8'; }
        var _this = _super.call(this) || this;
        _this._encode = _encode;
        _this._cache = [];
        return _this;
    }
    Object.defineProperty(TranformStream.prototype, "data", {
        get: function () {
            var cache = Buffer.concat(this._cache);
            this.destroy();
            return cache.toString(this._encode);
        },
        enumerable: false,
        configurable: true
    });
    TranformStream.prototype._transform = function (chunk, encode, next) {
        var data = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encode);
        this._cache.push(data);
        next(null, data);
    };
    return TranformStream;
}(stream_1.Transform));
exports.TranformStream = TranformStream;
