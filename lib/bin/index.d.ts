interface IWorkStartParams {
    from?: string;
    debug?: boolean;
    workflowId?: string;
}
export declare const workStart: ({ from, debug, workflowId, }?: IWorkStartParams) => Promise<void>;
export {};
