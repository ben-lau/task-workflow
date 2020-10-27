import { Context } from '../contexts';
import { TaskCreator } from './base';
export declare class TaskInit extends TaskCreator<Context> {
    taskName: string;
    run(): Promise<void>;
}
