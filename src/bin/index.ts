import { Workflow } from '../workflow';
import { program } from 'commander';
import path from 'path';

const main = async () => {
  program.option('-f, --from <path>', '').parse(process.argv);

  if (program.from) {
    await import(path.join(process.cwd(), program.from));
  }
  Workflow.maps.forEach((item, key) => {
    program
      .command(key)
      .description(item.description)
      .action(() => {
        item.start();
      });
  });
  program.parse(process.argv);
  // console.log(Workflow.maps);
};

main();
