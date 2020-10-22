import { TaskAsk } from '../task-creator/TaskAsk';
import { TaskCreator } from '../task-creator/base';
import { TaskGitPull } from '../task-creator/TaskGitPull';
import { compose, Middleware, Next } from '../utils/compose';

const createTaskQueue = <T>(
  taskList: Array<typeof TaskCreator>
): Array<Middleware<T>> =>
  taskList.map(Creator => async (context: T, next: Next) => {
    const task = new Creator<T>();
    const shouldStart = await task.callHook('onStart', context);
    shouldStart && (await task.callHook('run', context));
    const prevTaskResult = await next();
    return await task.callHook('onDone', context, prevTaskResult);
  });

compose<number>(
  createTaskQueue([TaskAsk, TaskGitPull, TaskGitPull, TaskGitPull, TaskGitPull])
)(123);
