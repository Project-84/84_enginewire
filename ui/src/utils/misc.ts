// Will return whether the current environment is in a regular browser
// and not CEF
export const isEnvBrowser = (): boolean => !(window as any).invokeNative;

// Basic no operation function
export const noop = () => {};
export const formatTime = (time: number) => {
  let seconds;
  let minutes;
  let result = '';
  if (time > 60) {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    result = `${minutes} phút ${seconds} giây`;
  } else {
    result = `${time} giây`;
  }
  return result;
};
