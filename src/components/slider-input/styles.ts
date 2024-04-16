import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const sliderStyles = ({
  number,
  colors,
}: {
  number: number;
  colors?: ColorDefinitions;
}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      gap: wp(10),
    },
    numbersContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    slider: {
      width: '100%',
    },
    track: {
      height: wp(30),
      borderRadius: wp(50),
    },
    round: {
      width: number > 0 ? wp(50) : wp(20),
    },
    thumb: {
      width: 30,
      borderTopRightRadius: number > 0 ? wp(50) : wp(8),
      borderBottomRightRadius: number > 0 ? wp(50) : wp(8),
      borderTopLeftRadius: wp(10),
      borderBottomLeftRadius: wp(10),
      borderRadius: wp(50),
      height: wp(30),
      backgroundColor: colors?.orange,
      justifyContent: 'center',
      alignItems: 'center',
    },
    zeroThumb: {
      width: wp(30),
      borderRadius: wp(50),
      height: wp(30),
      backgroundColor: colors?.orange,
      justifyContent: 'center',
      alignItems: 'center',
    },
    trackLane: {
      backgroundColor: 'green',
      height: wp(30),
      borderRadius: wp(50),
    },
  });
