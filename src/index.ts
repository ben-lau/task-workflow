import { Context } from './contexts';
import { contextData } from './contexts/initialData';
import { startTask } from './scheduler';

startTask(new Context(contextData));
