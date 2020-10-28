import { TaskCreator } from '.';
export declare class TaskAsk extends TaskCreator {
    taskName: string;
    run(): Promise<void>;
}
