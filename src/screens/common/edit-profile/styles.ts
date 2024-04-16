import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const editProfileStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      padding: wp(12),
      borderRadius: wp(10),
    },
    top: {
      paddingHorizontal: wp(24),
      marginBottom: wp(10),
    },
    editAvatar: {
      padding: wp(12),
      alignItems: 'center',
      flexDirection: 'row',
      gap: wp(32),
      backgroundColor: colors.default300,
      borderRadius: wp(10),
    },
    changePassword: {
      borderColor: colors.primary400,
      borderWidth: wp(1),
      width: wp(171),
    },
  });
