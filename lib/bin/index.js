"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var workflow_1 = require("../workflow");
var commander_1 = require("commander");
var path_1 = tslib_1.__importDefault(require("path"));
commander_1.program.option('-C, --config <type>', '');
commander_1.program.parse(process.argv);
// console.log(program)
if (commander_1.program.config) {
    require(path_1.default.join(process.cwd(), commander_1.program.config));
    console.log(workflow_1.Workflow.maps);
}
