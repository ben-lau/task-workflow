import { Workflow } from '../workflow';
import { program } from 'commander';
import path from 'path';
import fs from 'fs';
import { tips } from '../utils/tips';

interface IWorkStartParams {
  from?: string;
  workflowId?: string;
}

export const workStart = async ({
  from,
  workflowId,
}: IWorkStartParams = {}) => {
  program.option('-f, --from <path>', '初始化文件路径').parse(process.argv);

  from = from || program.from;

  if (from) {
    const fromPath = path.resolve(process.cwd(), from);
    if (!fs.existsSync(fromPath)) {
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
