"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workflow = void 0;
var Workflow = /** @class */ (function () {
    function Workflow(name, config) {
        this.name = name;
        this.config = config;
        this.register();
    }
    Workflow.prototype.register = function () {
        Workflow.maps.set(this.name, this.config);
    };
    Workflow.maps = new Map();
    return Workflow;
}());
exports.Workflow = Workflow;
