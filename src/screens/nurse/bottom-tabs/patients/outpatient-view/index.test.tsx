import React from 'react';
import {renderWithProviders} from 'test-utils';
import OutpatientView from '.';

describe('OutpatientView', () => {
  it('should render Awaiting vitals tab button correctly', async () => {
    const {getByText} = renderWithProviders(<OutpatientView />);
    const button = getByText('Awaiting vitals');
    expect(button).toBeOnTheScreen();
  });
  it('should render Awaiting doctor tab button correctly', async () => {
    const {getByText} = renderWithProviders(<OutpatientView />);
    const button = getByText('Awaiting doctor');
    expect(button).toBeOnTheScreen();
  });
});
