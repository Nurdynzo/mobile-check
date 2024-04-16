import calculateAge from '.';
import dayjs from 'dayjs';
import {NOT_AVAILABLE} from '../..';

describe('calculateAge', () => {
  it('should return null given null age', () => {
    const age = calculateAge(null);

    expect(age).toBe(null);
  });

  it('should return --- given invalid age format', () => {
    const age = calculateAge('1993-12iu11Y00:00:00X');

    expect(age).toBe(NOT_AVAILABLE);
  });

  it('should return age with unit yrs given age is 2 or more years', () => {
    const today = dayjs(Date.now()).subtract(2, 'years');
    const age = calculateAge(today.toISOString());

    expect(age).toBe('2yrs');
  });

  it('should return age with unit yr given age 1 year', () => {
    const today = dayjs(Date.now()).subtract(1, 'year');
    const age = calculateAge(today.toISOString());

    expect(age).toBe('1yr');
  });

  it('should return age with unit mths given age is 2 months', () => {
    const today = dayjs(Date.now()).subtract(2, 'months');
    const age = calculateAge(today.toISOString());

    expect(age).toBe('2mths');
  });

  it('should return age with unit mth given age is 1 month', () => {
    const today = dayjs(Date.now()).subtract(30, 'days');
    const age = calculateAge(today.toISOString());

    expect(age).toBe('1mth');
  });

  it('should return age with unit days given age is 2 days', () => {
    const today = dayjs(Date.now()).subtract(2, 'days');
    const age = calculateAge(today.toISOString());

    expect(age).toBe('2days');
  });

  it('should return age with unit day given age is 1 day', () => {
    const today = dayjs(Date.now()).subtract(1, 'day');
    const age = calculateAge(today.toISOString());

    expect(age).toBe('1day');
  });
});
