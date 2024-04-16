import React from 'react';
import {renderWithProviders} from 'test-utils';
import RadiationView from '.';

describe('RadiationView', () => {
  it('renders radiation view correctly', async () => {
    const {getByText} = renderWithProviders(<RadiationView />);
    const titleElement = getByText('Does it radiate/move anywhere?');

    expect(titleElement).toBeOnTheScreen();

    const presentTab = getByText('Present');
    const absentTab = getByText('Absent');

    expect(presentTab).toBeOnTheScreen();
    expect(absentTab).toBeOnTheScreen();
  });
});
