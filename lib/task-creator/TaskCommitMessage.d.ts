import { TaskCreator } from '.';
export declare class TaskCommitMessage extends TaskCreator {
    taskName: string;
    run(): Promise<void>;
}
