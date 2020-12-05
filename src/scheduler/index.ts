import { callHook, TaskCreator } from '../task-creator';
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

      tips.log(`=====${taskIndex}、开始【${task.name}】=====`);

      const shouldStart = await callHook(task, 'onStart');

      if (shouldStart) {
        result = await callHook(task, 'run', prev);
        tips.log(`=====${taskIndex}、【${task.name}】完成=====`);
      } else {
        tips.log(`=====${taskIndex}、【${task.name}】被跳过=====`);
      }

      return await callHook(task, 'onDone', await next(result));
    });
  }

  start(launchOptions?: any) {
    const launcher = compose(this.taskQueue);
    return launcher(launchOptions);
  }
}
