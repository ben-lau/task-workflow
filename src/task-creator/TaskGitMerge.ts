import { TaskCreator } from '.';
import {
  getCurrentBranchName,
  gitCheckout,
  gitMerge,
  gitPush,
} from '../actions/git';

export class TaskGitMerge extends TaskCreator {
  name = '合并代码';

  async run({ branch }: { branch: string }) {
    const currentBranch = await getCurrentBranchName();
    await gitCheckout({ branch: currentBranch });
    await gitCheckout({ branch });

    await gitMerge({ branch: currentBranch });

    await gitPush();
  }
}
