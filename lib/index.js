"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = require("./context");
var initialData_1 = require("./context/initialData");
var scheduler_1 = require("./scheduler");
scheduler_1.startTask(context_1.Context.create(initialData_1.contextData));
