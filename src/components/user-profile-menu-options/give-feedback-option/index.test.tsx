import React from 'react';
import {renderWithProviders} from 'test-utils';
import GiveFeedbackOption from '.';

describe('GiveFeedbackOption', () => {
  it('displays the MenuOption with label "Give Feedback"', () => {
    const {getByText} = renderWithProviders(<GiveFeedbackOption />);

    const menuOption = getByText('Give feedback');
    expect(menuOption).toBeOnTheScreen();
  });
});
