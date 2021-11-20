import { callHook, TaskCreator } from '../task-creator';
import { compose, Middleware } from '../utils/compose';
import { timer } from '../utils/timer';
import { tips } from '../utils/tips';

export class Scheduler {
  private taskQueue: Array<Middleware>;

  constructor(taskList: Array<typeof TaskCreator>) {
    this.taskQueue = taskList.map((Creator, index) => async (prev, next) => {
      const task = new Creator();
      const taskIndex = index + 1;
      let result: unknown;
      // 打印空行
      tips.info('');

      tips.info(`=====${taskIndex}、开始【${task.name}】=====`);

      const shouldStart = await callHook(task, 'onStart');

      if (shouldStart) {
        timer.start(task.name);
        result = await callHook(task, 'run', prev);
        const timeConsuming = timer.end(task.name);
        tips.info(
          `=====${taskIndex}、【${task.name}】完成，耗时${timeConsuming}ms=====`
        );
      } else {
        tips.info(`=====${taskIndex}、【${task.name}】被跳过=====`);
      }

      return await callHook(task, 'onDone', await next(result));
    });
  }

  start(launchOptions?: any) {
    const launcher = compose(this.taskQueue);
    return launcher(launchOptions);
  }
}
