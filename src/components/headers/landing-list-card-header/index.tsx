import {MinusIcon} from '@/assets/svg';
import {AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {landingListCardHeaderStyles} from './styles';

const LandingListCardHeader: FunctionComponent<{
  hasInsurance: boolean;
  busyText: string;
}> = ({busyText, hasInsurance}) => {
  const {colors} = useColors();
  const styles = landingListCardHeaderStyles({colors, hasInsurance});
  return (
    <View style={styles.topPane}>
      <View style={styles.topPaneContent}>
        <MinusIcon width={12} height={12} fill={colors.black} />
        <AppText color="text400" type="status_tag_semibold" text={busyText} />
      </View>
    </View>
  );
};

export default LandingListCardHeader;
