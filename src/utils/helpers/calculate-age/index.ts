import dayjs from 'dayjs';
import {NOT_AVAILABLE} from '../..';

function calculateAge(birthdate?: string | null): string | null {
  if (birthdate === undefined || birthdate === null) {
    return null;
  }
  if (birthdate.includes(' ')) {
    const dateItSelf = birthdate.split(' ')[0];
    return calculateAgeFromJustDate(dateItSelf);
  } else {
    const birthdateDate = new Date(birthdate);
    return getAgeInDaysMonthsYears(birthdateDate);
  }
}

export default calculateAge;

function calculateAgeFromJustDate(birthdate: string): string {
  const dateParts = birthdate.split('/');

  if (dateParts.length !== 3) {
    return NOT_AVAILABLE;
  }

  const month = parseInt(dateParts[0], 10);
  const day = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  const birthdateDate = new Date(year, month, day);

  if (isNaN(birthdateDate.getTime())) {
    return NOT_AVAILABLE;
  }

  return getAgeInDaysMonthsYears(birthdateDate);
}

const getAgeInDaysMonthsYears = (date: Date) => {
  if (date.toString() === 'Invalid Date') {
    return NOT_AVAILABLE;
  }

  const date2 = Date.now();
  const difference = dayjs(date2).diff(date, 'days');

  if (Math.floor(difference / 365) >= 2) {
    return `${Math.floor(difference / 365)}yrs`;
  } else if (Math.floor(difference / 365) >= 1) {
    return '1yr';
  } else if (Math.floor(difference / 30) >= 2) {
    return `${Math.floor(difference / 30)}mths`;
  } else if (Math.floor(difference / 30) >= 1) {
    return '1mth';
  } else if (Math.floor(difference) >= 2) {
    return `${Math.floor(difference)}days`;
  } else {
    return '1day';
  }
};
