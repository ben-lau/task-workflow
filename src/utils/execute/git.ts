import { EnumExecuteLevel, execute } from '.';
import { PromisifySpawnLib } from './promisify-spawn';

interface GitMethods {
  (...args: Array<string>): Promise<PromisifySpawnLib.Result>;
}

const cmdGit = 'git';

const NoNewLine =
  (gitMethod: GitMethods): GitMethods =>
  async (...args: Array<string>) => {
    const { message, code } = await gitMethod(...args);
    return {
      message: message.trim(),
      code,
    };
  };

/**
 * git方法，报错即退出
 */
export const git = NoNewLine((...args: Array<string>) =>
  execute(cmdGit, args, { level: EnumExecuteLevel.Fatal })
);

/**
 * git方法，错误仅仅打印提示
 */
export const gitWithoutBreak = NoNewLine((...args: Array<string>) =>
  execute(cmdGit, args, { level: EnumExecuteLevel.Warn })
);

/**
 * git方法，错误也无提示
 */
export const gitInSilent = NoNewLine(async (...args: Array<string>) => {
  try {
    return await execute(cmdGit, args, { level: EnumExecuteLevel.None });
  } catch (err: unknown) {
    return err as ReturnType<typeof execute>;
  }
});
