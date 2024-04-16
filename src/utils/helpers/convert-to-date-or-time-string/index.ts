import dayjs from 'dayjs';

export const convertToDateOrTimeString = ({
  date,
  format,
}: {
  date: Date;
  format: string;
}) => {
  return dayjs(date).format(format);
};
