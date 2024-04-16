import React, {useEffect} from 'react';
import {FunctionComponent} from 'react';
import {Animated, Easing, View} from 'react-native';
import {useColors} from '@/hooks/useColors';
import {AppText} from '../../common';
import {bottomTabStyles} from './styles';
import {TabButtonProps} from './type';

const AppTabButton: FunctionComponent<TabButtonProps> = ({
  icon,
  color,
  isFocused,
  label,
}) => {
  const {colors} = useColors();
  const styles = bottomTabStyles({
    colors,
    indicatorColor: color,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    const ease = Animated.timing(animatedValue, {
      toValue: isFocused ? 200 : 0,
      duration: 1000,
      easing: Easing.linear,
      isInteraction: true,
      useNativeDriver: false,
    });

    ease.start();

    // Clean up the animation when the component unmounts
    return () => ease.stop();
  }, [isFocused, animatedValue]);

  const maxWidth = animatedValue.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 200],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.indicatorContainer, {maxWidth}]}>
        <View style={[styles.indicator]} />
      </Animated.View>
      <View style={styles.iconAndLabelContainer}>
        <View style={styles.icon}>{icon}</View>
        <AppText text={label} style={{color}} type="nav_bar_menu_semibold" />
      </View>
    </View>
  );
};

export default AppTabButton;
