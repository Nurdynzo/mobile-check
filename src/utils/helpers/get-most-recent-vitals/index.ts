import {PatientVitalsDto} from '@/state/services/patientApi';
import {NOT_AVAILABLE} from '../..';

const getMostRecentVitals = (
  patientVitals: PatientVitalsDto[] | null | undefined,
) => {
  return (
    patientVitals
      ?.map(el => `${el.vitalSign}: ${el.reading} ${el.measurement}`)
      .join(', ') || NOT_AVAILABLE
  );
};

export default getMostRecentVitals;
