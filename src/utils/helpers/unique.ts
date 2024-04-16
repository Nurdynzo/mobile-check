import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';

export const removeDuplicates = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  array: any[],
  key: string,
) => {
  const uniqueKeys = Array.from(new Set(array.map(item => item[key])));
  const uniqueItems = uniqueKeys.map(uniqueKey =>
    array.find(item => item[key] === uniqueKey),
  );
  return uniqueItems;
};

/**  This function filters out null values from a specified field in the extractIds array and returns an array of the non-null values.   */
export const extractUniqueFieldForSnowMeds = (
  extractIds: Array<SnowstormSimpleResponseDto>,
  field: keyof SnowstormSimpleResponseDto,
) => {
  return extractIds
    .filter(item => item[field] !== null)
    .map(item => item[field]);
};
