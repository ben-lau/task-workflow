import { Context } from './context';
import { contextData } from './context/initialData';
import { startTask } from './scheduler';

startTask(Context.create(contextData));
