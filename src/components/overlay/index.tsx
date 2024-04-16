import React, {ReactNode} from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import {Portal} from 'react-native-portalize';
import {useColors} from '@/hooks/useColors';
import {overlayStyles} from './styles';
import {ColorKeys} from '@/resources/colors';

/**
 * This component is used to render other components as modals or overlay
 *
 * @param shouldUserOverlayContentStyles defaults to true
 * @param offset defaults to 62
 * @param backgroundColor defaults to overlay ColorKey
 */
const Overlay = ({
  children,
  show,
  onOverlayTap,
  containerStyles,
  offset = 62,
  backgroundColor = 'overlay',
  // TODO(Philip): Correct the typo in the name of this prop
  shouldUserOverlayContentStyles = true,
}: {
  children: ReactNode;
  show: boolean;
  onOverlayTap?: () => void;
  offset?: number;
  containerStyles?: ViewStyle;
  backgroundColor?: ColorKeys;
  shouldUserOverlayContentStyles?: boolean;
}) => {
  const {colors} = useColors();
  const styles = overlayStyles({
    colors,
    shouldUserOverlayContentStyles,
    offset,
    backgroundColor,
  });
  return (
    <>
      {show && (
        <Portal>
          <Pressable onPress={onOverlayTap} style={styles.overlay}>
            <View style={[styles.overlayContent, containerStyles]}>
              {children}
            </View>
          </Pressable>
        </Portal>
      )}
    </>
  );
};
export default Overlay;
