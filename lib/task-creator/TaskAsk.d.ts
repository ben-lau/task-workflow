import { TaskCreator } from './base';
export declare class TaskAsk extends TaskCreator {
    taskName: string;
    run(): Promise<{
        commitMessage: string;
    }>;
}
