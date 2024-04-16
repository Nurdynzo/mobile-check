import React from 'react';
import {renderWithProviders} from 'test-utils';
import TimeCourseView from '.';

describe('TimeCourseView', () => {
  it('renders timeCourse view correctly', () => {
    const {getByText, getByPlaceholderText} = renderWithProviders(
      <TimeCourseView />,
    );

    const titleElement = getByText('Does it follow any time pattern?');
    const labelElement = getByText('How long does it last?');
    const intervalUnitPlaceholderElement = getByText('Select interval');
    const intervalElement = getByPlaceholderText('0');
    const symptomInputLabelElement = getByText('Symptoms usually felt');
    const symptomInputPlaceholderElement = getByText('Select time');

    expect(titleElement).toBeOnTheScreen();
    expect(labelElement).toBeOnTheScreen();
    expect(intervalUnitPlaceholderElement).toBeOnTheScreen();
    expect(intervalElement).toBeOnTheScreen();
    expect(symptomInputLabelElement).toBeOnTheScreen();
    expect(symptomInputPlaceholderElement).toBeOnTheScreen();
  });
});
