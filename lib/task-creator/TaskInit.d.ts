import { TaskCreator } from '.';
export declare class TaskInit extends TaskCreator {
    taskName: string;
    run(): Promise<void>;
}
