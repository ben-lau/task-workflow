/// <reference types="node" />
interface IMergeRequestParams {
    projectId: string;
    sourceBranch: string;
    targetBranch: string;
    title: string;
}
/**
 * @todo 申请机器人账号，使用机器人账号创建mr
 */
export declare const createMergeRequest: ({ projectId, sourceBranch, targetBranch, title, }: IMergeRequestParams) => Promise<import("child_process").ChildProcess>;
export {};
