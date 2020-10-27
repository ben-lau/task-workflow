"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tips = void 0;
var tslib_1 = require("tslib");
var ora_1 = tslib_1.__importDefault(require("ora"));
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var fs_1 = tslib_1.__importDefault(require("fs"));
var date_1 = require("./date");
var constants_1 = require("../constants");
var LOG_DIR = constants_1.Environment.DIR_STORAGE;
var FatalReport = function (target, key, desc) {
    var originValue = desc.value;
    desc.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            writeDownErrorLog(args.join(' '));
            originValue.apply(this, args);
        }
        catch (err) {
            exports.tips.warn(err);
        }
    };
};
var ExitProcess = function (target, key, desc) {
    var originValue = desc.value;
    desc.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            originValue.apply(this, args);
        }
        finally {
            process.exit();
        }
    };
};
var writeDownErrorLog = function (message) {
    if (!constants_1.Environment.DEBUG_MODE) {
        return;
    }
    var fileName = LOG_DIR + "/" + date_1.formatToDateTime(Date.now()) + ".log";
    try {
        if (!fs_1.default.existsSync(LOG_DIR)) {
            fs_1.default.mkdirSync(LOG_DIR, { recursive: true });
        }
        fs_1.default.appendFileSync(fileName, message);
    }
    catch (err) {
        exports.tips.warn(err);
    }
};
var Tips = /** @class */ (function () {
    function Tips() {
        this.loading = ora_1.default({
            spinner: { interval: 80, frames: ['-', '\\', '|', '/'] },
        });
    }
    Tips.prototype.showLoading = function (message) {
        return this.loading.start(chalk_1.default.cyan(message));
    };
    Tips.prototype.hideLoading = function () {
        return this.loading.stop();
    };
    Tips.prototype.succeed = function (message) {
        return this.loading.succeed(chalk_1.default.green(message));
    };
    Tips.prototype.log = function (message) {
        return console.log(chalk_1.default.white(message));
    };
    Tips.prototype.info = function (message) {
        return this.loading.info(chalk_1.default.blue(message));
    };
    Tips.prototype.warn = function (message) {
        return this.loading.warn(chalk_1.default.yellow(message));
    };
    Tips.prototype.error = function (message) {
        return this.loading.fail(chalk_1.default.red(message));
    };
    tslib_1.__decorate([
        ExitProcess,
        FatalReport
    ], Tips.prototype, "error", null);
    return Tips;
}());
exports.tips = new Tips();
