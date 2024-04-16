import {StyleSheet} from 'react-native';
import {MENU_PADDING} from '../../../../globals/Const';
import {ColorDefinitions} from '../../../../resources/colors';

export const viewAppointmentStyles = ({colors}: {colors?: ColorDefinitions}) =>
  StyleSheet.create({
    headerContainer: {
      marginBottom: 16,
    },
    content: {
      gap: 16,
    },
    floatingBtn: {
      position: 'absolute',
      bottom: 30,
      right: 10,
      zIndex: 1000,
      width: 118,
    },
    overlay: {
      flex: 1,
      backgroundColor: colors?.overlay,
      paddingTop: 200,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      padding: MENU_PADDING,
    },
    overlayContent: {
      width: '100%',
      backgroundColor: colors?.white,
      borderRadius: 10,
      padding: 16,
      gap: 32,
    },
    overlayTop: {
      gap: 16,
    },
    calenderBtnWrapper: {justifyContent: 'flex-end', gap: 24},
    gap: {gap: 32},
  });
