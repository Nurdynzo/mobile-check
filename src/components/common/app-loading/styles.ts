import {ColorDefinitions} from '@/resources/colors';
import {StyleSheet} from 'react-native';

export const appLoadingStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    placeOntop: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors?.background,
      zIndex: 1000,
    },
  });
