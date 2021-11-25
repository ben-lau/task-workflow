import ora from 'ora';
import chalk from 'chalk';
import log4js from 'log4js';
import { Environment } from '../constants';
import path from 'path';

const LOGS_DAYS_TO_KEEP = 3;

const category = 'log';
// ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
const level = 'info';

log4js.configure({
  appenders: {
    [category]: {
      type: 'dateFile',
      filename: path.resolve(Environment.DIR_STORAGE, './log'),
      pattern: 'yyyy-MM-dd',
      alwaysIncludePattern: false,
      keepFileExt: true,
      daysToKeep: LOGS_DAYS_TO_KEEP,
    },
  },
  categories: {
    default: {
      appenders: [category],
      level,
    },
  },
});

const logger = (message: string[]) =>
  log4js.getLogger('log').info(message.join(' '));

const debugLogger: MethodDecorator = (
  target,
  key,
  desc: TypedPropertyDescriptor<any>
) => {
  const originValue = desc.value;
  desc.value = function (...args: any[]) {
    try {
      logger(args);
    } catch (err: unknown) {}
    return originValue.apply(this, args);
  };
};

class Tips {
  private loading = ora({
    spinner: { interval: 80, frames: ['-', '\\', '|', '/'] },
  });

  showLoading(message: string) {
    return this.loading.start(chalk.cyan(message));
  }

  hideLoading() {
    if (this.loading.isSpinning) {
      return this.succeed(this.loading.text);
    } else {
      return this.loading.stop();
    }
  }

  succeed(message: string) {
    return this.loading.succeed(chalk.green(message));
  }

  @debugLogger
  log(message: string) {
    if (Environment.getDebugMode()) {
      console.log(chalk.blue(message));
    }
  }

  info(message: string) {
    return console.log(chalk.blue(message));
  }

  @debugLogger
  warn(message: string) {
    return this.loading.warn(chalk.yellow(message));
  }

  @debugLogger
  error(message: string) {
    this.loading.fail(chalk.red(message));
    return process.exit(Environment.ERROR_CODE);
  }
}

export const tips = new Tips();
