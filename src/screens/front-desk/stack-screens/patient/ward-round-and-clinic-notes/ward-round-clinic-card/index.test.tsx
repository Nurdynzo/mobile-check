import React from 'react';
import WardroundClinicNoteItemCard from '.';
import {renderWithProviders} from 'test-utils';
import {convertToReadableDate} from '@/utils/helpers/convertDateTime';

describe('WardroundClinicNoteItemCard', () => {
  const defaultProps = {
    clinic: 'Test Clinic',
    date: new Date(Date.now()),
    patientFullName: 'John Doe',
  };

  it('renders without crashing', () => {
    const {getByText} = renderWithProviders(
      <WardroundClinicNoteItemCard {...defaultProps} />,
    );
    expect(getByText(defaultProps.clinic)).toBeTruthy();
  });

  it('displays the patient full name correctly', () => {
    const {getByText} = renderWithProviders(
      <WardroundClinicNoteItemCard {...defaultProps} />,
    );

    const formattedDate = convertToReadableDate(defaultProps.date);
    expect(
      getByText(
        `${defaultProps.patientFullName} visited ${defaultProps.clinic} on ${formattedDate}`,
      ),
    ).toBeTruthy();
  });
});
