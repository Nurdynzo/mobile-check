import React from 'react';
import {renderWithProviders} from 'test-utils';
import SocratesQuestionText from '.';

test('renders correct text', () => {
  const {getByText} = renderWithProviders(
    <SocratesQuestionText text="Test text" />,
  );
  const linkElement = getByText(/Test text/i);
  expect(linkElement).toBeOnTheScreen();
});
