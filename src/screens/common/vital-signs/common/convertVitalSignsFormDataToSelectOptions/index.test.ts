import convertVitalSignsFormDataToSelectOptions from './index';
import {VitalSignFormSchema} from '../../schema';
import {EMPTY_STRING} from '@/utils/constants';

describe('convertVitalSignsFormDataToSelectOptions', () => {
  it('should filter and convert vital signs form data to select options based on query', () => {
    const mockVitalSignsFormData: VitalSignFormSchema[] = [
      {vitalSignId: 1, vitalSignName: 'Heart Rate'},
      {vitalSignId: 2, vitalSignName: 'Blood Pressure'},
      {vitalSignId: 3, vitalSignName: 'Temperature'},
    ];

    const query = 'blood';
    const expected = [
      {
        item: {
          id: 2,
          value: 'Blood Pressure',
          data: {vitalSignId: 2, vitalSignName: 'Blood Pressure'},
        },
      },
    ];

    const result = convertVitalSignsFormDataToSelectOptions({
      vitalSignsFormData: mockVitalSignsFormData,
      query,
    });

    expect(result).toEqual(expected);
  });

  it('should return all options when query is empty', () => {
    const mockVitalSignsFormData: VitalSignFormSchema[] = [
      {vitalSignId: 1, vitalSignName: 'Heart Rate'},
      {vitalSignId: 2, vitalSignName: 'Blood Pressure'},
    ];

    const expected = [
      {
        item: {
          id: 1,
          value: 'Heart Rate',
          data: {vitalSignId: 1, vitalSignName: 'Heart Rate'},
        },
      },
      {
        item: {
          id: 2,
          value: 'Blood Pressure',
          data: {vitalSignId: 2, vitalSignName: 'Blood Pressure'},
        },
      },
    ];

    const result = convertVitalSignsFormDataToSelectOptions({
      vitalSignsFormData: mockVitalSignsFormData,
      query: EMPTY_STRING,
    });

    expect(result).toEqual(expected);
  });

  it('should handle case sensitivity and trim spaces in query', () => {
    const mockVitalSignsFormData: VitalSignFormSchema[] = [
      {vitalSignId: 1, vitalSignName: ' Heart Rate '},
      {vitalSignId: 2, vitalSignName: 'blood Pressure'},
    ];

    const query = ' Blood ';
    const expected = [
      {
        item: {
          id: 2,
          value: 'blood Pressure',
          data: {vitalSignId: 2, vitalSignName: 'blood Pressure'},
        },
      },
    ];

    const result = convertVitalSignsFormDataToSelectOptions({
      vitalSignsFormData: mockVitalSignsFormData,
      query,
    });

    expect(result).toEqual(expected);
  });
});
