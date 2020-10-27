interface IMergeRequestParams {
    projectId: string;
    sourceBranch: string;
    targetBranch: string;
    title: string;
    token: string;
}
export declare const createGitlabMergeRequest: ({ projectId, sourceBranch: source_branch, targetBranch: target_branch, title, token: private_token, }: IMergeRequestParams) => Promise<any>;
export {};
