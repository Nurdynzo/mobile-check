import {EnumAppointmentRepeatType} from '@/types/frondesk/appointment/types';
import {DOES_NOT_REPEAT} from '@/utils/constants';

export const repeatTypeOptions = [
  {
    item: {
      id: '1',
      value: DOES_NOT_REPEAT,
      data: EnumAppointmentRepeatType.DoesNotRepeat,
    },
  },
  {
    item: {
      id: '2',
      value: 'Daily',
      data: EnumAppointmentRepeatType.Daily,
    },
  },
  {
    item: {
      id: '3',
      value: 'Weekly',
      data: EnumAppointmentRepeatType.Weekly,
    },
  },
  {
    item: {
      id: '4',
      value: 'Monthly',
      data: EnumAppointmentRepeatType.Monthly,
    },
  },
  {
    item: {
      id: '5',
      value: 'Annually',
      data: EnumAppointmentRepeatType.Annually,
    },
  },
  {
    item: {
      id: '6',
      value: 'Every weekday (Mon to Fri)',
      data: EnumAppointmentRepeatType.Weekdays,
    },
  },
  {
    item: {
      id: '7',
      value: EnumAppointmentRepeatType.Custom,
      data: 'Custom',
    },
  },
];
