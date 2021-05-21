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

export const git = NoNewLine((...args: Array<string>) =>
  execute(cmdGit, args, { level: EnumExecuteLevel.Fatal })
);

export const gitWithoutBreak = NoNewLine((...args: Array<string>) =>
  execute(cmdGit, args, { level: EnumExecuteLevel.Warn })
);

export const gitInSilent = NoNewLine(async (...args: Array<string>) => {
  try {
    return await execute(cmdGit, args, { level: EnumExecuteLevel.None });
  } catch (err) {
    return err;
  }
});
