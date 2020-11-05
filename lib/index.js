"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scheduler_1 = require("./scheduler");
var TaskCommitMessage_1 = require("./task-creator/TaskCommitMessage");
var TaskGitPush_1 = require("./task-creator/TaskGitPush");
// export default new Scheduler([TaskGitMerge]).start();
exports.default = new scheduler_1.Scheduler([
    // TaskInit,
    TaskCommitMessage_1.TaskCommitMessage,
    TaskGitPush_1.TaskGitPush,
]).start({
    projectId: '1',
    sourceBranch: '2',
    targetBranch: '3',
    commitMessage: '4',
});
// program
//   .command('to-self', '提交到远程')
//   .command('to-test', '提交到测试')
//   .command('to-maseter', '提交到正式')
//   .command('to-test-deploy', '提交到测试部署') // CI
//   .command('to-maseter-deploy', '提交到正式部署') // CI
//   // .description('提交到远程')
//   // .action(() => {
//   //   new Scheduler([TaskCommitMessage, TaskGitPush]).start();
//   // })
//   // .description('提交到部署')
//   .action((a, b) => {
//     console.log(a, b);
//   });
// // program
// //   .command('to-test')
// //   .description('提交到部署')
// //   .action(() => {});
// program.parse(process.argv);
