import {waitFor} from '@testing-library/react-native';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import InpatientView from '.';

describe('InpatientView', () => {
  it('should render ward button correctly', async () => {
    const {getByText} = renderWithProviders(<InpatientView />);
    await waitFor(() => {
      const placeholderText = getByText('Ward A');
      expect(placeholderText).toBeOnTheScreen();
    });
  });
  it('should render sort button correctly', async () => {
    const {getByText} = renderWithProviders(<InpatientView />);

    const placeholderText = getByText('Sort by');
    expect(placeholderText).toBeOnTheScreen();
  });
});
