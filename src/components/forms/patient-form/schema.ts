import * as z from 'zod';
import {
  emailValidation,
  optionalImageFileValidation,
  optionalNameValidation,
  optionalNumberValidation,
  optionalPhoneNumberValidation,
  optionalSelectedItemValidation,
  optionalStringValidation,
  otherIdNumberFormSchema,
} from '@/utils/schema';
import {CustomRegex, EMPTY_STRING} from '@/utils/index';

/** Validatiosn schema used in Insurance provider form */
export const insuranceProviderFormSchema = z
  .object({
    type: optionalStringValidation,
    provider: optionalStringValidation,
    coverage: optionalStringValidation,
    insuranceNumber: optionalStringValidation,
    registrationType: optionalStringValidation,
    startDate: optionalStringValidation,
    endDate: optionalStringValidation,
  })
  .superRefine((data, ctx) => {
    if (
      data.type === EMPTY_STRING &&
      (data.provider !== EMPTY_STRING ||
        data.coverage !== EMPTY_STRING ||
        data.insuranceNumber !== EMPTY_STRING ||
        data.registrationType !== EMPTY_STRING ||
        data.startDate !== EMPTY_STRING ||
        data.endDate !== EMPTY_STRING)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Insurance provider type is required',
        path: ['type'],
      });
    }

    if (
      data.provider === EMPTY_STRING &&
      (data.type !== EMPTY_STRING ||
        data.coverage !== EMPTY_STRING ||
        data.insuranceNumber !== EMPTY_STRING ||
        data.registrationType !== EMPTY_STRING ||
        data.startDate !== EMPTY_STRING ||
        data.endDate !== EMPTY_STRING)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Insurance provider is required',
        path: ['provider'],
      });
    }

    if (
      data.coverage === EMPTY_STRING &&
      (data.type !== EMPTY_STRING ||
        data.provider !== EMPTY_STRING ||
        data.insuranceNumber !== EMPTY_STRING ||
        data.registrationType !== EMPTY_STRING ||
        data.startDate !== EMPTY_STRING ||
        data.endDate !== EMPTY_STRING)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Insurance coverage is required',
        path: ['coverage'],
      });
    }

    if (
      data.insuranceNumber === EMPTY_STRING &&
      (data.type !== EMPTY_STRING ||
        data.provider !== EMPTY_STRING ||
        data.coverage !== EMPTY_STRING ||
        data.registrationType !== EMPTY_STRING ||
        data.startDate !== EMPTY_STRING ||
        data.endDate !== EMPTY_STRING)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Insurance number is required',
        path: ['insuranceNumber'],
      });
    }

    if (
      data.registrationType === EMPTY_STRING &&
      (data.type !== EMPTY_STRING ||
        data.provider !== EMPTY_STRING ||
        data.coverage !== EMPTY_STRING ||
        data.insuranceNumber !== EMPTY_STRING ||
        data.startDate !== EMPTY_STRING ||
        data.endDate !== EMPTY_STRING)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Registration type is required',
        path: ['registrationType'],
      });
    }

    if (
      data.endDate === EMPTY_STRING &&
      (data.type !== EMPTY_STRING ||
        data.provider !== EMPTY_STRING ||
        data.coverage !== EMPTY_STRING ||
        data.insuranceNumber !== EMPTY_STRING ||
        data.registrationType !== EMPTY_STRING ||
        data.startDate !== EMPTY_STRING)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'End date is required',
        path: ['endDate'],
      });
    }
  });

/** Validation schema used in Next of kin and Guardian form */
export const patientRelativeFormSchema = z
  .object({
    id: z.number().or(z.null()).optional(),
    title: optionalStringValidation,
    firstName: optionalNameValidation,
    middleName: optionalNameValidation,
    lastName: optionalNameValidation,
    phoneNumber: optionalPhoneNumberValidation,
    address: optionalStringValidation,
    email: emailValidation,
    otherIdNumber: z.optional(z.array(otherIdNumberFormSchema)),
    relationship: optionalStringValidation,
  })
  .superRefine((data, ctx) => {
    const optionalFieldsAreEmpty =
      data.title !== EMPTY_STRING ||
      data.middleName !== EMPTY_STRING ||
      data.address !== EMPTY_STRING ||
      data.email !== EMPTY_STRING ||
      data?.otherIdNumber?.every(id => id.number && id.type);

    if (
      data.firstName === EMPTY_STRING &&
      (data.lastName !== EMPTY_STRING ||
        data.phoneNumber !== EMPTY_STRING ||
        data.relationship !== EMPTY_STRING ||
        optionalFieldsAreEmpty)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'First name is required',
        path: ['firstName'],
      });
    }
    if (
      data.lastName === EMPTY_STRING &&
      (data.firstName !== EMPTY_STRING ||
        data.phoneNumber !== EMPTY_STRING ||
        data.relationship !== EMPTY_STRING ||
        optionalFieldsAreEmpty)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Last name is required',
        path: ['lastName'],
      });
    }

    if (
      data.phoneNumber === EMPTY_STRING &&
      (data.firstName !== EMPTY_STRING ||
        data.lastName !== EMPTY_STRING ||
        data.relationship !== EMPTY_STRING ||
        optionalFieldsAreEmpty)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Phone number is required',
        path: ['phoneNumber'],
      });
    }

    if (
      data.relationship === EMPTY_STRING &&
      (data.firstName !== EMPTY_STRING ||
        data.lastName !== EMPTY_STRING ||
        data.phoneNumber !== EMPTY_STRING ||
        optionalFieldsAreEmpty)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Relationship is required',
        path: ['relationship'],
      });
    }
  });

/** Validation schema for the add new patient form all together */
export const addNewPatientFormSchema = z
  .object({
    image: optionalImageFileValidation,
    title: optionalStringValidation,
    address: optionalStringValidation,
    gender: z.string().min(1, {message: 'Gender is required'}),
    dob: z.date({required_error: 'Date of birth is required'}),
    patientId: z.string().min(1, {message: 'Patient ID is required'}),
    email: emailValidation,
    middleName: optionalNameValidation,
    firstName: z
      .string()
      .min(1, {message: 'First name is required'})
      .regex(CustomRegex.name, {message: 'Please enter a valid first name'}),
    lastName: z
      .string()
      .min(1, {message: 'Last name is required'})
      .regex(CustomRegex.name, {message: 'Please enter a valid last name'}),
    phoneNumber: z
      .string()
      .min(1, {message: 'Phone number is required'})
      .max(11, 'Phone number should be 11 characters long')
      .regex(CustomRegex.number, 'Please enter a valid phone number'),
    isNew: z.boolean().optional(),
    state: optionalSelectedItemValidation(),
    nationality: optionalSelectedItemValidation(),
    lga: optionalSelectedItemValidation(),
    ethnicity: optionalStringValidation,
    religion: optionalStringValidation,
    maritalStatus: optionalStringValidation,
    otherIdNumber: z.optional(z.array(otherIdNumberFormSchema)),
    bloodGroup: optionalStringValidation,
    genotype: optionalStringValidation,
    noOfSpouse: optionalNumberValidation,
    noOfSiblings: optionalNumberValidation,
    noOfChildren: optionalNumberValidation,
    nuclearFamilySize: optionalNumberValidation,
    positionInFamily: optionalStringValidation,
    occupation: optionalSelectedItemValidation(),
    officeLocation: optionalStringValidation,
    referringHospital: optionalStringValidation,
    referralLetterImage: optionalImageFileValidation,
    diagonsis: optionalStringValidation,
    nextOfKinForm: z.array(patientRelativeFormSchema),
    guardianForm: z.array(patientRelativeFormSchema),
    insuranceForm: z.array(insuranceProviderFormSchema),
  })
  .superRefine((data, ctx) => {
    if (
      data.referringHospital === EMPTY_STRING &&
      data.diagonsis !== EMPTY_STRING
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Referring hospital is required',
        path: ['referringHospital'],
      });
    }

    if (
      data.diagonsis === EMPTY_STRING &&
      data.referringHospital !== EMPTY_STRING
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Diagnosis is required',
        path: ['diagonsis'],
      });
    }

    if (
      !data.referralLetterImage &&
      (data.diagonsis !== EMPTY_STRING ||
        data.referringHospital !== EMPTY_STRING)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Referral letter image is Required',
        path: ['referralLetterImage'],
      });
    }
  });

export type addNewPatientFormSchema = z.infer<typeof addNewPatientFormSchema>;
export type patientRelativeFormSchema = z.infer<
  typeof patientRelativeFormSchema
>;

export type insuranceProviderFormSchema = z.infer<
  typeof insuranceProviderFormSchema
>;
