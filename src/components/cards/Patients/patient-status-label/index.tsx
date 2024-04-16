import React, {ReactNode} from 'react';
import {useColors} from '../../../../hooks/useColors';
import {ColorKeys} from '../../../../resources/colors';
import {StatusLabel} from '../../index';
import {
  DoubleCaretRightCircleIcon,
  ExclaimationIcon,
  HealthIcon,
  HeartIcon,
  TickCircleIcon,
} from '../../../../assets/svg';
import {NOT_AVAILABLE} from '../../../../utils';

export const PatientStatusLabel = ({
  text = 'Button',
}: {
  icon?: ReactNode;
  text?: string;
  bg: ColorKeys;
  color?: ColorKeys;
}) => {
  const {colors} = useColors();

  const renderStatusLabel = () => {
    switch (text) {
      case 'Review scan':
        return {
          element: (
            <StatusLabel
              text={text}
              color="alert500"
              bg={'alert25'}
              icon={<ExclaimationIcon fill={colors.alert500} />}
            />
          ),
          color: 'alert500',
        };
      case 'Rejected Scan':
        return {
          element: (
            <StatusLabel
              text={text}
              color="danger300"
              bg={'danger25'}
              icon={<ExclaimationIcon fill={colors.danger300} />}
            />
          ),
          color: 'danger300',
        };
      case 'Processing':
        return {
          element: (
            <StatusLabel
              text={text}
              color="alert500"
              bg={'alert25'}
              icon={<DoubleCaretRightCircleIcon />}
            />
          ),
          color: 'alert500',
        };
      case 'Awaiting vitals':
        return {
          element: (
            <StatusLabel
              text={text}
              color="waiting400"
              bg={'waiting25'}
              icon={<HeartIcon fill={colors.waiting400} />}
            />
          ),
          color: 'waiting400',
        };
      case 'Awaiting doctor':
        return {
          color: 'primary400',
          element: (
            <StatusLabel
              text={text}
              color="primary400"
              bg={'primary25'}
              icon={<HeartIcon fill={colors.primary400} />}
            />
          ),
        };
      case 'Transferred to ward':
        return {
          color: 'waiting400',
          element: (
            <StatusLabel
              text={text}
              color="waiting400"
              bg={'waiting25'}
              icon={<HealthIcon fill={colors.waiting400} />}
            />
          ),
        };
      case 'Admitted to ward':
        return {
          color: 'secondary400',
          element: (
            <StatusLabel
              text={text}
              color="secondary400"
              bg={'secondary25'}
              icon={<HealthIcon fill={colors.secondary400} />}
            />
          ),
        };
      case 'Seen doctor':
        return {
          color: 'success600',
          element: (
            <StatusLabel
              text={text}
              color="success600"
              bg={'success25'}
              icon={<TickCircleIcon />}
            />
          ),
        };

      default:
        return {
          color: 'transparent',
          element: (
            <StatusLabel
              text={NOT_AVAILABLE}
              color="transparent"
              bg={'transparent'}
            />
          ),
        };
    }
  };

  return <>{renderStatusLabel().element}</>;
};
