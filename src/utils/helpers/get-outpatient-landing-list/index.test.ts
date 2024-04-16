import {PagedResultDtoOfGetPatientLandingListOuptDto} from '@/state/services/patientApi';
import getOutpatientLandingList from '.';
import {EMPTY_STRING} from '../..';

describe('get-outpatient-landing-list', () => {
  it('should return passed outpatients given no selected patient and default sort value', () => {
    const result = getOutpatientLandingList(
      getDoctorOutPatientResult.items ?? [],
      EMPTY_STRING,
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0].patientId).toBe(2758);
    expect(result?.[1].patientId).toBe(2759);
    expect(result?.[2].patientId).toBe(2760);
  });

  it('should return an outpatient given selected patient is not found in the outpatients list and sort value is default', () => {
    const result = getOutpatientLandingList(
      getDoctorOutPatientResult.items ?? [],
      EMPTY_STRING,
      {patientCode: 'M-0000059-T'},
    );

    expect(result?.length).toBe(1);
  });

  it('should return an outpatient given selected patient code exist and sort value is default', () => {
    const result = getOutpatientLandingList(
      getDoctorOutPatientResult.items ?? [],
      EMPTY_STRING,
      {patientCode: 'M-0000057-T'},
    );

    expect(result?.length).toBe(1);
    expect(result?.[0]?.patientCode).toBe('M-0000057-T');
  });

  it('should return outpatients sorted by fullName in ascending order', () => {
    const result = getOutpatientLandingList(
      getDoctorOutPatientResult.items ?? [],
      'fullName',
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0]?.name).toBe('Danilo Zhe');
    expect(result?.[1]?.name).toBe('Fina Miles');
    expect(result?.[2]?.name).toBe('Jon Snows');
  });

  it('should return outpatients sorted by fullName in descending order', () => {
    const result = getOutpatientLandingList(
      getDoctorOutPatientResult.items ?? [],
      'fullName desc',
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0]?.name).toBe('Jon Snows');
    expect(result?.[1]?.name).toBe('Fina Miles');
    expect(result?.[2]?.name).toBe('Danilo Zhe');
  });

  it('should return outpatients sorted by age in ascending order', () => {
    const result = getOutpatientLandingList(
      getDoctorOutPatientResult.items ?? [],
      'age',
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0]?.name).toBe('Jon Snows');
    expect(result?.[1]?.name).toBe('Danilo Zhe');
    expect(result?.[2]?.name).toBe('Fina Miles');
  });

  it('should return outpatients sorted by age in descending order', () => {
    const result = getOutpatientLandingList(
      getDoctorOutPatientResult.items ?? [],
      'age desc',
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0]?.name).toBe('Fina Miles');
    expect(result?.[1]?.name).toBe('Danilo Zhe');
    expect(result?.[2]?.name).toBe('Jon Snows');
  });

  it('should return outpatients sorted by start time/date in ascending order', () => {
    const result = getOutpatientLandingList(
      getDoctorOutPatientResult.items ?? [],
      'startTime',
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0]?.name).toBe('Fina Miles');
    expect(result?.[1]?.name).toBe('Jon Snows');
    expect(result?.[2]?.name).toBe('Danilo Zhe');
  });

  it('should return outpatients sorted by start time/date in descending order', () => {
    const result = getOutpatientLandingList(
      getDoctorOutPatientResult.items ?? [],
      'startTime desc',
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0]?.name).toBe('Danilo Zhe');
    expect(result?.[1]?.name).toBe('Jon Snows');
    expect(result?.[2]?.name).toBe('Fina Miles');
  });
});

const getDoctorOutPatientResult = {
  totalCount: 3,
  items: [
    {
      startTime: '2024-01-24T10:52:00',
      status: 'Arrived',
      patientId: 2758,
      name: 'Danilo Zhe',
      patientCode: 'M-0000057-T',
      dateOfBirth: '2020-01-12T00:00:00',
      gender: 'Male',
      attendingPhysician: undefined,
      encounterId: 123,
    },
    {
      startTime: '2024-01-24T09:52:00',
      status: 'Awaiting doctor',
      patientId: 2759,
      name: 'Jon Snows',
      patientCode: 'M-0000058-T',
      dateOfBirth: '2021-01-12T00:00:00',
      gender: 'Female',
      attendingPhysician: undefined,
      bedNumber: '333',
      encounterId: 124,
    },
    {
      startTime: '2024-01-24T04:52:00',
      status: 'Awaiting admission',
      patientId: 2760,
      name: 'Fina Miles',
      patientCode: 'M-0000060-T',
      dateOfBirth: '2019-01-12T00:00:00',
      gender: 'Others',
      attendingPhysician: undefined,
      encounterId: 125,
    },
  ],
} as PagedResultDtoOfGetPatientLandingListOuptDto;
