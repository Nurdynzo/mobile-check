import {StyleSheet} from 'react-native';
import {fs, wp} from '@/resources/config';
import {ColorDefinitions} from '@/resources/colors';

export const allInputStyles = ({colors}: {colors?: ColorDefinitions}) =>
  StyleSheet.create({
    cardWrapper: {
      height: 'auto',
      width: '100%',
      padding: wp(15),
      backgroundColor: colors?.white,
      borderRadius: wp(10),
      overflow: 'hidden',
    },
    resultCardWrapper: {
      height: 'auto',
      width: '100%',
      backgroundColor: colors?.white,
      borderRadius: wp(10),
      overflow: 'hidden',
      borderColor: colors?.neutral100,
      borderStyle: 'solid',
      borderWidth: 1,
    },
    wrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    cardTitle: {
      fontSize: fs(18),
    },
    line: {
      height: 1,
      width: '100%',
      backgroundColor: colors?.neutral100,
    },
    tabButtonContainer: {
      borderRadius: wp(32),
      backgroundColor: colors?.neutral25,
      width: wp(210),
      height: wp(40),
      padding: wp(4),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textUnderLine: {
      textDecorationLine: 'underline',
    },
    floatingBtn: {
      position: 'absolute',
      bottom: 30,
      right: 10,
      zIndex: 1000,
      width: 118,
    },
    rowSpaceBetween: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    marginLeftFive: {
      marginLeft: wp(5),
    },
    patientOtherInfoContainer: {
      columnGap: wp(12),
      height: wp(108),
      backgroundColor: colors?.neutral100,
      borderRadius: wp(15),
      paddingHorizontal: wp(16),
      paddingVertical: wp(8),
      rowGap: wp(12),
    },
  });
