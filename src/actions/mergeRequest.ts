import open from 'open';
import { getRemoteUrl } from './git';

interface IMergeRequestQuery {
  sourceBranch: string;
  targetBranch: string;
  title: string;
}

interface IParamsGetMergeRequestAddress extends IMergeRequestQuery {
  projectUrl: string;
}

interface IParamsCreateMergeRequest extends IMergeRequestQuery {
  projectUrl?: string;
}

const REG_GITLAB_PROJECT = /(?<=(git@|https:\/\/)).*(?=\.git)/;

const getMergeRequestAddress = ({
  projectUrl,
  sourceBranch,
  targetBranch,
  title,
}: IParamsGetMergeRequestAddress) =>
  `https://${projectUrl}/merge_requests/new?merge_request[source_branch]=${sourceBranch}&merge_request[target_branch]=${targetBranch}&merge_request[title]=${title}`;

/**
 *
 * @param repo ssh类型的git repo
 * @returns 仓库地址
 */
const getProjectUrlFromRepo = (repo: string) =>
  (repo.match(REG_GITLAB_PROJECT) || [''])[0].replace(/\:/, '/');

/**
 * @todo 申请机器人账号，使用机器人账号创建mr
 */
export const createMergeRequest = async ({
  projectUrl,
  sourceBranch,
  targetBranch,
  title,
}: IParamsCreateMergeRequest) =>
  open(
    getMergeRequestAddress({
      projectUrl: projectUrl || getProjectUrlFromRepo(await getRemoteUrl()),
      sourceBranch,
      targetBranch,
      title,
    })
  );
