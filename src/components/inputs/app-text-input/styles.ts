import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../resources/colors';
import {typography} from '../../../resources/fonts';
import {wp} from '@/resources/config';

export const appTextInputStyles = ({
  colors,
  isFocused,
  height,
  multiline,
  editable,
}: {
  colors: ColorDefinitions /* Todo: Type the Colors */;
  isFocused?: boolean;
  height?: number;
  multiline?: boolean;
  editable?: boolean;
}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: wp(height || 48),
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: wp(10),
      borderWidth: isFocused ? 1.5 : 1,
      borderColor: colors?.[isFocused ? 'primary400' : 'neutral100'],
      backgroundColor: colors?.[!editable ? 'primary50' : 'white'],
      paddingHorizontal: wp(multiline ? 12 : 20),
      gap: 10,
    },
    input: {
      flex: 1,
      height: '100%',
      paddingHorizontal: 0,
      paddingVertical: 0,
      color: 'black',
      ...typography.body_1_medium,
      lineHeight: undefined,
      ...(multiline && {
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        paddingTop: wp(3),
        ...typography.body_2_medium,
      }),
    },
    icon: {
      padding: wp(10),
      paddingHorizontal: wp(15),
    },
    label: {marginBottom: wp(8)},
  });
