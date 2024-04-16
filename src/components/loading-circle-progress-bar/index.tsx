import {useColors} from '@/hooks/useColors';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, TouchableOpacity, View} from 'react-native';
import {Circle, Svg} from 'react-native-svg';
import {loadingCircleProgressBarStyles} from './styles';
import {LoadingCircleProgressBarProps} from './type';

const LoadingCircleProgressBar: React.FC<LoadingCircleProgressBarProps> = ({
  progress = 0,
  size,
  strokeWidth,
  filledColor = 'primary400',
  unfilledColor = 'neutral100',
  InnerView,
  disableOnPress,
  onPress,
}) => {
  const {colors} = useColors();
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  // Use a useRef hook to store the progress animation value
  const progressAnimation = useRef(new Animated.Value(0)).current;

  const styles = loadingCircleProgressBarStyles({
    size,
    borderRadius: radius,
  });

  useEffect(() => {
    // Animate the progress value when the progress prop changes
    Animated.timing(progressAnimation, {
      toValue: progress,
      duration: 1000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [progress, progressAnimation]);

  // Calculate the progress offset based on the progress animation value
  const progressOffset = progressAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
    extrapolate: 'clamp',
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disableOnPress}
      style={styles.container}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={colors?.[unfilledColor]}
          fill="transparent"
        />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={colors?.[filledColor]}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          fill="transparent"
        />
      </Svg>
      <View style={styles.innerContainer}>{InnerView && <InnerView />}</View>
    </TouchableOpacity>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default LoadingCircleProgressBar;
