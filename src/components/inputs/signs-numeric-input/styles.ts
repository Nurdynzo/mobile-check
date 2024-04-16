import {ColorDefinitions, ColorKeys} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const signsNumericInputStyles = ({
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
      flex: 1,
      paddingBottom: wp(16),
      borderBottomColor: colors.text50,
      borderWidth: 0,
      borderBottomWidth: hasBorder ? 0.2 : 0,
    },
    counter: {
      overflow: 'hidden',
      flexDirection: 'row',
    },
    count: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: wp(16),
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
    name: {
      flex: 1,
      alignSelf: 'flex-end',
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
  });
