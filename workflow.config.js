module.exports = {
  'to-self': {
    description: '',
    env: {
      currentBranch: await getCurrentBranch(),
    },
    validate: () => this.env.currentBranch !== 'deploy',
    tasks: [inquirerCommitMessage(), gitCommit(), gitPush()],
  },
  'to-test': {
    description: '',
    env: {
      currentBranch: await getCurrentBranch(),
    },
    validate: async () =>
      !['test', 'master', 'deploy'].includes(this.env.currentBranch),
    tasks: [
      inquirerCommitMessage(),
      gitCommit(),
      gitPush(),
      gitMerge(this.env.currentBranch),
    ],
  },
  'to-test-deploy': {
    description: '',
    env: {
      currentBranch: await getCurrentBranch(),
      dir: './.deploy',
    },
    validate() {
      return !['test', 'master', 'deploy'].includes(this.env.currentBranch);
    },
    tasks: [
      process.env.CI === 'true'
        ? getLastCommit('test')
        : inquirerCommitMessage(),
      generateDir(this.env.dir),
      gitClone({
        address: 'git@code.inke.cn/project',
        branch: 'test',
        pwd: this.env.dir,
      }),
      run('npm run build'),
      copy({ from: 'dist', to: this.env.dir }),
      gitPush({ pwd: this.env.dir }),
    ],
  },
};
