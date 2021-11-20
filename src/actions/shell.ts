import { execute } from '../utils/execute';

export namespace Shell {
  /**
   * 执行指令，但无法获取结果，只能返回成功失败
   */
  export const run = ({ cmd }: { cmd: string }) =>
    execute(cmd, [], { shell: true, stdio: 'inherit' });

  /**
   * 执行指令，可以获取结果，但是会丢失颜色等信息
   */
  export const exec = ({ cmd }: { cmd: string }) =>
    execute(cmd, [], { shell: true });
}
