/// <reference types="node" />
export declare namespace MergeRequest {
    interface IQuery {
        sourceBranch: string;
        targetBranch: string;
        title: string;
    }
    interface IParamsCreate extends IQuery {
        projectUrl?: string;
    }
    /**
     * @todo 申请机器人账号，使用机器人账号创建mr
     */
    export const create: ({ projectUrl, sourceBranch, targetBranch, title, }: IParamsCreate) => Promise<import("child_process").ChildProcess>;
    export {};
}
