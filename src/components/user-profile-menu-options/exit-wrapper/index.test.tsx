import {ColorKeys} from '@/resources/colors';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import ExitWrapper from '.';

describe('ExitWrapper', () => {
  it('renders correctly with given props', () => {
    const mockCloseSheet = jest.fn();
    const mockOnProceed = jest.fn();
    const title = 'Are you sure?';
    const brief = 'You will be signed out.';
    const question = 'Do you want to proceed?';
    const titleColor = 'primary400' as ColorKeys;

    const {getByText} = renderWithProviders(
      <ExitWrapper
        closeSheet={mockCloseSheet}
        onProceed={mockOnProceed}
        title={title}
        titleColor={titleColor}
        brief={brief}
        question={question}
      />,
    );

    expect(getByText(title)).toBeOnTheScreen();
    expect(getByText(brief)).toBeOnTheScreen();
    expect(getByText(question)).toBeOnTheScreen();
  });
});
