import {EMPTY_STRING} from '../..';

const formatStringArrayToSentence = (
  data: (string | null | undefined)[],
): string => {
  return `${data
    .map(el => el ?? EMPTY_STRING)
    .filter(part => part.trim() !== EMPTY_STRING)
    .join(', ')}`
    .trim()
    .replace(/\s+/g, ' ')
    .concat('.');
};

export default formatStringArrayToSentence;
