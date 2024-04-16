import React, {FunctionComponent, ReactNode, useEffect} from 'react';
import {Animated, Easing, View} from 'react-native';
import {useColors} from '@/hooks/useColors';
import {ColorKeys} from '@/resources/colors';
import {animatedBubbleStyles} from './styles';

const AnimatedBubble: FunctionComponent<{
  Icon: ReactNode;
  bgColor?: ColorKeys;
  size?: number;
}> = ({Icon, bgColor, size}) => {
  const scaleValue = new Animated.Value(1);

  const {colors} = useColors();

  useEffect(() => {
    const scaleAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );

    scaleAnimation.start();

    // Clean up the animation when the component unmounts
    return () => scaleAnimation.stop();
  });

  const animatedStyles = {
    transform: [{scale: scaleValue}],
  };

  const styles = animatedBubbleStyles({size, bgColor, colors});

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, animatedStyles]} />
      <View style={styles.iconContainer}>{Icon}</View>
    </View>
  );
};

export default AnimatedBubble;
