import React from 'react';
import {renderWithProviders} from 'test-utils';
import {GetPatientLandingListOuptDto} from '@/state/services/patientApi';
import PatientAwaitingVitalsCard from '.';

describe('PatientAwaitingVitalsCard', () => {
  const mockData: GetPatientLandingListOuptDto = {
    name: 'John Doe',
    dateOfBirth: '1999-07-11',
    patientCode: '123',
    gender: 'Male',
    clinic: 'Clinic A',
    appointmentType: 'Consultation',
    status: 'Awaiting vitals',
    attendingPhysician: 'Dr. Smith',
  };

  it('renders correctly', () => {
    const {getByText} = renderWithProviders(
      <PatientAwaitingVitalsCard data={mockData} isBusyWithPhysician />,
    );

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('123 | 24yrs | Male')).toBeTruthy();
    expect(getByText('Clinic A')).toBeTruthy();
    expect(getByText('Consultation')).toBeTruthy();
    expect(getByText('Dr. Smith is busy with patient')).toBeTruthy();
  });
});
