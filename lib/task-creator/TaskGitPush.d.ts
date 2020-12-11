import { TaskCreator } from '.';
export declare class TaskGitPush extends TaskCreator {
    name: string;
    run(message: string): Promise<void>;
}
