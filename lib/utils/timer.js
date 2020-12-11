"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timer = exports.wait = void 0;
/**
 * 等待
 */
var wait = function (delay) {
    if (delay === void 0) { delay = 0; }
    return new Promise(function (resolve) { return setTimeout(resolve, delay); });
};
exports.wait = wait;
/**
 * 计时器
 */
exports.timer = (function () {
    var map = {};
    return {
        start: function (key) {
            map[key] = {
                time: Date.now(),
                started: true,
            };
        },
        end: function (key) {
            var item = map[key];
            if (item && item.started) {
                item.started = false;
                return Date.now() - item.time;
            }
            else {
                return 0;
            }
        },
    };
})();
