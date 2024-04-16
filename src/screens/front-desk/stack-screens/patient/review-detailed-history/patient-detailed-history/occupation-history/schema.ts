import {optionalStringValidation, selectedItemValidation} from '@/utils/schema';
import {z} from 'zod';

export const occupationFormSchema = z
  .object({
    occupationId: z.optional(z.number()),
    occupation: selectedItemValidation({
      params: {required_error: 'Occupation is required'},
    }),
    isCurrent: z.boolean().optional(),
    location: z.string({required_error: 'Work location is required'}),
    startDate: z.date({required_error: 'Start date is required'}),
    endDate: z.optional(
      z.date({required_error: 'End date is required'}).nullable(),
    ),
    notes: optionalStringValidation,
  })
  .superRefine((data, ctx) => {
    if (!data.isCurrent && !data.endDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'End date is required',
        path: ['endDate'],
      });
    }
    if (
      data.endDate &&
      data?.startDate?.getTime() >= data?.endDate?.getTime()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'End date is invalid',
        path: ['endDate'],
      });
    }
  });

export const allOccupationsSchema = z.object({
  occupations: z.array(occupationFormSchema),
});

export type AllOccupationsSchema = z.infer<typeof allOccupationsSchema>;
export type OccupationFormSchema = z.infer<typeof occupationFormSchema>;
