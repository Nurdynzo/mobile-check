import {AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import React, {FunctionComponent} from 'react';
import {Pressable, View} from 'react-native';
import {
  bottomIndicatorTabStyles,
  bottomIndicatorTabSwitcherStyles,
} from './styles';
import {AppTabSwitcherProps, BottomIndicatorTabProps} from './type';

const BottomIndicatorTabSwitcher = <T extends string>({
  selectedTab,
  onChangeTab = () => null,
  tabs = [],
  tabProps,
  containerStyles,
  uniqueTabStyles,
}: AppTabSwitcherProps<T>) => {
  if (!tabs.length) {
    return <></>;
  }
  const styles = bottomIndicatorTabSwitcherStyles;

  return (
    <View style={[styles.container, containerStyles]}>
      {tabs.map(el => (
        <BottomIndicatorTab
          text={el}
          key={el}
          onPress={() => onChangeTab(el)}
          isSelected={el === selectedTab}
          {...{
            ...tabProps,
            otherStyles: {...tabProps?.otherStyles, ...uniqueTabStyles?.[el]},
          }}
        />
      ))}
    </View>
  );
};

const BottomIndicatorTab: FunctionComponent<
  BottomIndicatorTabProps & {
    onPress: () => void;
    isSelected?: boolean;
    text: string;
  }
> = ({
  onPress,
  activeIndicatorColor = 'primary400',
  activeTextColor = 'primary400',
  inActiveIndicatorColor = 'transparent',
  inActiveTextColor = 'text300',
  isSelected,
  otherStyles,
  textType = 'button_semibold',
  text,
}) => {
  const {colors} = useColors();
  const styles = bottomIndicatorTabStyles({
    colors,
    indicatorColor: isSelected ? activeIndicatorColor : inActiveIndicatorColor,
  });

  return (
    <Pressable style={[styles.tabContainer, otherStyles]} onPress={onPress}>
      <View style={styles.tabContent}>
        <AppText
          text={text}
          type={textType}
          color={isSelected ? activeTextColor : inActiveTextColor}
          align="center"
        />
      </View>
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
      </View>
    </Pressable>
  );
};

export default BottomIndicatorTabSwitcher;
