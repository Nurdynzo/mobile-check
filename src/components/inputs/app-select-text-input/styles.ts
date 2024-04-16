import {StyleSheet} from 'react-native';
import {ColorDefinitions, ColorKeys} from '../../../resources/colors';
import {typography} from '../../../resources/fonts';
import {wp} from '@/resources/config';

export const inputBtnStyles = ({
  colors,
  isFocus,
  borderColor = 'neutral100',
  inputColor = 'transparent',
  disabled,
}: {
  colors?: ColorDefinitions;
  isFocus?: boolean;
  disabled?: boolean;
  inputColor?: ColorKeys | 'transparent';
  borderColor?: ColorKeys | 'transparent';
} = {}) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    inputContainer: {
      borderWidth: isFocus ? 1.5 : 1,
      borderColor: colors?.[isFocus ? 'primary400' : borderColor],
      flexDirection: 'row',
      borderRadius: wp(10),
      alignItems: 'center',

      paddingHorizontal: wp(20),
      opacity: disabled ? 0.5 : 1,
      backgroundColor: colors?.[inputColor],
      height: wp(48),
    },
    label: {marginBottom: 8},
    btnInputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    seperatorContainer: {
      height: '100%',
      width: 1,
      marginHorizontal: wp(10),
      paddingVertical: wp(14),
    },
    seperator: {flex: 1, backgroundColor: colors?.neutral100},
    textInput: {
      flex: 1,
      height: '100%',
      paddingHorizontal: 0,
      paddingVertical: 0,
      color: 'black',
      ...typography.body_1_medium,
      lineHeight: undefined,
    },
    selectText: {flex: 1},
  });
