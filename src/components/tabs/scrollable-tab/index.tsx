import React, {FunctionComponent, useEffect, useRef} from 'react';
import {View} from 'react-native';
import {FlatList, TouchableOpacity, ViewStyle} from 'react-native';
import {useColors} from '../../../hooks/useColors';
import {AppText} from '../../common';
import {formTabStyles} from './styles';
import {ColorKeys} from '@/resources/colors';
import {TextTranformTypes} from '@/components/common/app-text/type';

const ScrollableTab: FunctionComponent<{
  tabs: string[];
  currentIndex: number | null | undefined;
  style?: ViewStyle;
  tabButtonStyle?: ViewStyle;
  tabButtonScrollViewStyle?: ViewStyle;
  onPress?: (index: number) => void;
  activeColor?: {background?: ColorKeys; border?: ColorKeys};
  unActiveColor?: {background?: ColorKeys; border?: ColorKeys};
  tabLabelTextTransform?: TextTranformTypes;
}> = ({
  style,
  tabs = [],
  currentIndex,
  onPress = () => null,
  activeColor,
  unActiveColor,
  tabButtonStyle,
  tabButtonScrollViewStyle,
  tabLabelTextTransform,
}) => {
  const {colors} = useColors();
  const scrollRef = useRef<FlatList>(null);

  const styles = formTabStyles();

  useEffect(() => {
    if (
      scrollRef.current &&
      currentIndex !== null &&
      currentIndex !== undefined
    ) {
      scrollRef?.current?.scrollToIndex({
        animated: true,
        index:
          currentIndex === 0 || currentIndex === tabs.length - 1
            ? currentIndex
            : currentIndex - 0.2,
      });
    }
  }, [currentIndex, tabs.length]);

  return (
    <View style={style}>
      <FlatList
        data={tabs}
        ref={scrollRef}
        keyExtractor={(_, index) => `${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.tabScrollContainer,
          tabButtonScrollViewStyle,
        ]}
        renderItem={({index, item}) => (
          <TouchableOpacity
            key={index}
            style={{
              ...styles.tab,
              backgroundColor:
                colors[
                  currentIndex === index
                    ? activeColor?.background ?? 'default300'
                    : unActiveColor?.background ?? 'neutral100'
                ],
              borderColor:
                colors[
                  currentIndex === index
                    ? activeColor?.border ?? 'default300'
                    : unActiveColor?.border ?? 'neutral100'
                ],
              ...tabButtonStyle,
            }}
            onPress={() => onPress(index)}>
            <AppText
              text={item}
              color="text400"
              textTransform={tabLabelTextTransform}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ScrollableTab;
