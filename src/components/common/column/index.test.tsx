import {renderWithProviders} from 'test-utils';
import Column from '.';
import React from 'react';
import {Text} from 'react-native';

describe('Column component', () => {
  it('renders properly', () => {
    const text = 'column';

    const {getByText} = renderWithProviders(
      <Column>
        <Text>{text}</Text>
      </Column>,
    );
    expect(getByText(text)).toBeOnTheScreen();
  });
});
