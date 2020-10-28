import { TaskAsk } from '../task-creator/TaskAsk';
import { TaskCreator } from '../task-creator/base';
import { TaskGitPush } from '../task-creator/TaskGitPush';
import { compose, Next } from '../utils/compose';
import { tips } from '../utils/tips';

const createTaskQueue = (taskList: Array<typeof TaskCreator>) =>
  taskList.map((Creator, index) => async (prev: any, next: Next) => {
    const task = new Creator();
    const taskIndex = index + 1;
    let result: any;
    // 打印空行
    tips.log('');

    tips.info(`=====${taskIndex}、开始【${task.taskName}】=====`);

    const shouldStart = await task.callHook('onStart');

    shouldStart && (result = await task.callHook('run', prev));

    tips.info(`=====${taskIndex}、【${task.taskName}】完成=====`);

    const nextTaskResult = await next(result);

    return await task.callHook('onDone', nextTaskResult);
  });

export const startTask = compose(createTaskQueue([TaskAsk, TaskGitPush]));
