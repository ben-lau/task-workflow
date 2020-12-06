"use strict";
var createTaskFactory = function (task) { return function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        p[_i] = arguments[_i];
    }
    return function () {
        return task.apply(void 0, p);
    };
}; };
