import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const nursingCarePlanStyles = ({colors}: {colors?: ColorDefinitions}) =>
  StyleSheet.create({
    screen: {
      gap: wp(16),
      paddingBottom: wp(32),
    },
    content: {
      backgroundColor: colors?.white,
      paddingHorizontal: wp(10),
      borderRadius: wp(10),
    },
    header: {paddingHorizontal: wp(16)},
    line: {
      height: 0.5,
      width: '100%',
      backgroundColor: colors?.neutral100,
      marginBottom: wp(16),
    },
    saveButton: {
      alignSelf: 'flex-end',
      width: undefined,
      marginVertical: wp(32),
    },
    sheetContainer: {
      paddingHorizontal: wp(24),
      gap: wp(20),
      flex: 1,
    },
    sheetContent: {padding: wp(20), paddingTop: 0, gap: wp(16)},
    dropdownHeader: {
      padding: wp(10),
      borderRadius: wp(10),
    },
    bottomContent: {
      padding: wp(10),
      backgroundColor: colors?.white,
      borderRadius: wp(10),
    },
    pillContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: wp(10),
    },
    seperator: {marginTop: wp(32), marginBottom: wp(24)},
  });
