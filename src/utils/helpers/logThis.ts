// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logThis = (...log: any) => {
  if (__DEV__) {
    console.log(...log, ' from LOG FILE');
  }
};
