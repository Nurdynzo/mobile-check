import React from 'react';
import {renderWithProviders} from '../../../../test-utils';
import EditProfile from './index';

describe('EditProfile', () => {
  it('renders correctly', () => {
    const {getByText, getByPlaceholderText} = renderWithProviders(
      <EditProfile />,
    );

    expect(getByText('Edit personal information')).toBeOnTheScreen();
    expect(getByPlaceholderText('Enter first name')).toBeOnTheScreen();
    expect(getByPlaceholderText('Enter middle name')).toBeOnTheScreen();
    expect(getByPlaceholderText('Enter last name')).toBeOnTheScreen();
    expect(getByPlaceholderText('Enter phone number')).toBeOnTheScreen();
    expect(
      getByPlaceholderText('Enter primary email address'),
    ).toBeOnTheScreen();
    expect(
      getByPlaceholderText('Enter secondary email address'),
    ).toBeOnTheScreen();

    expect(getByText('Update Profile')).toBeOnTheScreen();
  });
});
