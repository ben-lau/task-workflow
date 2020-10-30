"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scheduler_1 = require("./scheduler");
var TaskCommitMessage_1 = require("./task-creator/TaskCommitMessage");
var TaskGitPush_1 = require("./task-creator/TaskGitPush");
// export default new Scheduler([TaskGitMerge]).start();
exports.default = new scheduler_1.Scheduler([TaskCommitMessage_1.TaskCommitMessage, TaskGitPush_1.TaskGitPush]).start();
