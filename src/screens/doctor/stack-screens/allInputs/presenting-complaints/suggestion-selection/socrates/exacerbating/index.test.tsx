import React from 'react';
import {renderWithProviders} from 'test-utils';
import ExacerbatingView from '.';

describe('ExacerbatingView', () => {
  it('renders exacerbating view correctly', async () => {
    const {getByText} = renderWithProviders(<ExacerbatingView />);

    const titleElement = getByText('Does anything make it better or worse?');
    expect(titleElement).toBeOnTheScreen();

    const exacerbatingTab = getByText('Exacerbating');
    const relievingTab = getByText('Relieving');

    expect(exacerbatingTab).toBeOnTheScreen();
    expect(relievingTab).toBeOnTheScreen();
  });
});
