import {RawCreateParams, Schema, z} from 'zod';
import CustomRegex from './customRegex';
import {EMPTY_STRING} from './constants';

export const nameValidation = z
  .string()
  .regex(CustomRegex.name, {message: 'Please enter a valid name'});

export const optionalNameValidation = nameValidation.or(
  z.literal(EMPTY_STRING),
);

export const otherIdNumberFormSchema = z
  .object({
    type: z.string().min(1, {message: 'ID type is required'}),
    number: z.string().min(1, {message: 'ID number is required'}),
  })
  .or(
    z.object({
      type: z.literal(EMPTY_STRING),
      number: z.literal(EMPTY_STRING),
    }),
  );

export const optionalPhoneNumberValidation = z.optional(
  z
    .string()
    .min(1, {message: 'Phone number is required'})
    .max(11, 'Phone number should be 11 characters long')
    .regex(CustomRegex.number, 'Please enter a valid phone number')
    .or(z.literal(EMPTY_STRING)),
);

export const emailValidation = z
  .string()
  .email({message: 'Invalid email'})
  .or(z.literal(EMPTY_STRING));

export const numberValidation = z.string().regex(CustomRegex.number, {
  message: 'Please enter a valid number',
});

export const optionalNumberValidation = z.optional(
  numberValidation.or(z.literal(EMPTY_STRING)),
);

export const optionalStringValidation = z.optional(z.string());

export const imageFileValidation = z.object(
  {
    path: z.string().min(3, {message: 'Image path is missing'}),
    type: z.string({required_error: 'Image type is missing'}),
    name: z.string({required_error: 'Image name is missing'}).or(z.undefined()),
  },
  {required_error: 'Image is required'},
);

export const optionalImageFileValidation = z.optional(imageFileValidation);

export const selectedItemValidation = ({
  params,
  dataSchema,
}: {params?: RawCreateParams; dataSchema?: Schema} = {}) =>
  z.object(
    {
      id: z.string().min(1).or(z.number().min(1)),
      value: z.string().min(1),
      data: dataSchema ? dataSchema : z.any(),
    },
    params,
  );

export const optionalSelectedItemValidation = ({
  params,
}: {
  params?: RawCreateParams;
} = {}) => z.optional(selectedItemValidation({params}));

const selectedItemSchemaType = optionalSelectedItemValidation();

export type imageFileSchema = z.infer<typeof optionalImageFileValidation>;
export type selectedItemSchema = z.infer<typeof selectedItemSchemaType>;
export type otherIdNumberFormSchema = z.infer<typeof otherIdNumberFormSchema>;
