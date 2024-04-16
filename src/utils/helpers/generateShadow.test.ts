import {generateShadow} from './generateShadow';

describe('generateShadow', () => {
  const depth = 5;
  const color = '#123456';
  it('should return correct shadow properties for given depth and color', () => {
    const result = generateShadow({depth, color});

    expect(result).toHaveProperty('shadowColor', color);
    expect(result).toHaveProperty('shadowOffset');
    expect(result.shadowOffset).toHaveProperty('width', 0);
    expect(result.shadowOffset).toHaveProperty('height');
    expect(result).toHaveProperty('shadowOpacity');
    expect(result).toHaveProperty('shadowRadius');
    expect(result).toHaveProperty('elevation', depth);
  });
});
