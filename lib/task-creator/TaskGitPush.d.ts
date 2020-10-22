import { Context } from '../context';
import { TaskCreator } from './base';
export declare class TaskGitPush extends TaskCreator<Context> {
    taskName: string;
    run(context: Context): Promise<void>;
}
