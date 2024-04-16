import {StyleSheet} from 'react-native';
import {ColorDefinitions, ColorKeys} from '../../../resources/colors';
import {wp} from '@/resources/config';

export const inputBtnStyles = ({
  height = 48,
  width,
  colors,
  isFocus,
  borderColor = 'neutral100',
  buttonColor = 'transparent',
  disabled,
}: {
  height?: number;
  width?: number;
  colors?: ColorDefinitions;
  isFocus?: boolean;
  disabled?: boolean;
  borderColor?: ColorKeys;
  buttonColor?: ColorKeys;
} = {}) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    inputContainer: {
      height: wp(height),
      width: width ? wp(width) : '100%',
      borderWidth: isFocus ? 1.5 : 1,
      borderColor:
        colors?.[
          disabled ? 'neutral100' : isFocus ? 'primary400' : borderColor
        ],
      flexDirection: 'row',
      borderRadius: wp(10),
      alignItems: 'center',
      paddingHorizontal: wp(20),
      backgroundColor: colors?.[disabled ? 'primary50' : buttonColor],
    },
    label: {marginBottom: 8},
  });
