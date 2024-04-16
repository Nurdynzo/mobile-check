import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const woundDressingStyles = ({colors}: {colors?: ColorDefinitions}) =>
  StyleSheet.create({
    content: {
      backgroundColor: colors?.white,
      padding: wp(10),
      borderRadius: wp(10),
    },
    cardHeader: {marginVertical: wp(16), paddingHorizontal: wp(24)},
    header: {padding: wp(16), paddingTop: 0},
    container: {
      paddingHorizontal: wp(20),
      gap: wp(20),
      marginTop: wp(10),
      flex: 1,
    },
    line: {
      height: 0.5,
      width: '100%',
      backgroundColor: colors?.neutral100,
      marginTop: wp(16),
    },
    save: {alignSelf: 'flex-end', width: undefined, marginVertical: wp(32)},
    sheetContainer: {
      paddingHorizontal: wp(24),
      gap: wp(20),
      flex: 1,
    },
    sheetContent: {padding: wp(20), paddingTop: 0, gap: wp(16)},
    seperator: {marginTop: wp(32), marginBottom: wp(24)},
  });
