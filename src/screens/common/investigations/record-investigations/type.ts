import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import {SingleInvestigationTestType} from './common/available-investigation-tests-view/use-get-available-investigations-tests/type';
import {RangeInputFormResponseValues} from './common/form/ranges-input-form/type';

export type SpecimenInvestigationTestFormDatesType = {
  dateOfSampleCollection: Date | null;
  timeOfSampleCollection: Date | null;
  dateOfResult: Date | null;
  timeOfResult: Date | null;
};

export type SpecimenInvestigationTestFormType = {
  specimens: SnowstormSimpleResponseDto | null;
  conclusions: SnowstormSimpleResponseDto | null;
  images: Array<string>;
} & SpecimenInvestigationTestFormDatesType;

export type RecordInvestigationTypes = {
  selectedRequest: SnowstormSimpleResponseDto;
};

export interface RawTestDetailsTypes {
  encounterId: number;
  reviewerId?: number;
  patientId: number;
  selectedTest: SingleInvestigationTestType;
  testDynamicRangeDetails: RangeInputFormResponseValues[];
  testRegularDetails: SpecimenInvestigationTestFormType;
}
