import {StyleSheet} from 'react-native';
import {MENU_PADDING} from '../../globals/Const';
import {ColorDefinitions, ColorKeys} from '@/resources/colors';
import {wp} from '@/resources/config';

export const overlayStyles = ({
  colors,
  shouldUserOverlayContentStyles,
  offset,
  backgroundColor = 'overlay',
}: {
  backgroundColor?: ColorKeys;
  colors?: ColorDefinitions;
  shouldUserOverlayContentStyles?: boolean;
  offset?: number;
} = {}) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: colors?.[backgroundColor],
      padding: MENU_PADDING,
      paddingTop: offset,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    },
    overlayContent: shouldUserOverlayContentStyles
      ? {
          width: '100%',
          backgroundColor: shouldUserOverlayContentStyles
            ? colors?.white
            : 'transparent',
          borderRadius: wp(10),
          padding: wp(16),
          gap: wp(32),
        }
      : {},
    overlayTop: {
      gap: wp(16),
    },
  });
