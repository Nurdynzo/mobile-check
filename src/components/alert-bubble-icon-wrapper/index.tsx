import {View} from 'react-native';
import {alertBubbleIconWrapperStyles} from './styles';
import React from 'react';
import {useColors} from '@/hooks/useColors';
import {ColorKeys} from '@/resources/colors';

/**
 * A component that serves as the circular base container
 * for an icon passed to an AnimatedBubble component,
 * see NextOfKinDetailsView, Insurance history et al for usage
 *
 * @param icon icon to be wrapped
 * @param colorKey defaults to primary100
 */
const AlertBubbleIconWrapper = ({
  icon,
  colorKey = 'primary100',
}: {
  icon: JSX.Element;
  colorKey?: ColorKeys;
}) => {
  const {colors} = useColors();
  const styles = alertBubbleIconWrapperStyles(colors[colorKey]);
  return <View style={styles.container}>{icon}</View>;
};

export default AlertBubbleIconWrapper;
