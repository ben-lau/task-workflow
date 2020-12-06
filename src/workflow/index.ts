import { program } from 'commander';

interface IWorkflowConfig {
  description: string;
  validate(): Promise<boolean> | boolean;
  steps: Array<any>;
}

export class Workflow {
  static maps = new Map();

  constructor(private name: string, private config: IWorkflowConfig) {
    this.register();
  }
  register() {
    Workflow.maps.set(this.name, this.config);
  }
}
