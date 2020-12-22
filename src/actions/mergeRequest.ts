import open from 'open';
import { tips } from '../utils/tips';
import { Git } from './git';

export namespace MergeRequest {
  interface IQuery {
    sourceBranch: string;
    targetBranch: string;
    title: string;
  }

  interface IParamsGetAddress extends IQuery {
    projectUrl: string;
  }

  interface IParamsCreate extends IQuery {
    projectUrl?: string;
  }

  const REG_GITLAB_PROJECT = /(?<=(git@|https:\/\/)).*(?=\.git)/;

  const getMergeRequestAddress = ({
    projectUrl,
    sourceBranch,
    targetBranch,
    title,
  }: IParamsGetAddress) =>
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
  export const create = async ({
    projectUrl,
    sourceBranch,
    targetBranch,
    title,
  }: IParamsCreate) => {
    const addr = getMergeRequestAddress({
      projectUrl: projectUrl || getProjectUrlFromRepo(await Git.getRemoteUrl()),
      sourceBranch,
      targetBranch,
      title,
    });
    tips.info(`即将打开：${addr}`);
    return open(addr);
  };
}
