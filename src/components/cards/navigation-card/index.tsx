import {ArrowRightIcon} from '@/assets/svg';
import {useColors} from '@/hooks/useColors';
import VoidFunction from '@/types/voidfunction';
import React, {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import {navigationCardStyles} from './styles';

/**
 *
 * @param height default to 60 and is scaled by wp
 */

const NavigationCard = ({
  height = 60,
  onPress,
  children,
  marginTop,
  marginBottom,
}: {
  height?: number;
  onPress?: VoidFunction;
  children: ReactNode;
  marginTop?: number;
  marginBottom?: number;
}) => {
  const {colors} = useColors();
  const styles = navigationCardStyles({colors, height});
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      style={[styles.container, {marginTop, marginBottom}]}
      onPress={onPress}>
      {children}
      <ArrowRightIcon />
    </TouchableOpacity>
  );
};

export default NavigationCard;
