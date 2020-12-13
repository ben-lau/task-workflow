import { compose, Middleware } from '../utils/compose';
import { timer } from '../utils/timer';
import { tips } from '../utils/tips';

interface IWorkflowConfig {
  description: string;
  validate(): Promise<boolean> | boolean;
  steps: Array<Step>;
}

interface IFunctionalTask {
  (lastParams: any): any | Promise<any>;
}

type Step = { name: string; use: IFunctionalTask } | IFunctionalTask;

const DEFAULT_CONFIG: IWorkflowConfig = {
  description: '未命名流程',
  validate: () => true,
  steps: [],
};

export class Workflow {
  static maps = new Map<string, Workflow>();

  private config: IWorkflowConfig;

  description: string;

  constructor(private name: string, config: Partial<IWorkflowConfig>) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.description = this.config.description;
    this.register();
  }

  register() {
    if (Workflow.maps.has(this.name)) {
      tips.warn(`已存在【${this.name}】流程`);
    }
    Workflow.maps.set(this.name, this);
  }

  async start() {
    if (!(await this.config.validate())) {
      tips.warn(`${this.name}验证失败，已终止`);
      return;
    } else {
      tips.succeed(`开始【${this.description}】`);
      return compose(this.createTaskQueue())();
    }
  }

  createTaskQueue() {
    return this.config.steps
      .filter(Boolean)
      .map<Middleware>((item, index) => async (prev, next) => {
        let taskName = '未命名任务';
        let task: IFunctionalTask = () => void 0;
        if (typeof item !== 'function') {
          taskName = item.name;
          task = item.use;
        } else {
          task = item;
        }
        const taskIndex = index + 1;
        // 打印空行
        tips.log('');

        tips.log(`=====${taskIndex}、开始【${taskName}】=====`);

        timer.start(taskName);
        const result = await task(prev);
        const timeConsuming = timer.end(taskName);
        tips.log(
          `=====${taskIndex}、【${taskName}】完成，耗时${timeConsuming}ms=====`
        );

        return await next(result);
      });
  }
}
