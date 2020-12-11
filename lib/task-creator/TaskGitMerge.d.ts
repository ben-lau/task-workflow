import { TaskCreator } from '.';
export declare class TaskGitMerge extends TaskCreator {
    name: string;
    run({ branch }: {
        branch: string;
    }): Promise<void>;
}
