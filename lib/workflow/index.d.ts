interface IWorkflowConfig {
    description: string;
    validate(): Promise<boolean> | boolean;
    steps: Array<any>;
}
export declare class Workflow {
    private name;
    private config;
    static maps: Map<any, any>;
    constructor(name: string, config: IWorkflowConfig);
    register(): void;
}
export {};
