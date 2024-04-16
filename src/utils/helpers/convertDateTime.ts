import dayjs, {ConfigType} from 'dayjs';
import 'dayjs/locale/en';
import weekday from 'dayjs/plugin/weekday';
import advancedFormat from 'dayjs/plugin/advancedFormat';

const convertToReadableDate = (
  date: ConfigType,
  template: string = 'DD MMMM YYYY',
) => dayjs(date).format(template);

const convertToReadableTime = (date: ConfigType) =>
  dayjs(date).format('h:mm A');

export function getTodaysDate() {
  return new Date();
}

function checkDay(date: ConfigType) {
  const today = dayjs();
  const yesterday = dayjs().subtract(1, 'day');

  if (dayjs(date).isSame(today, 'day')) {
    return 'Today';
  } else if (dayjs(date).isSame(yesterday, 'day')) {
    return 'Yesterday';
  } else {
    return `${dayjs(date).format('D MMM YY')}`;
  }
}

const getFormattedDate = (): string => {
  dayjs.extend(weekday);
  dayjs.extend(advancedFormat);

  return dayjs().locale('en').format('dddd, DD MMMM');
};

export {
  convertToReadableDate,
  convertToReadableTime,
  checkDay,
  getFormattedDate,
};
