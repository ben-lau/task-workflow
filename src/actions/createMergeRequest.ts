import open from 'open';

interface IMergeRequestParams {
  projectId: string;
  sourceBranch: string;
  targetBranch: string;
  title: string;
}

const getMergeRequestAddress = ({
  projectId,
  sourceBranch,
  targetBranch,
  title,
}: IMergeRequestParams) =>
  `https://code.inke.cn/${projectId}/merge_requests/new?merge_request[source_branch]=${sourceBranch}&merge_request[target_branch]=${targetBranch}&merge_request[title]=${title}`;

/**
 * @todo 申请机器人账号，使用机器人账号创建mr
 */
export const createMergeRequest = (mrParams: IMergeRequestParams) =>
  open(getMergeRequestAddress(mrParams));
