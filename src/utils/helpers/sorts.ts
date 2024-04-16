import {AppointmentListResponse} from '../../state/services/appointmentApi';

export const sortAppointmentData = (
  data: AppointmentListResponse[],
  sortOption: {value: string},
): AppointmentListResponse[] => {
  const [_, value] = sortOption.value.split(' ');

  if (!Array.isArray(data)) {
    throw new Error('Invalid data: expected an array');
  }

  let filteredAppointments: AppointmentListResponse[] = [];

  if (sortOption.value.includes('gender')) {
    return data.filter(item => {
      filteredAppointments =
        item.appointmentPatient?.genderType?.toLowerCase() ===
        value.toLowerCase()
          ? item
          : null;
      return filteredAppointments;
    });
  }

  return filteredAppointments;
};
