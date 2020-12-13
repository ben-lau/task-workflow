// module.exports = {
//   'to-self': {
//     description: '',
//     validate: () => this.env.currentBranch !== 'deploy',
//     tasks: [inquirerCommitMessage(), gitCommit(), gitPush()],
//   },
//   'to-test': {
//     description: '',
//     validate: async () =>
//       !['test', 'master', 'deploy'].includes(this.env.currentBranch),
//     tasks: [
//       { name: '', use: inquirerCommitMessage() },
//       action('提交到远程', lastParams => gitCommit({ message: lastParams })()),
//       gitPush(),
//       gitMerge(this.env.currentBranch),
//     ],
//   },
//   'to-test-deploy': {
//     description: '',
//     validate() {
//       return !['test', 'master', 'deploy'].includes(this.env.currentBranch);
//     },
//     tasks: [
//       {
//         name: '获取提交信息',
//         use:
//           process.env.CI === 'true'
//             ? getLastCommit('test')
//             : inquirerCommitMessage(),
//       },
//       {
//         name: '回调传递',
//         use: lastParams => (this.env.commitMessage = lastParams),
//       },
//       generateDir(this.env.dir),
//       gitClone({
//         address: 'git@code.inke.cn/project',
//         branch: 'test',
//         pwd: this.env.dir,
//       }),
//       run({ cmd: 'npm run build' }),
//       copy({ from: 'dist', to: this.env.dir }),
//       gitCommit(() => [{ message: this.env.commitMessage }]),
//       gitPush({ pwd: this.env.dir }),
//     ],
//   },
// };

const { Workflow, Tasks } = require('./lib/index');

new Workflow('to-self', {
  description: '提交到远程',
  steps: [
    { name: '获取提交信息', use: Tasks.AskFor.commitMessage() },
    { name: '提交', use: Tasks.Git.commit(message => [{ message }]) },
    { name: '推送', use: Tasks.Git.push() },
  ],
});

new Workflow('build-and-link', {
  description: '构建并本地测试',
  steps: [
    { name: '构建', use: Tasks.Shell.run({ cmd: 'npm run build' }) },
    { name: '移除软链', use: Tasks.Shell.run({ cmd: 'npm unlink' }) },
    { name: '本地软链', use: Tasks.Shell.run({ cmd: 'npm link' }) },
  ],
});
// new Workflow('to-test-2', { description: '提交到测试2', steps: [1234] });
