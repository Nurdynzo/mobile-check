import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {useColors} from '@/hooks/useColors';
import {patientInfoCardStyles} from './styles';
import {PatientInfoCardProps} from './type';
import {AppRow, AppText, DisplayImage} from '@/components/common';
import {wp} from '@/resources/config';
import {NOT_AVAILABLE, TEMP_AVATAR_URL} from '@/utils/index';
import {calculateAge} from '@/utils/helpers';

const PatientInfoCard: FunctionComponent<PatientInfoCardProps> = ({
  dateOfBirth,
  code,
  gender,
  fullName,
  containerStyle,
  avatar,
  StatusContent,
  backgroundColor,
}) => {
  const {colors} = useColors();
  const styles = patientInfoCardStyles({colors, backgroundColor});
  const age = calculateAge(dateOfBirth);
  const picUrl = avatar === NOT_AVAILABLE ? TEMP_AVATAR_URL : avatar;
  return (
    <View style={[styles.container, containerStyle]}>
      <DisplayImage uri={picUrl} size={32} borderRadius={16} />
      <View style={styles.detailsContainer}>
        <AppRow extraStyles={{gap: wp(20)}}>
          <AppText text={fullName || NOT_AVAILABLE} type="body_1_semibold" />
          {StatusContent}
        </AppRow>
        <AppText
          text={`${code || NOT_AVAILABLE} | ${age} | ${
            gender || NOT_AVAILABLE
          }`}
          type="caption_medium"
          color="text300"
        />
      </View>
    </View>
  );
};

export default PatientInfoCard;
