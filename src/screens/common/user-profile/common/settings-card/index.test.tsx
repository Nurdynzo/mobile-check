import {settingOptions} from '@/constants/profile';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import SettingsCard from '.';

describe('SettingsCard', () => {
  it('renders a list of toggle options', () => {
    const {getByText} = renderWithProviders(<SettingsCard />);

    settingOptions.forEach(option => {
      expect(getByText(option.title)).toBeOnTheScreen();
    });
  });
});
