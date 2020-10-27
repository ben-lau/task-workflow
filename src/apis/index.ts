import Axios from 'axios';

const URL_INKE_GITLAB = 'https://code.inke.cn/api/v4';

interface IMergeRequestParams {
  projectId: string;
  sourceBranch: string;
  targetBranch: string;
  title: string;
  token: string;
}

export const createGitlabMergeRequest = async ({
  projectId,
  sourceBranch: source_branch,
  targetBranch: target_branch,
  title,
  token: private_token,
}: IMergeRequestParams) => {
  try {
    const rs = await Axios.post(
      `${URL_INKE_GITLAB}/projects/${encodeURIComponent(
        projectId
      )}/merge_requests`,
      {
        private_token,
        source_branch,
        target_branch,
        title,
      }
    );
    return rs.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

// (async () => {
//   await createGitlabMergeRequest({
//     projectId: 'gz/web/opd/ik-ui/ik-ui-vue',
//     sourceBranch: 'test',
//     targetBranch: 'master',
//     title: '创建mr',
//     token: 'Qqpqu81yBSXJyCC4E55D',
//   });
// })();
