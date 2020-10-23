export const wait = (delay = 0) =>
  new Promise<void>(resolve => setTimeout(resolve, delay));
