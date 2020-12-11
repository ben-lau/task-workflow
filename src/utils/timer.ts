/**
 * 等待
 */
export const wait = (delay = 0) =>
  new Promise<void>(resolve => setTimeout(resolve, delay));

interface TimerItem {
  time: number;
  started: boolean;
}

/**
 * 计时器
 */
export const timer = (() => {
  const map: Record<string, TimerItem> = {};
  return {
    start(key: string) {
      map[key] = {
        time: Date.now(),
        started: true,
      };
    },
    end(key: string) {
      const item = map[key];
      if (item && item.started) {
        item.started = false;
        return Date.now() - item.time;
      } else {
        return 0;
      }
    },
  };
})();
