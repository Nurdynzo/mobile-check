import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const collapsibleNotEntryViewStyles = ({
  colors,
  marginTop = 16,
}: {
  colors: ColorDefinitions;
  marginTop?: number;
}) => {
  return StyleSheet.create({
    openedPanelContainer: {
      paddingHorizontal: wp(16),
      paddingBottom: wp(16),
      marginTop: wp(marginTop),
      borderRadius: wp(10),
      backgroundColor: colors.white,
      justifyContent: 'space-between',
    },
    openedPanelInputContainer: {paddingHorizontal: wp(12), paddingTop: wp(8)},
    openedPanelInput: {textAlignVertical: 'top'},
    openedPanelClosedButton: {
      height: wp(60),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
};
