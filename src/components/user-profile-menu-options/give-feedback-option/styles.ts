import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const giveFeedbackOptionStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    container: {paddingHorizontal: wp(24), gap: wp(16), flex: 1},
    wrapper: {backgroundColor: colors.white, gap: wp(16)},
  });
