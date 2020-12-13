import { Workflow } from '../workflow';
import { program } from 'commander';
import path from 'path';

interface ITaskStartParams {
  from?: string;
  workflowId?: string;
}

export const taskStart = async ({
  from,
  workflowId,
}: ITaskStartParams = {}) => {
  program.option('-f, --from <path>', '初始化文件路径').parse(process.argv);

  if (program.from) {
    await import(path.join(process.cwd(), from || program.from));
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
