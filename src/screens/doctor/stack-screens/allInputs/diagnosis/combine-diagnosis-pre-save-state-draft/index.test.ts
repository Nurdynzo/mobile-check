import {combineDiagnosisPreSaveStateToDraftString} from './index';
import {EMPTY_STRING} from '@/utils/constants';

describe('combineDiagnosisPreSaveStateToDraftString', () => {
  it('should return only the diagnosis body part if no note is provided and the main search result is "Clinical diagnosis"', () => {
    const result = combineDiagnosisPreSaveStateToDraftString(
      'Clinical diagnosis',
      EMPTY_STRING,
      'Head',
    );
    expect(result).toBe('Head.');
  });

  it('should return only the diagnosis body part if no note is provided and the main search result is "Differential diagnosis"', () => {
    const result = combineDiagnosisPreSaveStateToDraftString(
      'Differential diagnosis',
      EMPTY_STRING,
      'Abdomen',
    );
    expect(result).toBe('Abdomen.');
  });

  it('should return the diagnosis body part and note if a note is provided and the main search result is "Differential diagnosis"', () => {
    const result = combineDiagnosisPreSaveStateToDraftString(
      'Differential diagnosis',
      'Possible appendicitis',
      'Abdomen',
    );
    expect(result).toBe('Abdomen, Possible appendicitis.');
  });
});
