import * as z from 'zod';
import {EMPTY_STRING} from '@/utils/index';
import {
  imageFileValidation,
  optionalImageFileValidation,
  optionalSelectedItemValidation,
  selectedItemValidation,
} from '@/utils/schema';
const optionalStringValidation = z.optional(z.string());
const patientValidation = z.object(
  {
    id: z.string().min(0).or(z.number().min(0)),
    fullname: z.string().min(2),
    code: z.string().min(1),
  },
  {required_error: 'Please select a patient'},
);

export const createAppointmentSchema = z
  .object({
    patient: patientValidation,
    clinic: selectedItemValidation({
      params: {required_error: 'Please select a clinic'},
    }),
    appointmentType: selectedItemValidation({
      params: {required_error: 'Please select appointment type'},
    }),
    appointmentDateTime: z.date({
      required_error: 'Kindly select an appointment date and time',
    }),
    referringHospital: optionalStringValidation,
    diagonsis: optionalStringValidation,
    referralLetterImage: optionalImageFileValidation,
    repeatType: optionalSelectedItemValidation({
      params: {required_error: 'Appointment type is invalid'},
    }),
  })
  .superRefine((data, ctx) => {
    if (data.appointmentType.value === 'Referral') {
      if (data.referringHospital === EMPTY_STRING) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Referring hospital is required',
          path: ['referringHospital'],
        });
      }

      if (data.diagonsis === EMPTY_STRING) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Diagnosis is required',
          path: ['diagonsis'],
        });
      }

      if (!data.referralLetterImage?.path) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Referral letter image is Required',
          path: ['referralLetterImage'],
        });
      }
    }
  });

export const attachReferralLetterSchema = z.object({
  referringHospital: z
    .string({required_error: 'Referring hospital is required'})
    .min(3, {message: 'Referring hospital length is should be alteast 3'}),
  diagonsis: z
    .string({required_error: 'Diagnois is required'})
    .min(3, {message: 'Diagnois length is should be alteast 3'}),
  referralLetterImage: imageFileValidation,
});

export type AttachReferralLetterSchema = z.infer<
  typeof attachReferralLetterSchema
>;
export type CreateAppointmentSchema = z.infer<typeof createAppointmentSchema>;
export type PatientSchema = z.infer<typeof patientValidation>;
