import { Middleware } from '../utils/compose';
interface IWorkflowConfig {
    description: string;
    validate(): Promise<boolean> | boolean;
    steps: Array<Step>;
}
interface IFunctionalTask {
    (lastParams: any): any | Promise<any>;
}
declare type Step = {
    name: string;
    use: IFunctionalTask;
} | IFunctionalTask;
export declare class Workflow {
    private name;
    static maps: Map<string, Workflow>;
    private config;
    description: string;
    constructor(name: string, config: Partial<IWorkflowConfig>);
    register(): void;
    start(): Promise<unknown>;
    createTaskQueue(): Middleware[];
}
export {};
