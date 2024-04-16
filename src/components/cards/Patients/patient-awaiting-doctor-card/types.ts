import {GetPatientLandingListOuptDto} from '@/state/services/patientApi';
import {BaseSheetProps} from '@/types/sheet';

type CommonProps = {
  avatar?: string | null;
  data: GetPatientLandingListOuptDto;
};

export type PatientAwaitingDoctorCardProps = CommonProps & {
  isBusyWithPhysician?: boolean;
};

export type FullCardDetailsSheetProps = {
  details: CommonProps;
} & BaseSheetProps;
