import {EMPTY_STRING} from '@/utils/constants';
import {selectedItemValidation} from '@/utils/schema';
import {z} from 'zod';

const measurementRangeDtoSchema = z.object({
  id: z.number().optional(),
  lower: z.number().nullable().optional(),
  upper: z.number().nullable().optional(),
  unit: z.string().nullable().optional(),
  decimalPlaces: z.number().nullable().optional(),
  maxLength: z.number().nullable().optional(),
});

const numberFormatSchema = (whole: number = 3, decimal: number = 2) => {
  // Ensure whole and decimal are within expected ranges
  whole = Math.max(whole, 1); // At least 1 digit
  decimal = Math.max(decimal, 0); // No negative decimals

  return z
    .string()
    .regex(
      decimal === 0
        ? new RegExp(`^\\d{1,${whole}}$`)
        : new RegExp(`^\\d{1,${whole}}(\\.\\d{1,${decimal}})?$`),
      'Invalid number format',
    )
    .or(z.literal(EMPTY_STRING));
};

export const vitalSignFormSchema = z
  .object({
    vitalSignId: z.optional(z.number()),
    measurementSite: z.optional(
      selectedItemValidation({
        params: {required_error: 'Site is required'},
      }),
    ),
    measurementRange: z.optional(
      selectedItemValidation({
        params: {required_error: 'Range is required'},
        dataSchema: measurementRangeDtoSchema,
      }),
    ),
    vitalReading: z.optional(z.string()),
    position: z.optional(z.string()),
    vitalSignName: z.optional(z.string()),
    decimalPlaces: z.optional(z.number()),
    maxLength: z.optional(z.number()),
  })
  .superRefine((data, ctx) => {
    if (
      !z
        .optional(
          numberFormatSchema(
            data?.measurementRange?.data?.maxLength ?? data.maxLength,
            data?.measurementRange?.data?.decimalPlaces ?? data.decimalPlaces,
          ),
        )
        .safeParse(data.vitalReading).success
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['vitalReading'],
        message: `Vital reading must be at least ${
          data?.measurementRange?.data?.maxLength ?? data.maxLength
        } whole number and ${
          data?.measurementRange?.data?.decimalPlaces ?? data.decimalPlaces
        } decimals`,
      });
    }
  });

export const allVitalSignsSchema = z.object({
  vitalSigns: z.array(vitalSignFormSchema).superRefine((data, ctx) => {
    const hasVitalReading = data.some(vitalSign =>
      Number(vitalSign.vitalReading),
    );
    if (!hasVitalReading) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'At least one vital sign should have a reading',
      });
    }
  }),
});

export type AllVitalSignsSchema = z.infer<typeof allVitalSignsSchema>;
export type VitalSignFormSchema = z.infer<typeof vitalSignFormSchema>;
