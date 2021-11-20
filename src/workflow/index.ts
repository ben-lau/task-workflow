import { compose, Middleware } from '../utils/compose';
import { timer } from '../utils/timer';
import { tips } from '../utils/tips';

interface IFunctionalTask {
  (lastParams: any): any | Promise<any>;
}

interface IValidate {
  (): Promise<boolean> | boolean;
}

interface ISkip {
  (lastParams: any): Promise<boolean> | boolean;
}

interface IConfigurableStep {
  name: string;
  use: IFunctionalTask;
  skip?: ISkip;
}

type IFunctionalStep = IFunctionalTask;

type Step = IConfigurableStep | IFunctionalStep;

interface IWorkflowConfig {
  description: string;
  validate: IValidate;
  steps: Array<Step>;
}

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

  private register() {
    if (Workflow.maps.has(this.name)) {
      tips.warn(`已存在【${this.name}】流程`);
    }
    Workflow.maps.set(this.name, this);
  }

  private validateStep(step: Step) {
    let name = '未命名任务';
    let task: IFunctionalTask = () => void 0;
    let skip: ISkip = () => false;
    if (typeof step !== 'function') {
      name = step.name;
      skip = step.skip ?? skip;
      task = step.use;
      if (typeof task !== 'function') {
        tips.error(`【${name}】中找不到'use'`);
      }
    } else {
      task = step;
    }
    return {
      name,
      task,
      skip,
    };
  }

  private createTaskQueue() {
    return this.config.steps
      .filter(Boolean)
      .map<Middleware>((step, index) => async (prev, next) => {
        const { name, task, skip } = this.validateStep(step);
        const taskIndex = index + 1;
        // 打印空行
        tips.info('');

        if (await skip(prev)) {
          tips.info(`==${taskIndex}、【${name}】被跳过==`);
          return await next(prev);
        }

        tips.info(`==${taskIndex}、开始【${name}】==`);

        timer.start(name);
        const result = await task(prev);
        const timeConsuming = timer.end(name);
        tips.info(`==${taskIndex}、【${name}】完成，耗时${timeConsuming}ms==`);

        return await next(result);
      });
  }

  async start() {
    if (!(await this.config.validate())) {
      tips.warn(`【${this.description}】验证失败，已终止`);
      return;
    } else {
      tips.succeed(`开始【${this.description}】`);
      return compose(this.createTaskQueue())();
    }
  }
}
