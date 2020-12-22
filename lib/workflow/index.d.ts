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
declare type IFunctionalStep = IFunctionalTask;
declare type Step = IConfigurableStep | IFunctionalStep;
interface IWorkflowConfig {
    description: string;
    validate: IValidate;
    steps: Array<Step>;
}
export declare class Workflow {
    private name;
    static maps: Map<string, Workflow>;
    private config;
    description: string;
    constructor(name: string, config: Partial<IWorkflowConfig>);
    private register;
    private validateStep;
    private createTaskQueue;
    start(): Promise<unknown>;
}
export {};
