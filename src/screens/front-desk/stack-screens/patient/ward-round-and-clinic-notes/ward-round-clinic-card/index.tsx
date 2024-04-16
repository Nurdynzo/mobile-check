import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {wardroundClinicNoteItemCardStyles} from './styles';
import {WardroundClinicNoteItemCardProps} from './types';
import {useColors} from '@/hooks/useColors';
import {AppSeperator, AppText} from '@/components/common';
import {
  convertToReadableDate,
  convertToReadableTime,
} from '@/utils/helpers/convertDateTime';
import {AppButton} from '@/components/buttons';

const WardroundClinicNoteItemCard: FunctionComponent<
  WardroundClinicNoteItemCardProps
> = ({clinic, date, patientFullName}) => {
  const {colors} = useColors();
  const styles = wardroundClinicNoteItemCardStyles({colors});

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AppText
          text={clinic}
          type="title_semibold"
          color="text400"
          numberOfLines={1}
        />
        <AppText
          text={`${convertToReadableTime(date)} | ${convertToReadableDate(
            date,
            'DD MMM YYYY',
          )}`}
          type="caption_medium"
          color="text300"
        />
        <AppSeperator style={styles.seperator} />
      </View>

      <AppText
        text={`${patientFullName} visited ${clinic} on ${convertToReadableDate(
          date,
        )}`}
        type="body_2_semibold"
        color="text300"
      />

      <AppButton
        text="View"
        buttonColor="white"
        textColor="primary400"
        height={32}
        containerStyle={styles.viewBtn}
      />
    </View>
  );
};

export default WardroundClinicNoteItemCard;
