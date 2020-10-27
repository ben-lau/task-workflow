import open from 'open';

interface IMergeRequestParams {
  projectId: string;
  sourceBranch: string;
  targetBranch: string;
  title: string;
}

/**
 * @todo 申请机器人账号，使用机器人账号创建mr
 */
export const createMergeRequest = async ({
  projectId,
  sourceBranch,
  targetBranch,
  title,
}: IMergeRequestParams) =>
  open(
    `https://code.inke.cn/${projectId}/merge_requests/new?merge_request[source_branch]=${sourceBranch}&merge_request[target_branch]=${targetBranch}&merge_request[title]=${title}`
  );
