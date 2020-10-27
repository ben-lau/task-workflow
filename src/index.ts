import { Context } from './contexts';
import { contextData } from './contexts/initialData';
import { startTask } from './scheduler';

startTask(Context.create(contextData));
