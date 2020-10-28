"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contexts_1 = require("./contexts");
var initialData_1 = require("./contexts/initialData");
var scheduler_1 = require("./scheduler");
scheduler_1.startTask(new contexts_1.Context(initialData_1.contextData));
