import {AnimatableNumericValue, StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../resources/colors';
import {ToggleDimensions} from './type';

export const toggleSwitchStyles = ({
  dimensions,
  toggleSwitchBgColor,
  circleColor,
  offsetX = 0,
}: {
  colors?: ColorDefinitions;
  dimensions?: ToggleDimensions;
  toggleSwitchBgColor?: string;
  circleColor?: string;
  offsetX?: AnimatableNumericValue;
} = {}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    toggleSwitch: {
      justifyContent: 'center',
      width: dimensions?.width,
      borderRadius: 20,
      padding: dimensions?.padding,
      backgroundColor: toggleSwitchBgColor,
      paddingBottom: dimensions?.padding ?? 0,
    },
    insideCircle: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 4,
      left: 0,
      position: 'absolute',
      backgroundColor: circleColor,
      transform: [{translateX: offsetX}],
      width: dimensions?.circleWidth,
      height: dimensions?.circleHeight,
      borderRadius: (dimensions?.circleWidth ?? 0) / 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2.5,
      elevation: 1.5,
    },
    label: {flex: 1},
  });

export const calculateDimensions = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return {
        width: 40,
        padding: 10,
        circleWidth: 15,
        circleHeight: 15,
        translateX: 22,
      };
    case 'medium':
      return {
        width: 54,
        padding: 16,
        circleWidth: 27,
        circleHeight: 27,
        translateX: 34,
      };
    case 'large':
      return {
        width: 70,
        padding: 20,
        circleWidth: 30,
        circleHeight: 30,
        translateX: 38,
      };
    default:
      return {
        width: 46,
        padding: 12,
        circleWidth: 18,
        circleHeight: 18,
        translateX: 26,
      };
  }
};
