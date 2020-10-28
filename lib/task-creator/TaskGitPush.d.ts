import { TaskCreator } from '.';
export declare class TaskGitPush extends TaskCreator {
    taskName: string;
    run(): Promise<void>;
}
