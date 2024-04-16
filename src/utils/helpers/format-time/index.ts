export const formatTime = (time: number) => {
  const pad = (num: number, to: number) => num.toString().padStart(to, '0');
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor(time / (1000 * 60));
  return `${pad(minutes, 1)}:${pad(seconds, 2)}`;
};
