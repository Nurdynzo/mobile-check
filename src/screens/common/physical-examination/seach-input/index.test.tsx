import {waitFor} from '@testing-library/react-native';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import PhysicalExaminationSearchInput from '.';

describe('PhysicalExaminationSearchInput', () => {
  it('should render correctly given value is Specific Examination', async () => {
    const {getByText} = renderWithProviders(
      <PhysicalExaminationSearchInput
        value="Specific Examination"
        onChangeValue={() => null}
      />,
    );

    const placeholderText = getByText('Specific Examination');
    expect(placeholderText).toBeOnTheScreen();
  });

  it('should set value to result at index 0 given successful api call', async () => {
    const mockOnChangeValue = jest.fn();
    renderWithProviders(
      <PhysicalExaminationSearchInput
        value={undefined}
        onChangeValue={mockOnChangeValue}
      />,
    );

    await waitFor(() => {
      expect(mockOnChangeValue).toHaveBeenCalledWith({
        id: 1,
        value: 'Mock Physical Examination Type 1',
        data: 'Mock Type 1',
      });
    });
  });
});
