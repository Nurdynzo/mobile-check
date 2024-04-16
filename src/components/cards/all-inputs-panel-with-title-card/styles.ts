import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const allInputsPanelWithTitleCardStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) => {
  return StyleSheet.create({
    container: {
      borderRadius: wp(10),
      padding: wp(10),
      marginBottom: 40,
      backgroundColor: colors.white,
    },
    titleConatiner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    divider: {
      marginTop: wp(8),
      marginBottom: wp(16),
    },
  });
};
