const { Workflow, Tasks } = require('./lib/index');

const On = '1';

const isPatchVersion = () => process.env.patch !== On;

new Workflow('to-self', {
  description: '提交到远程',
  steps: [
    {
      name: '构建',
      skip: async () =>
        !(await Tasks.AskFor.shouldContinue({ message: '是否需要构建？' })()),
      use: Tasks.Shell.run({ cmd: 'npm run build' }),
    },
    { name: '获取提交信息', use: Tasks.AskFor.commitMessage() },
    { name: '提交', use: Tasks.Git.commit(message => [{ message }]) },
    {
      name: '版本信息',
      skip: async () =>
        !(await Tasks.AskFor.shouldContinue({
          message: '是否更新版本？',
        })()),
      use: () => (process.env.patch = On),
    },
    {
      name: '打版本',
      skip: isPatchVersion,
      use: Tasks.Shell.run({ cmd: 'npm run version:patch' }),
    },
    { name: '推送', use: Tasks.Git.push() },
    {
      name: '发布到npm',
      skip: isPatchVersion,
      use: Tasks.Shell.run({ cmd: 'npm publish' }),
    },
    {
      name: '推送tag',
      skip: isPatchVersion,
      use: Tasks.Shell.run({ cmd: 'git push --tags' }),
    },
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
