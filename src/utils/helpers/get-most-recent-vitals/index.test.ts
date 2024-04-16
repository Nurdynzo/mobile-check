import {PatientVitalsDto} from '@/state/services/patientApi';
import getMostRecentVitals from '.';
import {NOT_AVAILABLE} from '../..';

describe('getMostRecentVitals', () => {
  it('should return a properly formatted vital signs string given patientVitals list is not empty', () => {
    const patientVitals = [
      {vitalSign: 'Temperature', reading: '98.6', measurement: 'F'},
      {vitalSign: 'Blood Pressure', reading: '120/80', measurement: 'mmHg'},
    ];

    const result = getMostRecentVitals(patientVitals);

    expect(result).toBe('Temperature: 98.6 F, Blood Pressure: 120/80 mmHg');
  });

  it('should return "---" string given patientVitals list is empty', () => {
    const patientVitals: PatientVitalsDto[] = [];

    const result = getMostRecentVitals(patientVitals);

    expect(result).toBe(NOT_AVAILABLE);
  });
});
