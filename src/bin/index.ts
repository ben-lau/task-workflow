import { Workflow } from '../workflow';
import { program } from 'commander';
import path from 'path';

program.option('-C, --config <type>', '');
program.parse(process.argv);

// console.log(program)

if (program.config) {
  require(path.join(process.cwd(), program.config));
  console.log(Workflow.maps);
}
