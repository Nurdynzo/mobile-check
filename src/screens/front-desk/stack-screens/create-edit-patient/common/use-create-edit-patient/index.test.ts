import {act} from 'react-test-renderer';
import {renderHookWithProviders} from 'test-utils';
import {useCreateEditPatient} from '.';

describe('useCreateEditPatient', () => {
  it('should create or edit patient', async () => {
    const {result} = renderHookWithProviders(() => useCreateEditPatient());

    await act(async () => {
      await result.current.handleCreatePatient({
        gender: 'Male',
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '555-1234',
        dob: new Date(),
        title: 'Mr',
        middleName: 'Alexander',
        email: 'john.doe@example.com',
        address: '123 Maple Street, Hometown, HT',
        isNew: true,
        patientId: 'P123456',
        nextOfKinForm: [],
        guardianForm: [],
        insuranceForm: [],
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
