import React from 'react';
import {renderWithProviders} from 'test-utils';
import VitalSignsSearchBar from '.';

describe('VitalSignsSearchBar', () => {
  it('renders VitalSignsSearchBar correctly', async () => {
    const {getByText} = renderWithProviders(
      <VitalSignsSearchBar encounterId={12} patientId={123} />,
    );

    const searchText = getByText('Search Vital signs');

    expect(searchText).toBeOnTheScreen();
  });
});
