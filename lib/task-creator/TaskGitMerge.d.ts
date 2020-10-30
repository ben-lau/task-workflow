import { TaskCreator } from '.';
export declare class TaskGitMerge extends TaskCreator {
    taskName: string;
    run(): Promise<void>;
}
