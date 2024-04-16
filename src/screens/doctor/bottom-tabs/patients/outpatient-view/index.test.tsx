import React from 'react';
import {renderWithProviders} from 'test-utils';
import OutpatientView from '.';

describe('OutpatientView', () => {
  it('should render consulting room button correctly', async () => {
    const {getByText} = renderWithProviders(<OutpatientView />);
    const button = getByText('Consulting room');
    expect(button).toBeOnTheScreen();
  });

  it('should render sortBy button correctly', async () => {
    const {getByText} = renderWithProviders(<OutpatientView />);

    const button = getByText('Sort by');
    expect(button).toBeOnTheScreen();
  });
});
