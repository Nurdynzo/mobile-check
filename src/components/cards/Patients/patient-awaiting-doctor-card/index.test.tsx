import React from 'react';
import PatientAwaitingDoctorCard from '.';
import {renderWithProviders} from 'test-utils';
import {GetPatientLandingListOuptDto} from '@/state/services/patientApi';

describe('PatientAwaitingDoctorCard', () => {
  const mockData: GetPatientLandingListOuptDto = {
    name: 'John Doe',
    dateOfBirth: '1999-07-11',
    patientCode: '123',
    gender: 'Male',
    clinic: 'Clinic A',
    appointmentType: 'Referral',
    status: 'Awaiting doctor',
    attendingPhysician: 'Dr. Smith',
  };

  it('renders correctly', () => {
    const {getByText} = renderWithProviders(
      <PatientAwaitingDoctorCard data={mockData} />,
    );

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('123 | 24yrs | Male')).toBeTruthy();
    expect(getByText('Clinic A')).toBeTruthy();
    expect(getByText('Referral')).toBeTruthy();
    expect(getByText('Awaiting doctor')).toBeTruthy();
    expect(getByText('Dr. Smith')).toBeTruthy();
  });
});
