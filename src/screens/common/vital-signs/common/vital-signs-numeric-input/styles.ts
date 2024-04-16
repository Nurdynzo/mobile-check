import {ColorDefinitions, ColorKeys} from '@/resources/colors';
import {wp} from '@/resources/config';
import {typography} from '@/resources/fonts';
import {StyleSheet} from 'react-native';

export const VitalSignsNumericInputStyles = ({
  colors,
  hasBorder,
  disabled,
  borderColor = 'primary400',
  bg = 'transparent',
}: {
  colors: ColorDefinitions;
  hasBorder?: boolean;
  bg?: ColorKeys;
  borderColor?: ColorKeys;
  disabled?: boolean;
}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      paddingBottom: wp(16),
      gap: wp(16),
      borderBottomColor: colors.text50,
      borderWidth: 0,
      borderBottomWidth: hasBorder ? 0.2 : 0,
    },
    counter: {
      overflow: 'hidden',
      flexDirection: 'row',
    },
    textCountInputContainer: {
      width: wp(56),

      alignItems: 'center',
      justifyContent: 'center',
    },
    textCountInput: {
      color: colors.text400,
      ...typography.subtitle_bold,
      lineHeight: undefined,
      paddingHorizontal: wp(10),
      flex: 1,
    },
    rightBorders: {
      borderRadius: 0,
      borderTopLeftRadius: wp(8),
      borderBottomLeftRadius: wp(8),
    },
    leftBorders: {
      borderRadius: 0,
      borderTopRightRadius: wp(8),
      borderBottomRightRadius: wp(8),
    },
    buttonContainer: {
      paddingHorizontal: wp(16),
      paddingVertical: wp(14),
      borderRadius: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      height: wp(36),
      width: wp(36),
      backgroundColor: colors[bg],
      borderWidth: 1,
      borderColor: colors[borderColor],
      opacity: disabled ? 0.5 : 1,
    },
    numericButtonContainer: {
      paddingHorizontal: wp(16),
      paddingVertical: wp(14),
      borderRadius: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      height: wp(36),
      width: wp(36),
      backgroundColor: colors[bg],
      borderWidth: 1,
      borderColor: colors[borderColor],
      opacity: disabled ? 0.5 : 1,
    },
    unitContainer: {
      flex: 1,
      alignSelf: 'flex-end',
    },
    unitBtn: {flexDirection: 'row', alignItems: 'center'},
    titleRowContainer: {flex: 1, paddingRight: wp(16)},
  });
