interface IWorkStartParams {
    from?: string;
    workflowId?: string;
}
export declare const workStart: ({ from, workflowId, }?: IWorkStartParams) => Promise<void>;
export {};
