import CustomRegex from '@/utils/customRegex';
import {
  emailValidation,
  optionalNameValidation,
  optionalSelectedItemValidation,
  optionalStringValidation,
  otherIdNumberFormSchema,
} from '@/utils/schema';
import {z} from 'zod';

export const editPatientInfoFormSchema = z.object({
  middleName: optionalNameValidation,
  firstName: z
    .string()
    .min(1, {message: 'First name is required'})
    .regex(CustomRegex.name, {message: 'Please enter a valid first name'}),
  lastName: z
    .string()
    .min(1, {message: 'Last name is required'})
    .regex(CustomRegex.name, {message: 'Please enter a valid last name'}),
  title: optionalStringValidation,
  gender: z.string().min(1, {message: 'Gender is required'}),
  dob: z.date({required_error: 'Date of birth is required'}),
  phoneNumber: z
    .string()
    .min(1, {message: 'Phone number is required'})
    .min(11, 'Phone number should be at least 11 characters long')
    .regex(CustomRegex.number, 'Please enter a valid phone number'),
  email: emailValidation,
  address: optionalStringValidation,
  maritalStatus: optionalStringValidation,
  otherIdNumber: z.optional(z.array(otherIdNumberFormSchema)),
  nationality: optionalSelectedItemValidation(),
  state: optionalSelectedItemValidation(),
  lga: optionalSelectedItemValidation(),
  occupation: optionalSelectedItemValidation(),
  officeLocation: optionalStringValidation,
  bloodGroup: optionalStringValidation,
  genotype: optionalStringValidation,
  ethnicity: optionalStringValidation,
  religion: optionalStringValidation,
});

export type EditPatientInfoFormSchema = z.infer<
  typeof editPatientInfoFormSchema
>;
