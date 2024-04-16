import {PagedResultDtoOfGetInpatientLandingListResponse} from '@/state/services/patientApi';
import getInpatientLandingList from '.';
import {EMPTY_STRING} from '../..';

describe('getInPatientLandingList', () => {
  it('should return passed inpatients given no selected patient and default sort value', () => {
    const result = getInpatientLandingList(
      getDoctorInPatientResult.items ?? [],
      EMPTY_STRING,
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0].patientId).toBe(2758);
    expect(result?.[1].patientId).toBe(2759);
    expect(result?.[2].patientId).toBe(2760);
  });

  it('should return an inpatient given selected patient is not found in the inpatients list and sort value is default', () => {
    const result = getInpatientLandingList(
      getDoctorInPatientResult.items ?? [],
      EMPTY_STRING,
      {id: 2760},
    );

    expect(result?.length).toBe(1);
  });

  it('should return an inpatient given selected patient code exist and sort value is default', () => {
    const result = getInpatientLandingList(
      getDoctorInPatientResult.items ?? [],
      EMPTY_STRING,
      {id: 2758},
    );

    expect(result?.length).toBe(1);
    expect(result?.[0]?.patientId).toBe(2758);
  });

  it('should return inpatients sorted by fullName in ascending order', () => {
    const result = getInpatientLandingList(
      getDoctorInPatientResult.items ?? [],
      'fullName',
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0]?.fullName).toBe('Danilo Zhe');
    expect(result?.[1]?.fullName).toBe('Fina Miles');
    expect(result?.[2]?.fullName).toBe('Jon Snows');
  });

  it('should return inpatients sorted by fullName in descending order', () => {
    const result = getInpatientLandingList(
      getDoctorInPatientResult.items ?? [],
      'fullName desc',
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0]?.fullName).toBe('Jon Snows');
    expect(result?.[1]?.fullName).toBe('Fina Miles');
    expect(result?.[2]?.fullName).toBe('Danilo Zhe');
  });

  it('should return inpatients sorted by age in ascending order', () => {
    const result = getInpatientLandingList(
      getDoctorInPatientResult.items ?? [],
      'age',
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0]?.fullName).toBe('Jon Snows');
    expect(result?.[1]?.fullName).toBe('Danilo Zhe');
    expect(result?.[2]?.fullName).toBe('Fina Miles');
  });

  it('should return inpatients sorted by age in descending order', () => {
    const result = getInpatientLandingList(
      getDoctorInPatientResult.items ?? [],
      'age desc',
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0]?.fullName).toBe('Fina Miles');
    expect(result?.[1]?.fullName).toBe('Danilo Zhe');
    expect(result?.[2]?.fullName).toBe('Jon Snows');
  });

  it('should return inpatients sorted by start time/date in ascending order', () => {
    const result = getInpatientLandingList(
      getDoctorInPatientResult.items ?? [],
      'startTime',
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0]?.fullName).toBe('Fina Miles');
    expect(result?.[1]?.fullName).toBe('Jon Snows');
    expect(result?.[2]?.fullName).toBe('Danilo Zhe');
  });

  it('should return inpatients sorted by start time/date in descending order', () => {
    const result = getInpatientLandingList(
      getDoctorInPatientResult.items ?? [],
      'startTime desc',
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0]?.fullName).toBe('Danilo Zhe');
    expect(result?.[1]?.fullName).toBe('Jon Snows');
    expect(result?.[2]?.fullName).toBe('Fina Miles');
  });
});

const getDoctorInPatientResult = {
  totalCount: 3,
  items: [
    {
      lastSeenAt: '2024-01-24T10:52:00',
      status: 'Admission',
      patientId: 2758,
      fullName: 'Danilo Zhe',
      birthDate: '2020-01-12T00:00:00',
      gender: 'Male',
      imageUrl:
        'https://plateaumedstoragev1.blob.core.windows.net/publicplateaumedehr241/83281f43-e18b-4ae6-82dd-84f771d029e6',
      attendingPhysician: undefined,
      bedNumber: '555',
      encounterId: 123,
    },
    {
      lastSeenAt: '2024-01-24T09:52:00',
      status: 'Transfer in pending',
      patientId: 2759,
      fullName: 'Jon Snows',
      birthDate: '2021-01-12T00:00:00',
      gender: 'Female',
      imageUrl:
        'https://plateaumedstoragev1.blob.core.windows.net/publicplateaumedehr241/83281f43-e18b-4ae6-82dd-84f771d029e6',
      attendingPhysician: undefined,
      bedNumber: '333',
      encounterId: 124,
    },
    {
      lastSeenAt: '2024-01-24T04:52:00',
      status: 'Transferred',
      patientId: 2760,
      fullName: 'Fina Miles',
      birthDate: '2019-01-12T00:00:00',
      gender: 'Others',
      imageUrl:
        'https://plateaumedstoragev1.blob.core.windows.net/publicplateaumedehr241/83281f43-e18b-4ae6-82dd-84f771d029e6',
      attendingPhysician: undefined,
      bedNumber: '222',
      encounterId: 125,
    },
  ],
} as PagedResultDtoOfGetInpatientLandingListResponse;
