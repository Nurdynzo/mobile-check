import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from 'test-utils';
import SocratesSuggestionToggleButton from '.';
import * as Contants from '@/constants/index';

describe('SocratesSuggestionToggleButton', () => {
  it('renders Present and Absent TabButton components correctly', () => {
    const {getByText} = renderWithProviders(
      <SocratesSuggestionToggleButton
        activeItem={{value: 'Absent', label: 'Absent'}}
        items={Contants.presentAbsentSuggestionToggleOptions}
        setActiveItem={() => {}}
      />,
    );

    const presentButton = getByText('Present');
    const absentButton = getByText('Absent');

    expect(presentButton).toBeOnTheScreen();
    expect(absentButton).toBeOnTheScreen();
  });

  it('calls setActiveItem when a TabButton is clicked', () => {
    const setActiveItem = jest.fn();
    const {getByText} = renderWithProviders(
      <SocratesSuggestionToggleButton
        activeItem={{value: 'Present', label: 'Present'}}
        items={Contants.presentAbsentSuggestionToggleOptions}
        setActiveItem={setActiveItem}
      />,
    );
    const button = getByText('Absent');
    fireEvent.press(button);
    expect(setActiveItem).toHaveBeenCalledWith({
      label: 'Absent',
      value: 'Absent',
    });
  });
});
