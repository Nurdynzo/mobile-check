import {GetPatientLandingListOuptDto} from '@/state/services/patientApi';
import {BaseSheetProps} from '@/types/sheet';

type CommonProps = {
  data: GetPatientLandingListOuptDto;
  avatar?: string | null;
};

export type PatientAwaitingVitalsCardProps = CommonProps & {
  isBusyWithPhysician?: boolean;
};

export type FullCardDetailsSheetProps = {
  details: CommonProps;
} & BaseSheetProps;
