import { Scheduler } from './scheduler';
import { TaskCommitMessage } from './task-creator/TaskCommitMessage';
import { TaskGitMerge } from './task-creator/TaskGitMerge';
import { TaskGitPush } from './task-creator/TaskGitPush';

// export default new Scheduler([TaskGitMerge]).start();

export default new Scheduler([TaskCommitMessage, TaskGitPush]).start();
