import React from 'react';
import {renderWithProviders} from 'test-utils';
import OnsetView from '.';

describe('OnsetView', () => {
  it('renders onset view correctly', () => {
    const {getByText, getByPlaceholderText} = renderWithProviders(
      <OnsetView />,
    );

    const titleElement = getByText('When did it start?');
    const labelElement = getByText('When/How long ago?');
    const intervalUnitPlaceholderElement = getByText('Select interval');
    const interval = getByPlaceholderText('0');
    const cyclicalityInputLabelElement = getByText('Cyclicality');
    const cyclicalityInputPlaceholderElement = getByText('Select cyclicality');

    expect(titleElement).toBeOnTheScreen();
    expect(labelElement).toBeOnTheScreen();
    expect(intervalUnitPlaceholderElement).toBeOnTheScreen();
    expect(interval).toBeOnTheScreen();
    expect(cyclicalityInputLabelElement).toBeOnTheScreen();
    expect(cyclicalityInputPlaceholderElement).toBeOnTheScreen();
  });
});
