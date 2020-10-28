import { TaskCreator } from './base';
export declare class TaskMergeRequest extends TaskCreator {
    taskName: string;
    run(): Promise<void>;
}
