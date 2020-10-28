import { TaskCreator } from './base';
export declare class TaskInit extends TaskCreator {
    taskName: string;
    run(): Promise<void>;
}
