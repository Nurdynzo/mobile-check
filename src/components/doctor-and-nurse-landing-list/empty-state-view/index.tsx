import {ActiveCalendarIcon} from '@/assets/svg';
import AlertBubbleIconWrapper from '@/components/alert-bubble-icon-wrapper';
import AnimatedBubble from '@/components/animated-bubble';
import {AppAlert} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import VoidFunction from '@/types/voidfunction';
import React, {FunctionComponent} from 'react';

const DoctorAndNurseLandingListEmptyStateView: FunctionComponent<{
  title?: string;
  description?: string;
  onRefresh: VoidFunction;
}> = ({onRefresh, ...rest}) => {
  const {colors} = useColors();

  return (
    <AppAlert
      {...rest}
      buttonText="Refresh"
      buttonWidth={null}
      onPress={onRefresh}
      containerStyle={{marginTop: wp(64)}}
      icon={
        <AnimatedBubble
          bgColor={'primary25'}
          size={90}
          Icon={
            <AlertBubbleIconWrapper
              colorKey={'primary100'}
              icon={
                <ActiveCalendarIcon
                  fill={colors.white}
                  width={36}
                  height={36}
                />
              }
            />
          }
        />
      }
    />
  );
};

export default DoctorAndNurseLandingListEmptyStateView;
