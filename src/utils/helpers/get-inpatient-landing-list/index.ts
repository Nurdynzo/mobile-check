import {
  GetInpatientLandingListResponse,
  SearchPatientOutput,
} from '@/state/services/patientApi';
import {EMPTY_STRING} from '../..';

const getInpatientLandingList = (
  data: GetInpatientLandingListResponse[],
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
  data: GetInpatientLandingListResponse[],
  selelctedPatient: SearchPatientOutput,
) => {
  if (selelctedPatient.id) {
    const filteredAppointments = data.filter(elData => {
      return elData?.patientId === selelctedPatient.id;
    });
    if (filteredAppointments.length) {
      return filteredAppointments;
    } else {
      return [
        {
          patientId: selelctedPatient.id,
          birthDate: selelctedPatient.dateOfBirth,
          gender: selelctedPatient.genderType,
          fullName: selelctedPatient.fullname,
          imageUrl: selelctedPatient.pictureUrl,
        } as GetInpatientLandingListResponse,
      ];
    }
  }
};

export default getInpatientLandingList;

const sortDoctorInPatient = (
  data: GetInpatientLandingListResponse[],
  selectedSort: string,
) => {
  if (selectedSort === EMPTY_STRING) {
    return data;
  }

  if (selectedSort === 'fullName' || selectedSort === 'fullName desc') {
    return [...data].sort(
      (
        a: GetInpatientLandingListResponse,
        b: GetInpatientLandingListResponse,
      ) =>
        selectedSort === 'fullName'
          ? `${a?.fullName}`.localeCompare(`${b?.fullName}`)
          : `${b?.fullName}`.localeCompare(`${a?.fullName}`),
    );
  }

  if (selectedSort === 'age' || selectedSort === 'age desc') {
    return [...data].sort((a, b) =>
      selectedSort === 'age'
        ? new Date(`${b?.birthDate}`).getTime() -
          new Date(`${a?.birthDate}`).getTime()
        : new Date(`${a?.birthDate}`).getTime() -
          new Date(`${b?.birthDate}`).getTime(),
    );
  }

  if (selectedSort === 'startTime' || selectedSort === 'startTime desc') {
    return [...data].sort((a, b) =>
      selectedSort === 'startTime'
        ? new Date(`${a.lastSeenAt}`).getTime() -
          new Date(`${b.lastSeenAt}`).getTime()
        : new Date(`${b.lastSeenAt}`).getTime() -
          new Date(`${a.lastSeenAt}`).getTime(),
    );
  }
};
