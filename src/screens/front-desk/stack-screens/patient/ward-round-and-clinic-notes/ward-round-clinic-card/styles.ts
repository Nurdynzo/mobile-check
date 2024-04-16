import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const wardroundClinicNoteItemCardStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    container: {
      padding: wp(12),
      backgroundColor: colors?.neutral25,
      borderRadius: wp(10),
      rowGap: wp(12),
    },
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerContainer: {gap: wp(4)},
    seperator: {marginTop: wp(8)},

    viewBtn: {paddingVertical: 0},
  });
