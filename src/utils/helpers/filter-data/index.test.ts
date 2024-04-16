import {filterData} from '.';

describe('filterData', () => {
  it('should return items that match the provided text in the specified field', () => {
    const data = [
      {name: 'John', age: 30},
      {name: 'Jane', age: 25},
      {name: 'Doe', age: 35},
    ];

    const result = filterData('John', data, 'name');

    expect(result).toEqual([{name: 'John', age: 30}]);
  });
});
