import CustomRegex from '@/utils/customRegex';
import {emailValidation, optionalNameValidation} from '@/utils/schema';
import * as z from 'zod';

export const editProfileInfoSchema = z.object({
  middleName: optionalNameValidation,
  firstName: z
    .string()
    .min(1, {message: 'First name is required'})
    .regex(CustomRegex.name, {message: 'Please enter a valid first name'}),
  lastName: z
    .string()
    .min(1, {message: 'Last name is required'})
    .regex(CustomRegex.name, {message: 'Please enter a valid last name'}),
  gender: z.string().min(3, {message: 'Gender is required'}),
  dateOfBirth: z.date({required_error: 'Date of birth is required'}),
  phoneNumber: z
    .string()
    .min(1, {message: 'Phone number is required'})
    .max(11, 'Phone number should be 11 characters long')
    .regex(CustomRegex.number, 'Please enter a valid phone number'),
  primaryEmailAddress: emailValidation,
  secondaryEmailAddress: emailValidation,
  govermentIssuedIdCardType: z
    .string()
    .min(3, {message: 'Id card type is required'}),
  govermentIssuedIdCardNumber: z
    .string()
    .min(3, {message: 'Id card number is required'}),
});

export type EditProfileInfoSchema = z.infer<typeof editProfileInfoSchema>;
