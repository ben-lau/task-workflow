import { TaskCreator } from '.';
export declare class TaskMergeRequest extends TaskCreator {
    name: string;
    run(): Promise<void>;
}
