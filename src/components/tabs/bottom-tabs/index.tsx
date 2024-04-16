import {wp} from '@/resources/config';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FunctionComponent} from 'react';
import {Pressable} from 'react-native';
import AppTabButton from '@/components/buttons/app-bottom-tab';
import {useColors} from '@/hooks/useColors';
import {BottomTabsProps} from './type';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabs: FunctionComponent<BottomTabsProps> = ({tabs}) => {
  const {colors} = useColors();

  return (
    <Navigator
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: wp(10),
          height: wp(82),
        },
        tabBarIconStyle: {
          marginHorizontal: 2,
        },
        tabBarActiveTintColor: colors.primary400,
        tabBarInactiveTintColor: colors.default600,
      }}>
      {tabs.map(({name, component, Icon, InActiveIcon, label, disabled}) => (
        <Screen
          key={name}
          name={name}
          component={component}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({color, focused}) => (
              <AppTabButton
                label={label}
                icon={focused ? <Icon /> : <InActiveIcon />}
                color={color}
                isFocused={focused}
              />
            ),
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarButton: tabProps => (
              <Pressable {...tabProps} disabled={disabled} />
            ),
          }}
        />
      ))}
    </Navigator>
  );
};

export default BottomTabs;
