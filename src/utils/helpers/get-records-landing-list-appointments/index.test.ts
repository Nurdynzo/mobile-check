import {ApiServicesAppAppointmentGetappointmentlistfortodayGetApiResponse} from '@/state/services/appointmentApi';
import getRecordsLandingListAppointments from '.';
import {EMPTY_STRING} from '../..';

describe('getRecordsLandingListAppointments', () => {
  it('should return passed appointment given no selected patient and default sort value', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Sort by', value: EMPTY_STRING},
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0].id).toBe(3114);
    expect(result?.[1].id).toBe(3115);
    expect(result?.[2].id).toBe(3116);
  });

  it('should return an appointment given selected patient is not found in appointments list and sort value is default', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Sort by', value: EMPTY_STRING},
      {patientCode: 'M-0000059-T'},
    );

    expect(result?.length).toBe(1);
  });

  it('should return an appointment with selected patient given selected patient code exist and sort value is default', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Sort by', value: EMPTY_STRING},
      {patientCode: 'M-0000057-T'},
    );

    expect(result?.length).toBe(1);
    expect(result?.[0].appointmentPatient?.patientCode).toBe('M-0000057-T');
  });

  it('should return appointments with patient gender equal to Male', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Gender: Male', value: 'male'},
      null,
    );

    expect(result?.length).toBe(1);
    expect(result?.[0].appointmentPatient?.patientCode).toBe('M-0000057-T');
  });

  it('should return appointments with patient gender equal to Female', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Gender: Female', value: 'female'},
      null,
    );

    expect(result?.length).toBe(1);
    expect(result?.[0].appointmentPatient?.patientCode).toBe('M-0000058-T');
  });

  it('should return appointments with patient gender equal to Others', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Gender: Others', value: 'others'},
      null,
    );

    expect(result?.length).toBe(1);
    expect(result?.[0].appointmentPatient?.patientCode).toBe('M-0000060-T');
  });

  it('should return appointments sorted by fullName in ascending order', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Patient Name: A-Z', value: 'fullName'},
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0].appointmentPatient?.fullName).toBe('Danilo Zhe');
    expect(result?.[1].appointmentPatient?.fullName).toBe('Fina Miles');
    expect(result?.[2].appointmentPatient?.fullName).toBe('Jon Snows');
  });

  it('should return appointments sorted by fullName in descending order', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Patient Name: Z-A', value: 'fullName desc'},
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0].appointmentPatient?.fullName).toBe('Jon Snows');
    expect(result?.[1].appointmentPatient?.fullName).toBe('Fina Miles');
    expect(result?.[2].appointmentPatient?.fullName).toBe('Danilo Zhe');
  });

  it('should return appointments sorted by patientCode in ascending order', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Patient ID: Ascending', value: 'patientCode'},
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0].appointmentPatient?.patientCode).toBe('M-0000057-T');
    expect(result?.[1].appointmentPatient?.patientCode).toBe('M-0000058-T');
    expect(result?.[2].appointmentPatient?.patientCode).toBe('M-0000060-T');
  });

  it('should return appointments sorted by patientCode in descending order', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Patient ID: Descending', value: 'patientCode desc'},
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0].appointmentPatient?.patientCode).toBe('M-0000060-T');
    expect(result?.[1].appointmentPatient?.patientCode).toBe('M-0000058-T');
    expect(result?.[2].appointmentPatient?.patientCode).toBe('M-0000057-T');
  });

  it('should return appointments sorted by age in ascending order', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Age: Youngest', value: 'age'},
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0].appointmentPatient?.fullName).toBe('Jon Snows');
    expect(result?.[1].appointmentPatient?.fullName).toBe('Danilo Zhe');
    expect(result?.[2].appointmentPatient?.fullName).toBe('Fina Miles');
  });

  it('should return appointments sorted by age in descending order', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Age: Oldest', value: 'age desc'},
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0].appointmentPatient?.fullName).toBe('Fina Miles');
    expect(result?.[1].appointmentPatient?.fullName).toBe('Danilo Zhe');
    expect(result?.[2].appointmentPatient?.fullName).toBe('Jon Snows');
  });

  it('should return appointments sorted by appointment start time/date in ascending order', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Time/Date: Earliest', value: 'startTime'},
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0].appointmentPatient?.fullName).toBe('Fina Miles');
    expect(result?.[1].appointmentPatient?.fullName).toBe('Jon Snows');
    expect(result?.[2].appointmentPatient?.fullName).toBe('Danilo Zhe');
  });

  it('should return appointments sorted by appointment start time/date in descending order', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Time/Date: Latest', value: 'startTime desc'},
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0].appointmentPatient?.fullName).toBe('Danilo Zhe');
    expect(result?.[1].appointmentPatient?.fullName).toBe('Jon Snows');
    expect(result?.[2].appointmentPatient?.fullName).toBe('Fina Miles');
  });

  it('should return appointments sorted by appointment status in ascending order', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Appointment status: A-Z', value: 'appointmentStatus'},
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0].appointmentPatient?.fullName).toBe('Jon Snows');
    expect(result?.[1].appointmentPatient?.fullName).toBe('Fina Miles');
    expect(result?.[2].appointmentPatient?.fullName).toBe('Danilo Zhe');
  });

  it('should return appointments sorted by appointment status in descending order', () => {
    const result = getRecordsLandingListAppointments(
      getAppointmentsForTodayResult.items ?? [],
      {label: 'Appointment status: Z-A', value: 'appointmentStatus desc'},
      null,
    );

    expect(result?.length).toBe(3);
    expect(result?.[0].appointmentPatient?.fullName).toBe('Danilo Zhe');
    expect(result?.[1].appointmentPatient?.fullName).toBe('Fina Miles');
    expect(result?.[2].appointmentPatient?.fullName).toBe('Jon Snows');
  });
});

const getAppointmentsForTodayResult = {
  totalCount: 3,
  items: [
    {
      title: 'Walk-in',
      duration: 0,
      startTime: '2024-01-24T10:52:00',
      isRepeat: true,
      notes: null,
      repeatType: 'Daily',
      status: 'Not arrived',
      scanningStatus: 'No scanned record',
      type: 'Walk-in',
      appointmentPatient: {
        id: 2758,
        fullName: 'Danilo Zhe',
        patientCode: 'M-0000057-T',
        dateOfBirth: '2020-01-12T00:00:00',
        genderType: 'Male',
        pictureUrl:
          'https://plateaumedstoragev1.blob.core.windows.net/publicplateaumedehr241/83281f43-e18b-4ae6-82dd-84f771d029e6',
        isNewToHospital: false,
      },
      referralDocument: undefined,
      attendingPhysician: undefined,
      referringClinic: '',
      attendingClinic: {
        id: 35820,
        displayName: 'Cardiology',
      },
      appointmentCount: 1,
      scannedDocument: undefined,
      id: 3114,
    },
    {
      title: 'Walk-in',
      duration: 0,
      startTime: '2024-01-24T09:52:00',
      isRepeat: true,
      notes: null,
      repeatType: 'Daily',
      status: 'Awaiting Doctor',
      scanningStatus: 'No scanned record',
      type: 'Walk-in',
      appointmentPatient: {
        id: 2759,
        fullName: 'Jon Snows',
        patientCode: 'M-0000058-T',
        dateOfBirth: '2021-01-12T00:00:00',
        genderType: 'Female',
        pictureUrl:
          'https://plateaumedstoragev1.blob.core.windows.net/publicplateaumedehr241/83281f43-e18b-4ae6-82dd-84f771d029e6',
        isNewToHospital: false,
      },
      referralDocument: undefined,
      attendingPhysician: undefined,
      referringClinic: '',
      attendingClinic: {
        id: 35820,
        displayName: 'Cardiology',
      },
      appointmentCount: 1,
      scannedDocument: undefined,
      id: 3115,
    },
    {
      title: 'Walk-in',
      duration: 0,
      startTime: '2024-01-24T04:52:00',
      isRepeat: true,
      notes: null,
      repeatType: 'Daily',
      status: 'Awaiting Vitals',
      scanningStatus: 'No scanned record',
      type: 'Walk-in',
      appointmentPatient: {
        id: 2760,
        fullName: 'Fina Miles',
        patientCode: 'M-0000060-T',
        dateOfBirth: '2019-01-12T00:00:00',
        genderType: 'Others',
        pictureUrl:
          'https://plateaumedstoragev1.blob.core.windows.net/publicplateaumedehr241/83281f43-e18b-4ae6-82dd-84f771d029e6',
        isNewToHospital: false,
      },
      referralDocument: undefined,
      attendingPhysician: undefined,
      referringClinic: '',
      attendingClinic: {
        id: 35820,
        displayName: 'Cardiology',
      },
      appointmentCount: 1,
      scannedDocument: undefined,
      id: 3116,
    },
  ],
} as ApiServicesAppAppointmentGetappointmentlistfortodayGetApiResponse;
