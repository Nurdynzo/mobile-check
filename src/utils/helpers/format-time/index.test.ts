import {formatTime} from '.';

describe('formatTime', () => {
  it('should correctly format time in milliseconds to minutes:seconds', () => {
    expect(formatTime(90000)).toBe('1:30');
    expect(formatTime(60000)).toBe('1:00');
    expect(formatTime(61000)).toBe('1:01');
    expect(formatTime(0)).toBe('0:00');
  });
});
