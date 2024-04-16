import {renderHook} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import useMultipleRangeUnitSelector from '.';
import {RangeInputFormResponseValues} from '../../ranges-input-form/type';

describe('useMultipleRangeUnitSelector', () => {
  it('initializes and updates states correctly', () => {
    const mockRanges: RangeInputFormResponseValues[] = [
      {unit: 'mg/L', minRangeValue: 0, maxRangeValue: 100},
      {unit: 'g/L', minRangeValue: 0, maxRangeValue: 1},
    ];

    const {result} = renderHook(() =>
      useMultipleRangeUnitSelector({
        ranges: mockRanges,
        getData: jest.fn(),
      }),
    );

    expect(result.current.selectedUnit).toBe('mg/L');
    expect(result.current.currentRange).toEqual(mockRanges[0]);
    expect(result.current.values).toEqual({maxRangeValue: 0, minRangeValue: 0});

    act(() => {
      result.current.handleUnitChange({value: 'g/L', id: 2, data: ''});
    });

    expect(result.current.selectedUnit).toBe('g/L');
    expect(result.current.currentRange).toEqual(mockRanges[1]);

    const newValues: RangeInputFormResponseValues = {
      maxRangeValue: 0.5,
      minRangeValue: 0.1,
      leadingRangeValue: 0.3,
    };
    act(() => {
      result.current.handleGetValues(newValues);
    });

    expect(result.current.values).toEqual(newValues);
  });

  it('calls getData only when leadingRangeValue changes', () => {
    const mockGetData = jest.fn();
    const initialProps = {
      ranges: [],
      getData: mockGetData,
    };

    const {result} = renderHook(() =>
      useMultipleRangeUnitSelector(initialProps),
    );

    act(() => {
      result.current.handleGetValues({
        leadingRangeValue: 0.1,
        minRangeValue: 0.2,
        maxRangeValue: 0.5,
      });
    });
    expect(mockGetData).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.handleGetValues({
        leadingRangeValue: 0.2,
        minRangeValue: 0.3,
        maxRangeValue: 0.6,
      });
    });
    expect(mockGetData).toHaveBeenCalledTimes(2);
  });
});
