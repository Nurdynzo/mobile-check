import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import {SingleInvestigationTestType} from '../available-investigation-tests-view/use-get-available-investigations-tests/type';

export type RadiologyAndPulmFormType = {
  dateOfResult: Date | null;
  timeOfResult: Date | null;
  conclusions: SnowstormSimpleResponseDto | null;
  images: Array<string>;
};

export interface RawRadiologyAndPulmTestDetailsTypes {
  encounterId: number;
  patientId: number;
  selectedTest: SingleInvestigationTestType;
  testRegularDetails: RadiologyAndPulmFormType;
}
