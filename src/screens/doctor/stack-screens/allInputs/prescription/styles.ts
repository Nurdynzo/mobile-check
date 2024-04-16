import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const prescriptionStyles = ({colors}: {colors?: ColorDefinitions}) =>
  StyleSheet.create({
    content: {
      backgroundColor: colors?.white,
      padding: wp(10),
      borderRadius: wp(10),
    },
    vaccinesContainer: {maxHeight: wp(500), paddingBottom: wp(100)},
    seperator: {marginTop: wp(32), marginBottom: wp(24)},
    cardHeader: {marginVertical: wp(16), paddingHorizontal: wp(24)},
    header: {padding: wp(16), paddingTop: 0},
    container: {
      paddingHorizontal: wp(20),
      gap: wp(20),
      marginTop: wp(10),
      flex: 1,
    },
    vaccineInfoRow: {
      flexDirection: 'row',
      padding: wp(5),
      justifyContent: 'space-between',
      gap: wp(15),
    },
    clearAllContainer: {
      justifyContent: 'flex-end',
      marginVertical: wp(15),
    },
    addVaccineContainer: {
      justifyContent: 'flex-end',
      marginVertical: wp(15),
      backgroundColor: colors?.transparent,
    },
    divider: {
      marginTop: wp(8),
    },
  });
