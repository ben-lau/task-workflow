import { TaskCreator } from '.';
export declare class TaskCommitMessage extends TaskCreator {
    name: string;
    run(): Promise<string>;
}
