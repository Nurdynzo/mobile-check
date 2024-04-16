import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const allInputsCollapsibleContentStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    line: {
      height: 0.5,
      width: '95%',
      alignSelf: 'center',
      backgroundColor: colors?.neutral100,
    },
    container: {
      backgroundColor: colors.white,
      gap: 1,
      borderRadius: wp(10),
    },
    childrenContainer: {padding: wp(10), flex: 1},
    save: {alignSelf: 'flex-end', width: undefined, marginTop: wp(32)},
  });
