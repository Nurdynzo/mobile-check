import {detectTouch, wp} from '@/resources/config';
import React from 'react';
import {Animated, Pressable, View} from 'react-native';
import AppText from '@/components/common/app-text';
import {ArrowLeftIcon} from '@/assets/svg';
import {useNavigation} from '@react-navigation/native';
import {animatedAppHeaderStyles} from './styles';
import {AnimatedAppHeaderProp} from './types';
import VoidFunction from '@/types/voidfunction';

const AnimatedAppHeader = ({
  animatedValue,
  maxHeight = 44,
  minHeight = 0,
  onPressBack,
  screenTitle,
  RightContent,
  extraStyles,
}: AnimatedAppHeaderProp) => {
  const MAX_HEIGHT = wp(maxHeight);
  const MIN_HEIGHT = wp(minHeight);

  const animateHeaderHeight = animatedValue.interpolate({
    inputRange: [0, MAX_HEIGHT - MIN_HEIGHT],
    outputRange: [MAX_HEIGHT, MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const styles = animatedAppHeaderStyles();
  return (
    <View>
      <Animated.ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.container, extraStyles]}
        style={[
          {
            height: animateHeaderHeight,
          },
        ]}>
        <AppBackButton onPressBack={onPressBack} />
        <AppText
          text={screenTitle}
          type="title_semibold"
          numberOfLines={1}
          align="center"
        />
        {RightContent ? (
          RightContent
        ) : (
          <View style={styles.trailingIconPlaceholder} />
        )}
      </Animated.ScrollView>
    </View>
  );
};

const AppBackButton = ({onPressBack}: {onPressBack?: VoidFunction}) => {
  const navigation = useNavigation();
  const styles = animatedAppHeaderStyles();
  return (
    <Pressable
      style={styles.backButton}
      hitSlop={detectTouch}
      onPress={
        onPressBack
          ? onPressBack
          : () => navigation.canGoBack() && navigation.goBack()
      }>
      <ArrowLeftIcon />
    </Pressable>
  );
};

export default AnimatedAppHeader;
