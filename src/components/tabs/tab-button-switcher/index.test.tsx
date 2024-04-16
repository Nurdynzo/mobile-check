import React from 'react';
import {renderWithProviders} from 'test-utils';
import AppTabButtonSwitcher from '.';
import {EMPTY_STRING} from '@/utils/constants';

describe('AppTabSwitcher', () => {
  const mockTabs = [{name: 'Tab 1'}, {name: 'Tab 2'}, {name: 'Tab 3'}];

  it('renders correct number of tabs', () => {
    const {getByText} = renderWithProviders(
      <AppTabButtonSwitcher tabs={mockTabs} selectedTab={EMPTY_STRING} />,
    );
    mockTabs.forEach(el => expect(getByText(el.name)).toBeOnTheScreen());
  });
});
