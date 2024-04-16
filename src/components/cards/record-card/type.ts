import {ReactNode} from 'react';
import {AppointmentStatusType} from '@/state/services/appointmentApi';
import {insuranceCardDetailsProps} from '../insurance-card-details/type';
import {insuranceCardProps} from '../insurance-card/type';
import {nextOfKinCardDetailsProps} from '../next-of-kin-card-details/type';
import {nextOfKinCardProps} from '../next-of-kin-card/type';
import {paperRecordStatusProps} from '../paper-record-status/type';
import {RecordRowProps} from '../record-row/type';
import {statusLabelProps} from '../status-label/type';
import {NOT_AVAILABLE} from '@/utils/constants';
import {
  AppointmentPatientDto,
  AppointmentType,
} from '@/state/services/patientApi';

export type appButtonProps = {
  appButtonText: string;
  onPress?: () => null;
  bg?: string;
  isDisabled?: boolean;
  hasPadding?: boolean;
  width?: string | number;
  icon?: ReactNode;
};

export type RecordCardProps = appButtonProps &
  insuranceCardProps &
  insuranceCardDetailsProps &
  nextOfKinCardProps &
  nextOfKinCardDetailsProps &
  paperRecordStatusProps &
  RecordRowProps &
  statusLabelProps & {
    appointmentId: number;
    patient: AppointmentPatientDto;
    appointmentTitle: string;
    appointmentScanStatus?: string;
    clinicName: string;
    appointmentTime: string;
    appointmentDate: string;
    appointmentType: AppointmentType | typeof NOT_AVAILABLE;
    status:
      | AppointmentStatusType
      | 'Rejected Scan'
      | 'Review scan'
      | 'Transferred to ward'
      | typeof NOT_AVAILABLE;
  };
