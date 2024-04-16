import stringToTitleCase from '.';

describe('stringToTileCase', () => {
  it('should convert lower case string to title case', () => {
    const result = stringToTitleCase('small');

    expect(result).toBe('Small');
  });

  it('should convert upper case string to title case', () => {
    const result = stringToTitleCase('SMALL');

    expect(result).toBe('Small');
  });

  it('should return undefined given undefined was passed as parameter', () => {
    const result = stringToTitleCase(undefined);

    expect(result).toBe(undefined);
  });
});
