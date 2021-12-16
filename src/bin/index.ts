import { Workflow } from '../workflow';
import { program } from 'commander';
import path from 'path';
import fse from 'fs-extra';
import { tips } from '../utils/tips';
import { Environment } from '../constants';

interface IWorkStartParams {
  from?: string;
  debug?: boolean;
  workflowId?: string;
}

export const workStart = async ({
  from,
  debug,
  workflowId,
}: IWorkStartParams = {}) => {
  program
    .option('-f, --from <path>', '初始化文件路径')
    .option('--debug', '开启调试模式')
    .parse(process.argv);

  from ??= program.from;
  debug ??= program.debug;

  Environment.setDebugMode(!!debug);

  if (from) {
    const fromPath = path.resolve(process.cwd(), from);
    if (!fse.existsSync(fromPath)) {
      tips.error(`配置文件：${fromPath} 不存在`);
    }
    await import(fromPath);
  }

  Workflow.maps.forEach((item, key) => {
    program
      .command(key)
      .description(item.description)
      .action(() => {
        item.start();
      });
  });

  if (workflowId && Workflow.maps.has(workflowId)) {
    Workflow.maps.get(workflowId)?.start();
  } else {
    program.parse(process.argv);
  }
};
