import {fireEvent} from '@testing-library/react-native';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import DoctorAndNurseSearchBarView from '.';

describe('DoctorNurseSearchBarView', () => {
  it('should render search button input correctly', async () => {
    const {getByText} = renderWithProviders(<DoctorAndNurseSearchBarView />);

    const buttonInput = getByText('Find patient');
    expect(buttonInput).toBeOnTheScreen();
  });
  it('should render search text input correctly when button input is pressed', async () => {
    const {getByPlaceholderText, getByText} = renderWithProviders(
      <DoctorAndNurseSearchBarView />,
    );
    const buttonInput = getByText('Find patient');
    fireEvent.press(buttonInput);
    const input = getByPlaceholderText('Find patient');

    expect(input).toBeOnTheScreen();
  });
});
