import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const collapsibleSiteCardStyles = ({
  colors,
}: {
  colors?: ColorDefinitions;
}) =>
  StyleSheet.create({
    pillContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: wp(10),
    },
    bottomContent: {
      padding: wp(10),
      backgroundColor: colors?.white,
      borderRadius: wp(10),
    },
  });
