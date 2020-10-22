import { TaskAsk } from '../task-creator/TaskAsk';
import { TaskCreator } from '../task-creator/base';
import { TaskGitPull } from '../task-creator/TaskGitPull';
import { compose, Middleware, Next } from '../utils/compose';
import { TypeContext, context } from './global';
import { tips } from '../utils/tips';

const createTaskQueue = <T>(
  taskList: Array<typeof TaskCreator>
): Array<Middleware<T>> =>
  taskList.map((Creator, index) => async (context: T, next: Next) => {
    const task = new Creator<T>();
    const taskIndex = index + 1;
    // 打印空行
    taskIndex !== 0 && console.log('');

    tips.info(`=====${taskIndex}、开始【${task.taskName}】=====`);

    const shouldStart = await task.callHook('onStart', context);

    shouldStart && (await task.callHook('run', context));

    tips.info(`=====${taskIndex}、【${task.taskName}】完成=====`);

    const prevTaskResult = await next();

    return await task.callHook('onDone', context, prevTaskResult);
  });

compose<TypeContext>(
  createTaskQueue([TaskAsk, TaskGitPull, TaskGitPull, TaskGitPull, TaskGitPull])
)(context);
