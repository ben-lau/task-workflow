export const context = {
  isCi: process.env.CI === 'true',
};

export type TypeContext = typeof context;
