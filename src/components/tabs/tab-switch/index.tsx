import React from 'react';
import {AppText} from '@/components/common';
import {tabSwitchStyles} from '@/components/tabs/tab-switch/styles';
import {useColors} from '@/hooks/useColors';
import {ScrollView, TouchableOpacity, View, ViewStyle} from 'react-native';

interface TabProps {
  title: string;
  active: boolean;
  onPress: () => void;
  disabled?: boolean;
}

interface TabComponentProps {
  tabs: {title: string; key: string; disabled?: boolean}[];
  activeTab: string;
  setActiveTab: (tabKey: string) => void;
  extraStyles?: ViewStyle;
}

const AppTabSwitch = ({active, onPress, title, disabled}: TabProps) => {
  const {colors} = useColors();
  const styles = tabSwitchStyles({colors});
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress} disabled={disabled}>
      <View style={styles.tabContent}>
        <AppText
          text={title}
          style={[styles.tabText, active && styles.activeTabText]}
        />
        <View
          style={[styles.tabIndicator, active && styles.activeTabIndicator]}
        />
      </View>
    </TouchableOpacity>
  );
};

export const AppTabComponent = ({
  tabs,
  activeTab,
  setActiveTab,
  extraStyles,
}: TabComponentProps) => {
  const {colors} = useColors();
  const styles = tabSwitchStyles({colors});

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.container, extraStyles]}>
      {tabs.map(tab => (
        <AppTabSwitch
          key={tab.key}
          disabled={tab?.disabled}
          title={tab.title}
          active={activeTab === tab.key}
          onPress={() => setActiveTab(tab.key)}
        />
      ))}
    </ScrollView>
  );
};
