import { TaskCreator } from '.';
export declare class TaskMergeRequest extends TaskCreator {
    taskName: string;
    run(): Promise<void>;
}
