import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useRecords} from '.';

// TODO(Philip): Beef up the tests here by ensuring maxmimum test coverage
describe('useRecords', () => {
  it('given handleDateRangeChanged is triggered, dateRange should be properly updated', async () => {
    const today = new Date(Date.now());

    const {result} = renderHookWithProviders(() =>
      useRecords({attendingClinic: 'All Clinics'}),
    );

    await act(() => {
      result.current.handleDateRangeChanged({from: today, to: today});
    });

    expect(result.current.dateRange.from).toBe(today);
    expect(result.current.dateRange.to).toBe(today);
  });

  it('given handleDateRangeChanged is triggered, calendar range input should be dimissed', async () => {
    const today = new Date(Date.now());

    const {result} = renderHookWithProviders(() =>
      useRecords({attendingClinic: 'All Clinics'}),
    );

    await act(() => {
      result.current.setShowCalenderRange(true);
      result.current.handleDateRangeChanged({from: today, to: today});
    });

    expect(result.current.showCalenderRange).toBe(false);
  });
});
