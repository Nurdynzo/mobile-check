import {fireEvent, screen} from '@testing-library/react-native';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import ProfileSettingsOption from '.';

describe('ProfileSettingOption', () => {
  it('renders with a mock title', () => {
    const title = 'Mock Title';
    const onPressOption = jest.fn();

    renderWithProviders(
      <ProfileSettingsOption title={title} onPress={onPressOption} />,
    );

    const optionText = screen.getByText(title);
    expect(optionText).toBeOnTheScreen();
  });

  it('responds to press events', () => {
    const title = 'Mock Title';
    const onPressOption = jest.fn();

    renderWithProviders(
      <ProfileSettingsOption title={title} onPress={onPressOption} />,
    );

    const optionText = screen.getByText(title);
    fireEvent.press(optionText);
    expect(onPressOption).toHaveBeenCalled();
  });
});
