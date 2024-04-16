import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {appTabSwitcherStyles} from './styles';
import {AppTabSwitcherProps} from './types';
import {useColors} from '@/hooks/useColors';
import {TabButton} from '@/components/tab-button';

const AppTabButtonSwitcher: FunctionComponent<AppTabSwitcherProps> = ({
  selectedTab,
  tabs = [],
  onChangeTab = () => null,
  tabProps,
  containerStyles,
}) => {
  const {colors} = useColors();
  const styles = appTabSwitcherStyles({colors});
  if (!tabs.length) {
    return <></>;
  }
  return (
    <View style={[styles.tabContainer, containerStyles]}>
      {tabs.map(item => (
        <TabButton
          key={item.name}
          label={item.name}
          activeTab={selectedTab}
          setActiveTab={() => onChangeTab(item.name)}
          {...tabProps}
        />
      ))}
    </View>
  );
};

export default AppTabButtonSwitcher;
