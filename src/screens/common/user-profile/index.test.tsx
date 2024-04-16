import React from 'react';
import UserProfile from '.';
import {renderWithProviders} from '../../../../test-utils';

describe('user profile screen', () => {
  it('displays profile in app header', () => {
    const {getByText} = renderWithProviders(<UserProfile />);
    expect(getByText('Profile')).toBeOnTheScreen();
  });
  it('renders the PersonalInformation tab by default', () => {
    const {getByText} = renderWithProviders(<UserProfile />);
    expect(getByText('Edit personal information')).toBeOnTheScreen();
  });
});
