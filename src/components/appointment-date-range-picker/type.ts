import DateRange from '@/types/dateRange';

export type AppointmentDateRangerPickerType = {
  onOverlayTap: () => void;
  show: boolean;
  from?: Date;
  to?: Date;
  onChangeFrom?: (from?: Date) => void;
  onChangeTo?: (to?: Date) => void;
  onCancel: () => void;
  onDone: (result: DateRange) => void;
  mode?: 'time' | 'date';
};
