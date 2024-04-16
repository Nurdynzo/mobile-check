//TODO(Zucci): Write test for these
import {PatientVaccinationDto} from '@/screens/doctor/stack-screens/allInputs/prescription/types';

export function getOrdinalNumber(n: number) {
  const s = ['th', 'st', 'nd', 'rd'],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function generateVaccineMessage(
  vaccineInfo: PatientVaccinationDto,
): string {
  const {hasComplication, lastVaccineDuration} = vaccineInfo;
  const {name} = vaccineInfo.vaccine;
  let message = `${name} administered ${lastVaccineDuration} ago. `;
  if (hasComplication) {
    message += 'Complications experienced. ';
  } else {
    message += 'No complications experienced. ';
  }
  message += 'Vaccination was taken in another hospital';
  return `${message}${vaccineInfo.note && ', ' + vaccineInfo.note}.`;
}
