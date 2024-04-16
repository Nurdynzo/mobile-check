import React from 'react';
import {renderWithProviders} from 'test-utils';
import {screen} from '@testing-library/react-native';
import CardTitle from '.';

describe('CardTitle component', () => {
  it('renders correctly with a title', () => {
    const title = 'Test Title 1';
    renderWithProviders(<CardTitle title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeOnTheScreen();
  });

  it('has the exact same text as the title supplied', () => {
    const title = 'Test Title 2';
    renderWithProviders(<CardTitle title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toHaveTextContent(title);
    expect(titleElement).toBeOnTheScreen();
  });
});
