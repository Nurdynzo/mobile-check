import {
  optionalNumberValidation,
  optionalStringValidation,
} from '@/utils/schema';
import {z} from 'zod';

const diagnosisByTerm = z.object({
  id: z.string(),
  name: z.string(),
});

export const familyMemberDetailsFormSchema = z.object({
  memberId: z.optional(z.number()),
  relationship: optionalStringValidation,
  isAlive: z.boolean().optional(),
  ageOfDeath: optionalNumberValidation,
  causeOfDeath: z.array(diagnosisByTerm),
  seriousIllnesses: z.array(diagnosisByTerm),
  ageAtDiagnosis: optionalNumberValidation,
});
export const editFamilyHistoryFormSchema = z.object({
  isFamilyHistoryNotKnown: z.boolean().optional(),
  noOfFemaleChildren: optionalNumberValidation,
  noOfMaleChildren: optionalNumberValidation,
  noOfFemaleSiblings: optionalNumberValidation,
  noOfMaleSiblings: optionalNumberValidation,
  members: z.array(familyMemberDetailsFormSchema),
});

export type EditFamilyHistoryFormSchema = z.infer<
  typeof editFamilyHistoryFormSchema
>;
export type FamilyMemberDetailsFormSchema = z.infer<
  typeof familyMemberDetailsFormSchema
>;
