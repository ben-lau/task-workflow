interface ITaskStartParams {
    from?: string;
    workflowId?: string;
}
export declare const taskStart: ({ from, workflowId, }?: ITaskStartParams) => Promise<void>;
export {};
