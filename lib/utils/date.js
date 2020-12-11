"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatToDateTime = exports.dateFormater = void 0;
var padZero = function (value, length) {
    return ("" + new Array(length).fill('0').join('') + String(value)).substr(-length);
};
/**
 * 按规则格式化日期：yyyy-MM-dd (HH)hh:mm:ss:SSS
 */
var dateFormater = function (_date, rule) {
    var date = new Date(_date);
    var rulesMap = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12,
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds(),
    };
    if (/(y+)/.test(rule)) {
        rule = rule.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length));
    }
    Object.keys(rulesMap)
        .filter(function (key) { return new RegExp("(" + key + ")").test(rule); })
        .forEach(function (key) {
        var value = rulesMap[key];
        rule = rule.replace(new RegExp("(" + key + ")"), padZero(value, 2));
    });
    return rule;
};
exports.dateFormater = dateFormater;
var formatToDateTime = function (date) {
    return exports.dateFormater(date, 'yyyy-MM-dd HH-mm-ss-S');
};
exports.formatToDateTime = formatToDateTime;
