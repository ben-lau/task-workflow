import ora from 'ora';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs';
import { formatToDateTime } from './date';
import { wait } from './timer';

const HOME_DIR = process.env.HOME!;

const LOG_DIR = path.resolve(HOME_DIR, '.ik-gz-log');

const DEBUG_MODE = false;

const FatalReport: MethodDecorator = (
  target,
  key,
  desc: TypedPropertyDescriptor<any>
) => {
  const originValue = desc.value;
  desc.value = function (...args: any[]) {
    try {
      writeDownErrorLog(args.join(' '));
      originValue.apply(this, args);
    } catch (err) {
      tips.warn(err);
    }
  };
};

const ExitProcess: MethodDecorator = (
  target,
  key,
  desc: TypedPropertyDescriptor<any>
) => {
  const originValue = desc.value;
  desc.value = function (...args: any[]) {
    try {
      originValue.apply(this, args);
    } finally {
      process.exit();
    }
  };
};

const writeDownErrorLog = (message: string) => {
  if (!DEBUG_MODE) {
    return;
  }
  const fileName = `${LOG_DIR}/${formatToDateTime(Date.now())}.log`;
  try {
    if (!fs.existsSync(LOG_DIR)) {
      fs.mkdirSync(LOG_DIR, { recursive: true });
    }
    fs.appendFileSync(fileName, message);
  } catch (err) {
    tips.warn(err);
  }
};

class Tips {
  private loading = ora({
    spinner: { interval: 80, frames: ['-', '\\', '|', '/'] },
  });

  showLoading(message: string) {
    return this.loading.start(chalk.cyan(message));
  }

  hideLoading() {
    return this.loading.stop();
  }

  succeed(message: string) {
    return this.loading.succeed(chalk.green(message));
  }

  info(message: string) {
    return this.loading.info(chalk.blue(message));
  }

  warn(message: string) {
    return this.loading.warn(chalk.yellow(message));
  }

  @ExitProcess
  @FatalReport
  error(message: string) {
    return this.loading.fail(chalk.red(message));
  }
}

export const tips = new Tips();
