import React from 'react';
import {renderWithProviders} from 'test-utils';
import MedicationAdministration from '.';

describe('MedicationAdministration', () => {
  it('renders Prescribe medication title', () => {
    const {getByText} = renderWithProviders(
      <MedicationAdministration encounterId={1} patientId={2} />,
    );

    expect(getByText('Medication administration')).toBeOnTheScreen();
  });
  it('renders medication suggestion fields', () => {
    const {getByText} = renderWithProviders(
      <MedicationAdministration encounterId={1} patientId={2} />,
    );

    const doseFieldLabel = getByText('Dose & Unit');
    const frequencyFieldLabel = getByText('Frequency');
    const furationFieldLabel = getByText('Duration');
    const directionsFieldLabel = getByText('Directions');

    expect(doseFieldLabel).toBeOnTheScreen();
    expect(frequencyFieldLabel).toBeOnTheScreen();
    expect(furationFieldLabel).toBeOnTheScreen();
    expect(directionsFieldLabel).toBeOnTheScreen();
  });
});
