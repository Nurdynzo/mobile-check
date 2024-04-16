import {
  DoubleCaretRightCircleIcon,
  ExclaimationIcon,
  HealthIcon,
  HeartIcon,
  TickCircleIcon,
} from '@/assets/svg';
import StatusLabel from '../../../cards/status-label';
import {useColors} from '@/hooks/useColors';
import {AppointmentStatusType} from '@/state/services/patientApi';
import {NOT_AVAILABLE} from '@/utils/constants';
import React from 'react';
import {FunctionComponent} from 'react';

const AppointmentStatus: FunctionComponent<{
  status?:
    | AppointmentStatusType
    | 'Rejected Scan'
    | 'Review scan'
    | 'Transferred to ward'
    | typeof NOT_AVAILABLE;
}> = ({status}) => {
  const {colors} = useColors();

  switch (status) {
    case 'Review scan':
      return (
        <StatusLabel
          text={status}
          color="alert500"
          bg={'alert25'}
          icon={<ExclaimationIcon fill={colors.alert500} />}
        />
      );

    case 'Rejected Scan':
      return (
        <StatusLabel
          text={status}
          color="danger300"
          bg={'danger25'}
          icon={<ExclaimationIcon fill={colors.danger300} />}
        />
      );

    case 'Not arrived':
      return (
        <StatusLabel
          text={status}
          color="danger300"
          bg={'danger25'}
          icon={<ExclaimationIcon fill={colors.danger300} />}
        />
      );
    case 'Processing':
      return (
        <StatusLabel
          text={status}
          color="alert500"
          bg={'alert25'}
          icon={<DoubleCaretRightCircleIcon />}
        />
      );
    case 'Awaiting vitals':
      return (
        <StatusLabel
          text={status}
          color="waiting400"
          bg={'waiting25'}
          icon={<HeartIcon fill={colors.waiting400} />}
        />
      );
    case 'Awaiting doctor':
      return (
        <StatusLabel
          text={status}
          color="primary400"
          bg={'primary25'}
          icon={<HeartIcon fill={colors.primary400} />}
        />
      );

    case 'Transferred to ward':
      return (
        <StatusLabel
          text={status}
          color="waiting400"
          bg={'waiting25'}
          icon={<HealthIcon fill={colors.waiting400} />}
        />
      );
    case 'Admitted to ward':
      return (
        <StatusLabel
          text={status}
          color="secondary400"
          bg={'secondary25'}
          icon={<HealthIcon fill={colors.secondary400} />}
        />
      );
    case 'Seen doctor':
      return (
        <StatusLabel
          text={status}
          color="success600"
          bg={'success25'}
          icon={<TickCircleIcon />}
        />
      );

    default:
      return (
        <StatusLabel
          text={NOT_AVAILABLE}
          color="transparent"
          bg={'transparent'}
        />
      );
  }
};

export default AppointmentStatus;
