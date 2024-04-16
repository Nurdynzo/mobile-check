import React from 'react';
import {renderWithProviders} from 'test-utils';
import CheckGCS from '.';

describe('CheckGcs', () => {
  it('renders CheckGcs button correctly', async () => {
    const {getByText} = renderWithProviders(
      <CheckGCS score={6} onChangeScore={() => null} />,
    );

    const gcsButton = getByText('Check GCS');

    expect(gcsButton).toBeOnTheScreen();
  });
});
