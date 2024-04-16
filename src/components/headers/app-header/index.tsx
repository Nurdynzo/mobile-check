import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, View} from 'react-native';
import {ArrowLeftIcon} from '@/assets/svg';
import {AppText} from '../../common';
import {appHeaderStyles} from './styles';
import {AppHeaderProp} from './type';
import {detectTouch} from '@/resources/config';
import {GeneralNavProp} from '@/navigation/types';

const AppHeader = ({
  LeftContent,
  RightContent,
  middleTitle,
  MiddleContent,
  paddingHorizontal = 24,
  paddingBottom = 10.5,
  paddingVertical = 10.5,
  extraStyles,
  onPressBack,
}: AppHeaderProp) => {
  const styles = appHeaderStyles({
    paddingHorizontal,
    paddingBottom,
    paddingVertical,
  });
  const navigation = useNavigation<GeneralNavProp>();

  const handleOnPress = () => {
    if (onPressBack) {
      onPressBack();
      return;
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, extraStyles]}>
      {LeftContent ? (
        LeftContent
      ) : (
        <Pressable onPress={handleOnPress} hitSlop={detectTouch}>
          <ArrowLeftIcon />
        </Pressable>
      )}
      {MiddleContent ? (
        MiddleContent
      ) : (
        <AppText
          text={middleTitle}
          type={'title_semibold'}
          numberOfLines={1}
          align={'center'}
        />
      )}
      {RightContent ? (
        RightContent
      ) : (
        <View style={styles.trailingIconPlaceholder} />
      )}
    </View>
  );
};

export default AppHeader;
