import {NOT_AVAILABLE} from '@/utils/constants';
import {AppointmentStatusType} from '../../../state/services/appointmentApi';

export type AppointmentCardProps = {
  title?: string;
  appointmentScanStatus?: string;
  clinicName?: string;
  clinician?: string;
  time?: string | number;
  date?: string | number;
  note?: string | null;
  appointmentID: number;
  patientID: number;
  insuranceStatus?: string;
  onPressDelete?: () => void;
  onPressSetReminder?: () => void;
  onReferralUploadSuccess?: () => void;
  onCreateInvoice?: () => void;
  onPressEdit?: () => void;
  status?:
    | AppointmentStatusType
    | 'Rejected Scan'
    | 'Review scan'
    | 'Transferred to ward'
    | typeof NOT_AVAILABLE;

  referralLetter?: string | null;
  showHeaderTitle?: boolean;
  removeMoreBtn?: boolean;
  onCreateAppointment?: () => void;
};
