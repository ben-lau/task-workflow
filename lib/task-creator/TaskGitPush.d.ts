import { Context } from '../contexts';
import { TaskCreator } from './base';
export declare class TaskGitPush extends TaskCreator<Context> {
    taskName: string;
    run(context: Context): Promise<void>;
}
