import React from 'react';
import {renderWithProviders} from 'test-utils';
import ChangePasswordOption from '.';

describe('ChangePasswordOption', () => {
  it('renders the option to change password', () => {
    const {getByText} = renderWithProviders(<ChangePasswordOption />);
    const changePasswordOption = getByText('Change Password');
    expect(changePasswordOption).toBeOnTheScreen();
  });
});
