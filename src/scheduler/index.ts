import { TaskCreator } from '../task-creator';
import { compose, Middleware } from '../utils/compose';
import { tips } from '../utils/tips';

export class Scheduler {
  private taskQueue: Array<Middleware>;

  constructor(taskList: Array<typeof TaskCreator>) {
    this.taskQueue = taskList.map((Creator, index) => async (prev, next) => {
      const task = new Creator();
      const taskIndex = index + 1;
      let result: unknown;
      // 打印空行
      tips.log('');

      tips.info(`=====${taskIndex}、开始【${task.taskName}】=====`);

      const shouldStart = await task.callHook('onStart');

      shouldStart && (result = await task.callHook('run', prev));

      tips.info(`=====${taskIndex}、【${task.taskName}】完成=====`);

      const nextTaskResult = await next(result);

      return await task.callHook('onDone', nextTaskResult);
    });
  }

  start() {
    const launcher = compose(this.taskQueue);
    return launcher();
  }
}
