import {AudioWaveIcon} from '@/assets/svg';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import MaskedView from '@react-native-masked-view/masked-view';
import React, {FunctionComponent, useEffect, useRef} from 'react';
import {Animated, Easing, View} from 'react-native';
import {soundWaveProgressStyles} from './styles';
import {SoundWaveProgressProps} from './types';

const SoundWaveProgress: FunctionComponent<SoundWaveProgressProps> = ({
  filledColor,
  progress = 1,
  unFilledColor,
  width = 200,
  height = 30,
}) => {
  const w = wp(width);
  const h = wp(height);
  const animatedProgress = useRef(new Animated.Value(w * progress)).current;
  const previousProgress = useRef(progress);
  const {colors} = useColors();

  const styles = soundWaveProgressStyles({
    colors,
    height: h,
    width: w,
    filledColor,
    unFilledColor,
  });

  useEffect(() => {
    if (previousProgress.current !== progress) {
      previousProgress.current = progress;

      Animated.timing(animatedProgress, {
        toValue: w * progress,
        duration: 300, // Adjust animation duration as needed
        useNativeDriver: false,
        easing: Easing.linear, // Adjust easing function as needed
      }).start();
    }
  }, [progress, w, animatedProgress]);

  const animatedWidth = animatedProgress.interpolate({
    inputRange: [0, w],
    outputRange: [0, w],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <MaskedView maskElement={<AudioWaveIcon width={w} height={h} />}>
        <View style={styles.unFilledContainer}>
          <Animated.View
            style={[styles.filledContainer, {width: animatedWidth}]}
          />
        </View>
      </MaskedView>
    </View>
  );
};

export default SoundWaveProgress;
