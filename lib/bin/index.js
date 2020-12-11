"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var workflow_1 = require("../workflow");
var commander_1 = require("commander");
var path_1 = tslib_1.__importDefault(require("path"));
var main = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                commander_1.program.option('-f, --from <path>', '').parse(process.argv);
                if (!commander_1.program.from) return [3 /*break*/, 2];
                return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(require(path_1.default.join(process.cwd(), commander_1.program.from))); })];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                workflow_1.Workflow.maps.forEach(function (item, key) {
                    commander_1.program
                        .command(key)
                        .description(item.description)
                        .action(function () {
                        item.start();
                    });
                });
                commander_1.program.parse(process.argv);
                return [2 /*return*/];
        }
    });
}); };
main();
