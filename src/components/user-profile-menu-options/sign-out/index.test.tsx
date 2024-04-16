import React from 'react';
import {renderWithProviders} from 'test-utils';
import SignOut from '.';

describe('SignOut', () => {
  it('displays the MenuOption with label "Sign out"', () => {
    const {getByText} = renderWithProviders(<SignOut />);

    const menuOption = getByText('Sign out');
    expect(menuOption).toBeOnTheScreen();
  });
});
