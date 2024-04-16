import {GetAllVitalSignsResponse} from '@/state/services/vitalSignsApi';
import convertVitalSignsArrayToObject from '.';

describe('convertVitalSignsArrayToObject', () => {
  it('should correctly convert an array of vital signs responses to an object', () => {
    const mockVitalSignsResponses: GetAllVitalSignsResponse[] = [
      {
        id: 1,
        sign: 'Temperature',
        sites: [{id: 1, site: 'Oral', default: true}],
        ranges: [{id: 1, lower: 36.5, upper: 37.5, unit: 'C'}],
        leftRight: false,
        decimalPlaces: 1,
      },
      {
        id: 2,
        sign: 'Blood Pressure',
        sites: [{id: 2, site: 'Arm', default: true}],
        ranges: [{id: 2, lower: 90, upper: 120, unit: 'mmHg'}],
        leftRight: true,
        decimalPlaces: 0,
      },
    ];

    const expected = {
      1: {
        ranges: [{id: 1, lower: 36.5, upper: 37.5, unit: 'C'}],
        sites: [{id: 1, site: 'Oral', default: true}],
      },
      2: {
        ranges: [{id: 2, lower: 90, upper: 120, unit: 'mmHg'}],
        sites: [{id: 2, site: 'Arm', default: true}],
      },
    };

    const result = convertVitalSignsArrayToObject(mockVitalSignsResponses);

    expect(result).toEqual(expected);
  });

  it('should ignore items without an id', () => {
    const mockVitalSignsResponses: GetAllVitalSignsResponse[] = [
      {
        id: 1,
        sign: 'Temperature',
        sites: [{id: 1, site: 'Oral', default: true}],
        ranges: [{id: 1, lower: 36.5, upper: 37.5, unit: 'C'}],
        leftRight: false,
        decimalPlaces: 1,
      },
      {
        sign: 'Blood Pressure',
        sites: [{id: 2, site: 'Arm', default: true}],
        ranges: [{id: 2, lower: 90, upper: 120, unit: 'mmHg'}],
        leftRight: true,
        decimalPlaces: 0,
      },
    ];

    const expected = {
      1: {
        ranges: [{id: 1, lower: 36.5, upper: 37.5, unit: 'C'}],
        sites: [{id: 1, site: 'Oral', default: true}],
      },
    };

    const result = convertVitalSignsArrayToObject(mockVitalSignsResponses);

    expect(result).toEqual(expected);
  });
});
