import {EMPTY_STRING} from '@/utils/constants';

export function combineDiagnosisPreSaveStateToDraftString(
  mainSearchResult: 'Clinical diagnosis' | 'Differential diagnosis',
  note: string,
  diagnosisBodyPart: string,
): string {
  let result = EMPTY_STRING;

  if (
    mainSearchResult === 'Clinical diagnosis' ||
    mainSearchResult === 'Differential diagnosis'
  ) {
    result = `${diagnosisBodyPart}`;
    if (note !== EMPTY_STRING) {
      result += `, ${note}.`;
    } else {
      result += '.';
    }
  }

  return result;
}
