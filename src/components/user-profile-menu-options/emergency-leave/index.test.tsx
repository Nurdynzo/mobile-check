import React from 'react';
import {renderWithProviders} from 'test-utils';
import EmergencyLeave from '.';

describe('EmergencyLeave', () => {
  it('displays the MenuOption with label "Emergency Leave"', () => {
    const {getByText} = renderWithProviders(<EmergencyLeave />);

    const menuOption = getByText('Emergency leave');
    expect(menuOption).toBeOnTheScreen();
  });
});
