import {AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import React from 'react';
import {Pressable, View} from 'react-native';
import {appTabSwitcherStyles} from './styles';
import {AppTabSwitcherProps} from './types';

const AppTabSwitcher = <T,>({
  selectedTab,
  tabs = [],
  onChangeTab = tab => tab,
  disabled,
  hasFlex = true,
  extraStyles,
}: AppTabSwitcherProps<T>) => {
  const {colors} = useColors();
  const styles = appTabSwitcherStyles({colors, hasFlex});
  if (!tabs.length) {
    return <></>;
  }
  return (
    <View style={[styles.tabContainer, extraStyles]}>
      {tabs.map((item, index) => (
        <Pressable
          disabled={disabled}
          onPress={() => onChangeTab(item)}
          key={index}
          style={[
            styles.tab,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              backgroundColor:
                item.name === selectedTab.name
                  ? colors?.neutral100
                  : 'transparent',
            },
          ]}>
          <AppText
            text={item.name}
            numberOfLines={1}
            type={'button_semibold'}
            align="center"
            color={item.name === selectedTab.name ? 'text400' : 'text300'}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default AppTabSwitcher;
