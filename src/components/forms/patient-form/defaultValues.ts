import {otherIdNumberFormSchema} from '@/utils/schema';
import {EMPTY_STRING} from '../../../utils';
import {
  addNewPatientFormSchema,
  insuranceProviderFormSchema,
  patientRelativeFormSchema,
} from './schema';

export const defaultOtherIdNumberValues: otherIdNumberFormSchema = {
  type: EMPTY_STRING,
  number: EMPTY_STRING,
};

export const defaultPatientRelativeValues: patientRelativeFormSchema = {
  title: EMPTY_STRING,
  firstName: EMPTY_STRING,
  middleName: EMPTY_STRING,
  lastName: EMPTY_STRING,
  phoneNumber: EMPTY_STRING,
  address: EMPTY_STRING,
  otherIdNumber: [defaultOtherIdNumberValues],
  relationship: EMPTY_STRING,
  email: EMPTY_STRING,
};

export const defaultInsuranceProviderValues: insuranceProviderFormSchema = {
  type: EMPTY_STRING,
  provider: EMPTY_STRING,
  coverage: EMPTY_STRING,
  insuranceNumber: EMPTY_STRING,
  registrationType: EMPTY_STRING,
  startDate: EMPTY_STRING,
  endDate: EMPTY_STRING,
};

export const addNewPatientFormDefaultValues: Omit<
  addNewPatientFormSchema,
  'dob'
> = {
  isNew: false,
  patientId: EMPTY_STRING,
  image: undefined,
  email: EMPTY_STRING,
  title: EMPTY_STRING,
  firstName: EMPTY_STRING,
  middleName: EMPTY_STRING,
  lastName: EMPTY_STRING,
  phoneNumber: EMPTY_STRING,
  otherIdNumber: [defaultOtherIdNumberValues],
  address: EMPTY_STRING,
  gender: EMPTY_STRING,
  nextOfKinForm: [defaultPatientRelativeValues],
  guardianForm: [defaultPatientRelativeValues],
  insuranceForm: [defaultInsuranceProviderValues],
  referringHospital: EMPTY_STRING,
  diagonsis: EMPTY_STRING,
};
