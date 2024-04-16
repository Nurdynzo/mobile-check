import React from 'react';
import {renderWithProviders} from 'test-utils';
import PersonalInformationCard from '.';

describe('PersonalInformationCard', () => {
  it('renders details based on data prop', () => {
    const data = [
      {title: 'Email', value: 'test@example.com'},
      {title: 'Phone', value: '123-456-7890'},
    ];

    const {getByText} = renderWithProviders(
      <PersonalInformationCard data={data} />,
    );

    data.forEach(item => {
      expect(getByText(item.title)).toBeOnTheScreen();
      expect(getByText(item.value)).toBeOnTheScreen();
    });
  });
});
