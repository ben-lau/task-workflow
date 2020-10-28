import { Scheduler } from './scheduler';
import { TaskAsk } from './task-creator/TaskAsk';
import { TaskGitPush } from './task-creator/TaskGitPush';

new Scheduler([TaskAsk, TaskGitPush]).start();
