import PrescribeMedication from '@/screens/doctor/stack-screens/allInputs/prescription/prescribe-medication';
import React from 'react';
import {renderWithProviders} from 'test-utils';

describe('PrescribeMedication', () => {
  it('renders Prescribe medication title', () => {
    const {getByText} = renderWithProviders(
      <PrescribeMedication encounterId={1} patientId={2} />,
    );

    expect(getByText('Prescribe medication')).toBeOnTheScreen();
  });
  it('renders medication suggestion fields', () => {
    const {getByText} = renderWithProviders(
      <PrescribeMedication encounterId={1} patientId={2} />,
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
