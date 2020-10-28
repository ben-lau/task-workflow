import { TaskCreator } from './base';
export declare class TaskGitPush extends TaskCreator {
    taskName: string;
    run({ commitMessage }: {
        commitMessage: string;
    }): Promise<void>;
}
