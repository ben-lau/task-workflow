// import { Scheduler } from './scheduler';
// import { TaskCommitMessage } from './task-creator/TaskCommitMessage';
// import { TaskGitMerge } from './task-creator/TaskGitMerge';
// import { TaskGitPush } from './task-creator/TaskGitPush';
// import { program } from 'commander';
// import { TaskInit } from './task-creator/TaskInit';
// export default new Scheduler([TaskGitMerge]).start();

// export default new Scheduler([
//   // TaskInit,
//   TaskCommitMessage,
//   TaskGitPush,
// ]).start({
//   projectId: '1',
//   sourceBranch: '2',
//   targetBranch: '3',
//   commitMessage: '4', // 提交内容
// });

// program
//   .command('to-self', '提交到远程')
//   .command('to-test', '提交到测试')
//   .command('to-maseter', '提交到正式')
//   .command('to-test-deploy', '提交到测试部署') // CI
//   .command('to-maseter-deploy', '提交到正式部署') // CI
//   .description('提交到远程')
//   .action(() => {
//     console.log(1);
//   });
// program.parse(process.argv);
//   // .description('提交到部署')
//   .action((a, b) => {
//     console.log(a, b);
//   });
// // program
// //   .command('to-test')
// //   .description('提交到部署')
// //   .action(() => {});
// program.parse(process.argv);

export { Workflow } from './workflow';
export { Tasks } from './tasks';
