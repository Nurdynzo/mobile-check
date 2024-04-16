import {StyleSheet} from 'react-native';

export const loadingCircleProgressBarStyles = ({
  size,
  borderRadius,
}: {
  size: number;
  borderRadius: number;
}) =>
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      backgroundColor: 'transparent',
      borderRadius,
    },
    innerContainer: {
      position: 'absolute',
      top: size / 2 - size / 2,
      left: size / 2 - size / 2,
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
