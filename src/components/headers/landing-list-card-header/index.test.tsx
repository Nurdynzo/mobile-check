import React from 'react';
import LandingListCardHeader from 'src/components/headers/landing-list-card-header/index';
import {renderWithProviders} from 'test-utils';

describe('LandingListCardHeader', () => {
  it('renders correctly with given props', () => {
    const {getByText} = renderWithProviders(
      <LandingListCardHeader
        hasInsurance={true}
        busyText="Dr.Frank is busy with patient"
      />,
    );

    expect(getByText('Dr.Frank is busy with patient')).toBeTruthy();
  });
});
