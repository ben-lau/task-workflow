/// <reference types="node" />
interface IMergeRequestQuery {
    sourceBranch: string;
    targetBranch: string;
    title: string;
}
interface IParamsCreateMergeRequest extends IMergeRequestQuery {
    projectUrl?: string;
}
/**
 * @todo 申请机器人账号，使用机器人账号创建mr
 */
export declare const createMergeRequest: ({ projectUrl, sourceBranch, targetBranch, title, }: IParamsCreateMergeRequest) => Promise<import("child_process").ChildProcess>;
export {};
