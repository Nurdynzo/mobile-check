import {StyleSheet} from 'react-native';
import {ColorDefinitions, ColorKeys} from '@/resources/colors';
import {wp} from '@/resources/config';

export const patientInfoCardStyles = ({
  colors,
  backgroundColor = 'neutral100',
}: {colors?: ColorDefinitions; backgroundColor?: ColorKeys} = {}) =>
  StyleSheet.create({
    container: {
      height: wp(62),
      flexDirection: 'row',
      padding: wp(12),
      backgroundColor: colors?.[backgroundColor],
      gap: wp(12),
      alignItems: 'center',
      borderRadius: wp(10),
    },
    detailsContainer: {gap: wp(4)},
  });
