import { TaskAsk } from '../task-creator/TaskAsk';
import { TaskCreator } from '../task-creator/base';
import { TaskGitPush } from '../task-creator/TaskGitPush';
import { compose, Middleware, Next } from '../utils/compose';
import { Context } from '../contexts';
import { tips } from '../utils/tips';

const createTaskQueue = (
  taskList: Array<typeof TaskCreator>
): Array<Middleware<Context>> =>
  taskList.map((Creator, index) => async (_context: Context, next: Next) => {
    const task = new Creator<Context>();
    const taskIndex = index + 1;
    // 打印空行
    tips.log('');

    tips.info(`=====${taskIndex}、开始【${task.taskName}】=====`);

    const shouldStart = await task.callHook('onStart', _context);

    shouldStart && (await task.callHook('run', _context));

    tips.info(`=====${taskIndex}、【${task.taskName}】完成=====`);

    const prevTaskResult = await next();

    return await task.callHook('onDone', _context, prevTaskResult);
  });

export const startTask = compose(createTaskQueue([TaskAsk, TaskGitPush]));
