import {useColors} from '../../../hooks/useColors';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {noteCardStyles} from './styles';
import {NoteCardProps} from './types';
import {AppText} from '../../common';
import {
  convertToReadableDate,
  convertToReadableTime,
} from '../../../utils/helpers/convertDateTime';

const WardroundClinicNoteItemCard: FunctionComponent<NoteCardProps> = ({
  clinic,
  date,
  patientFullName,
}) => {
  const {colors} = useColors();
  const styles = noteCardStyles({colors});
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <AppText
          text={clinic}
          type="body_1_semibold"
          color="text400"
          numberOfLines={1}
          style={styles.clinic}
        />
        <View style={styles.dateTimeContainer}>
          <AppText
            text={convertToReadableTime(date)}
            type="caption_medium"
            color="text300"
            align="right"
          />
          <AppText
            text={convertToReadableDate(date, 'DD MMM YYYY')}
            type="caption_medium"
            color="text300"
            align="right"
          />
        </View>
      </View>
      <AppText
        text={`${patientFullName} visited ${clinic} on ${convertToReadableDate(
          date,
        )}`}
        type="body_1_medium"
        color="text400"
      />
    </View>
  );
};

export default WardroundClinicNoteItemCard;
