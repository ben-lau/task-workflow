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
