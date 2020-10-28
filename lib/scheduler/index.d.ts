import { TaskCreator } from '../task-creator';
export declare class Scheduler {
    private taskQueue;
    constructor(taskList: Array<typeof TaskCreator>);
    start(): Promise<unknown>;
}
