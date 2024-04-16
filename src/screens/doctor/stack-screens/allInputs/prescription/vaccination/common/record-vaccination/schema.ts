import {z} from 'zod';

export const CreateVaccinationDtoSchema = z
  .object({
    dueDate: z.date().or(z.undefined()),
    patientId: z.number().optional(),
    vaccineId: z.number().optional(),
    vaccineScheduleId: z.number().optional(),
    isAdministered: z.boolean(),
    dateAdministered: z.date().nullable().optional(),
    hasComplication: z.boolean().optional(),
    vaccineBrand: z.string().min(1, {message: 'Vaccine brand is required'}),
    vaccineBatchNo: z
      .string()
      .min(1, {message: 'Vaccine batch number is required'}),
    note: z.string().nullable().optional(),
  })
  .refine(data => (data.isAdministered ? data.dateAdministered : true), {
    message:
      'Date administered is required when the vaccine is marked as administered',
    path: ['dateAdministered'],
  });

export type CreateVaccinationDto = z.infer<typeof CreateVaccinationDtoSchema>;

export const ArrayCreateVaccinationDtoSchema = z.object({
  vaccines: z.array(CreateVaccinationDtoSchema),
});

export type VaccineScheduleDtoArray = z.infer<
  typeof ArrayCreateVaccinationDtoSchema
>;
