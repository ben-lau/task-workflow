# task workflow

用于一些标准化流程、步骤等，支持异步任务和自定义任务，包含了一些好用的任务。

- [安装](#安装)
- [使用](#使用)
- [流程](#流程)
- [任务](#任务)

## 安装

项目内安装：

```bash
npm i task-workflow -D
```

也可以全局安装：

```bash
npm i task-workflow -g
```

## 快速使用

先创建一个配置文件：

```javascript
// workflow.config.js
const { Workflow, Tasks } = require('task-workflow');

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
    { name: '本地软链', use: Tasks.Shell.run({ cmd: 'npm link' }) },
    { name: '测试', use: Tasks.Shell.run({ cmd: 'npm  test' }) },
  ],
});
```

完成后，可以使用命令行或者内置函数：

```bash
work-start to-self --from workflow.config.js
# work-start [workflowId] --from <path>
```

或

```javascript
import { workStart } from 'task-workflow';

workStart({
  from: 'workflow.config.js',
  workflowId: 'to-self',
});
```

## 流程

创建一个流程需使用到 Workflow

### API：

- `name` **{ string }** 工作流 id
- `options` **{ object }** 工作流的配置
  - `description` **{ String }** 工作流名称、描述
  - `validate` **{ Function }** 工作流前置判断，返回为 true 才能开始，支持异步
  - `steps` **{ Array<object | Function> }** 流程，支持直接传任务函数、任务、配置
    - `name` **{ string }** 本次任务名
    - `use` **{ Task | Function }** **（必填）** 本次任务函数
    - `skip` **{ Function }** 判断步骤是否需要跳过，返回为 true 会被跳过，支持异步，默认返回 false

### 例子：

```javascript
// workflow.config.js
const { Workflow, Tasks } = require('./lib/index');

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
    { name: '推送', use: Tasks.Git.push() },
  ],
});
```

## 任务

Tasks 中包含了部分任务工厂函数：

```javascript
import { Tasks } from 'task-workflow';
```

Tasks 内所有模块下的任务都是工厂函数，都是一些柯里化函数。支持参数为函数，返回任务函数的原参数。

### 使用方法:

```javascript
import { Tasks } from 'task-workflow';

// 任务工厂函数调用后返回的是个任务函数，是已经带上参数的执行函数
const task = Tasks.File.copyTo({ from: './__dist', to: './dist' });

// 需要再次调用才真正执行
task();

// 支持传入返回任务函数参数的函数，这样可以让参数在执行时再确定
// 传入的函数的形参在workflow中为上一个任务的返回
const task2 = Tasks.File.copyTo(lastParams => [
  { from: './__dist', to: './dist' },
]);
```

**tips: 如果是需要在自己的函数内调用任务的，记得先创建后再调用**

### Modules

- `AskFor` cli 中询问的任务集合
- `File` 关于文件系统的任务集合
- `Git` 关于 git 操作的任务集合
- `MergeRequest` 关于 gitlab 中 mr 的任务结合
- `Shell` 关于 shell 指令的任务集合

### todos

- [x] 日志系统重构
- [x] 修改 compose 实现
- [x] 更好用的 shell
- [x] 全局调用项目内部配置，静态挂载正确化
- [x] git 模块方法的重构
- [ ] 增加 task 错误钩子
