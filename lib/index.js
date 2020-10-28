"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scheduler_1 = require("./scheduler");
var TaskAsk_1 = require("./task-creator/TaskAsk");
var TaskGitPush_1 = require("./task-creator/TaskGitPush");
new scheduler_1.Scheduler([TaskAsk_1.TaskAsk, TaskGitPush_1.TaskGitPush]).start();
