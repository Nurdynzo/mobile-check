import {generateVaccineMessage, getOrdinalNumber} from '.';

describe('getOrdinalNumber', () => {
  it('should return the ordinal representation of a number', () => {
    const result = getOrdinalNumber(2);
    expect(result).toEqual('2nd');
  });
});

describe('generateVaccineMessage', () => {
  it('should generate a correct vaccine message', () => {
    const expectedMessage =
      'BCG administered 1 Year ago. Complications experienced. Vaccination was taken in another hospital.';

    const result = generateVaccineMessage({
      hasComplication: true,
      id: 1,
      lastVaccineDuration: '1 Year',
      note: '',
      numberOfDoses: 1,
      patientId: 1998,
      vaccine: {
        fullName: 'BCG',
        id: 1,
        name: 'BCG',
        schedules: [],
      },
      vaccineId: 2,
    });
    expect(result).toEqual(expectedMessage);
  });
});
