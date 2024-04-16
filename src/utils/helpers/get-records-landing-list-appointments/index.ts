import {RecordsSortType} from '@/screens/front-desk/bottom-tabs/records/type';
import {
  AppointmentListResponse,
  SearchPatientOutput,
} from '@/state/services/patientApi';
import {EMPTY_STRING, NOT_AVAILABLE} from '../..';

const getRecordsLandingListAppointments = (
  appointments: AppointmentListResponse[],
  selectedSort: RecordsSortType,
  selectedPatient?: SearchPatientOutput | null,
) => {
  if (selectedPatient) {
    return filterAppointentSearchBarText(appointments, selectedPatient);
  } else if (selectedSort) {
    return sortAppointments(appointments, selectedSort);
  }

  return appointments;
};

const filterAppointentSearchBarText = (
  appointments: AppointmentListResponse[],
  selelctedPatient: SearchPatientOutput,
) => {
  if (selelctedPatient.patientCode) {
    const filteredAppointments = appointments.filter(appointment => {
      return (
        appointment.appointmentPatient?.patientCode?.toLowerCase() ===
        selelctedPatient.patientCode?.toLowerCase()
      );
    });

    if (filteredAppointments.length > 0) {
      return filteredAppointments;
    } else {
      return [
        {
          title: NOT_AVAILABLE,
          attendingClinic: NOT_AVAILABLE,
          appointmentPatient: {
            id: selelctedPatient?.id,
            dateOfBirth: selelctedPatient?.dateOfBirth || EMPTY_STRING,
            fullName: selelctedPatient?.fullname || EMPTY_STRING,
            genderType: selelctedPatient?.genderType,
            patientCode: selelctedPatient?.patientCode || EMPTY_STRING,
            pictureUrl: selelctedPatient.pictureUrl,
          },
        },
      ] as AppointmentListResponse[];
    }
  }
};

export default getRecordsLandingListAppointments;

const sortAppointments = (
  appointments: AppointmentListResponse[],
  selectedSort: RecordsSortType,
) => {
  if (selectedSort.value === EMPTY_STRING) {
    return appointments;
  }
  if (
    selectedSort.value === 'male' ||
    selectedSort.value === 'female' ||
    selectedSort.value === 'others'
  ) {
    return appointments.filter(appointment => {
      return (
        appointment.appointmentPatient?.genderType?.toLowerCase() ===
        selectedSort.value.toLowerCase()
      );
    });
  }
  if (
    selectedSort.value === 'fullName' ||
    selectedSort.value === 'fullName desc'
  ) {
    return [...appointments].sort(
      (a: AppointmentListResponse, b: AppointmentListResponse) =>
        selectedSort.value === 'fullName'
          ? `${a.appointmentPatient?.fullName}`.localeCompare(
              `${b.appointmentPatient?.fullName}`,
            )
          : `${b.appointmentPatient?.fullName}`.localeCompare(
              `${a.appointmentPatient?.fullName}`,
            ),
    );
  }
  if (
    selectedSort.value === 'patientCode' ||
    selectedSort.value === 'patientCode desc'
  ) {
    return [...appointments].sort((a, b) =>
      selectedSort.value === 'patientCode'
        ? `${a.appointmentPatient?.patientCode}`.localeCompare(
            `${b.appointmentPatient?.patientCode}`,
          )
        : `${b.appointmentPatient?.patientCode}`.localeCompare(
            `${a.appointmentPatient?.patientCode}`,
          ),
    );
  }
  if (selectedSort.value === 'age' || selectedSort.value === 'age desc') {
    return [...appointments].sort((a, b) =>
      selectedSort.value === 'age'
        ? new Date(`${b.appointmentPatient?.dateOfBirth}`).getTime() -
          new Date(`${a.appointmentPatient?.dateOfBirth}`).getTime()
        : new Date(`${a.appointmentPatient?.dateOfBirth}`).getTime() -
          new Date(`${b.appointmentPatient?.dateOfBirth}`).getTime(),
    );
  }
  if (
    selectedSort.value === 'appointmentStatus' ||
    selectedSort.value === 'appointmentStatus desc'
  ) {
    return [...appointments].sort((a, b) =>
      selectedSort.value === 'appointmentStatus'
        ? `${a.status}`.localeCompare(`${b.status}`)
        : `${b.status}`.localeCompare(`${a.status}`),
    );
  }
  if (
    selectedSort.value === 'startTime' ||
    selectedSort.value === 'startTime desc'
  ) {
    return [...appointments].sort((a, b) =>
      selectedSort.value === 'startTime'
        ? new Date(`${a.startTime}`).getTime() -
          new Date(`${b.startTime}`).getTime()
        : new Date(`${b.startTime}`).getTime() -
          new Date(`${a.startTime}`).getTime(),
    );
  }
};
