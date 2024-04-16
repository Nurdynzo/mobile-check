import {
  GetPatientLandingListOuptDto,
  SearchPatientOutput,
} from '@/state/services/patientApi';
import {EMPTY_STRING} from '../..';

const getOutpatientLandingList = (
  data: GetPatientLandingListOuptDto[],
  selectedSort: string,
  selectedPatient?: SearchPatientOutput | null,
) => {
  if (selectedPatient) {
    return filterSearchBarText(data, selectedPatient);
  } else if (selectedSort) {
    return sortDoctorInPatient(data, selectedSort);
  }

  return data;
};

const filterSearchBarText = (
  data: GetPatientLandingListOuptDto[],
  selelctedPatient: SearchPatientOutput,
) => {
  if (selelctedPatient.patientCode) {
    const filteredAppointments = data.filter(elData => {
      return elData?.patientCode === selelctedPatient.patientCode;
    });
    if (filteredAppointments.length) {
      return filteredAppointments;
    } else {
      return [
        {
          patientCode: selelctedPatient.patientCode,
          name: selelctedPatient.fullname,
          dateOfBirth: selelctedPatient?.dateOfBirth ?? undefined,
          patientId: selelctedPatient.id,
          gender: selelctedPatient.genderType,
        } as GetPatientLandingListOuptDto,
      ];
    }
  }
};

export default getOutpatientLandingList;

const sortDoctorInPatient = (
  data: GetPatientLandingListOuptDto[],
  selectedSort: string,
) => {
  if (selectedSort === EMPTY_STRING) {
    return data;
  }

  if (selectedSort === 'fullName' || selectedSort === 'fullName desc') {
    return [...data].sort(
      (a: GetPatientLandingListOuptDto, b: GetPatientLandingListOuptDto) =>
        selectedSort === 'fullName'
          ? `${a?.name}`.localeCompare(`${b?.name}`)
          : `${b?.name}`.localeCompare(`${a?.name}`),
    );
  }

  if (selectedSort === 'age' || selectedSort === 'age desc') {
    return [...data].sort((a, b) =>
      selectedSort === 'age'
        ? new Date(`${b?.dateOfBirth}`).getTime() -
          new Date(`${a?.dateOfBirth}`).getTime()
        : new Date(`${a?.dateOfBirth}`).getTime() -
          new Date(`${b?.dateOfBirth}`).getTime(),
    );
  }

  if (selectedSort === 'startTime' || selectedSort === 'startTime desc') {
    return [...data].sort((a, b) =>
      selectedSort === 'startTime'
        ? new Date(`${a.startTime}`).getTime() -
          new Date(`${b.startTime}`).getTime()
        : new Date(`${b.startTime}`).getTime() -
          new Date(`${a.startTime}`).getTime(),
    );
  }
};
