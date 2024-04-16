/* eslint-disable react/no-unstable-nested-components */
import {NursePatients} from '@/screens/nurse/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {
  ActiveAppointmentsIcon,
  ActiveAutoAssignIcon,
  ActiveMessageIcon,
  ActiveNotificationIcon,
  InActiveAppointmentsIcon,
  InActiveAutoAssignIcon,
  InActiveMessageIcon,
  InActiveNotificationIcon,
} from '@/assets/svg';
import AppTabButton from '@/components/buttons/app-bottom-tab';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {routesNames} from '../../routes';
import ComingSoonScreen from '@/screens/common/coming-soon-screen';
import {NurseRootStackParamList} from '../root-navigation/types';
import UserProfileMenu from '@/components/user-profile-menu';
import UserAvatar from '@/components/user-avatar';
import UserProfile from '@/screens/common/user-profile';

const {Navigator, Screen} = createBottomTabNavigator<NurseRootStackParamList>();

const NurseBottomTab = () => {
  const {colors} = useColors();
  const {
    sheetRef: profileSheet,
    openSheet: openProfileSheet,
    closeSheet: closeProfileSheet,
  } = useSheet();

  return (
    <>
      <Navigator
        screenOptions={{
          lazy: true,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingHorizontal: 10,
            height: 82,
          },
          tabBarIconStyle: {
            marginHorizontal: 2,
          },
          tabBarActiveTintColor: colors.primary400,
          tabBarInactiveTintColor: colors.default600,
        }}>
        <Screen
          name={routesNames.NURSE.NURSE_PATIENTS}
          component={NursePatients}
          options={{
            tabBarIcon: ({color, focused}) => (
              <AppTabButton
                label="Patients"
                icon={
                  focused ? (
                    <ActiveAppointmentsIcon />
                  ) : (
                    <InActiveAppointmentsIcon />
                  )
                }
                color={color}
                isFocused={focused}
              />
            ),
          }}
        />
        <Screen
          name={routesNames.NURSE.NURSE_AUTO_ASSIGN}
          component={View}
          options={() => ({
            tabBarIcon: ({color, focused}) => (
              <AppTabButton
                label="Auto assign"
                icon={
                  focused ? (
                    <ActiveAutoAssignIcon />
                  ) : (
                    <InActiveAutoAssignIcon />
                  )
                }
                color={color}
                isFocused={focused}
              />
            ),
          })}
        />
        <Screen
          name={routesNames.MESSAGES}
          component={ComingSoonScreen}
          options={() => ({
            tabBarIcon: ({color, focused}) => (
              <AppTabButton
                label="Messages"
                icon={focused ? <ActiveMessageIcon /> : <InActiveMessageIcon />}
                color={color}
                isFocused={focused}
              />
            ),
          })}
        />

        <Screen
          name={routesNames.NOTIFICATIONS}
          component={ComingSoonScreen}
          options={() => ({
            tabBarIcon: ({color, focused}) => (
              <AppTabButton
                label="Notifications"
                icon={
                  focused ? (
                    <ActiveNotificationIcon />
                  ) : (
                    <InActiveNotificationIcon />
                  )
                }
                color={color}
                isFocused={focused}
              />
            ),
          })}
        />

        <Screen
          name={routesNames.USER_PROFILE}
          component={UserProfile}
          options={() => ({
            tabBarIcon: ({color, focused}) => (
              <AppTabButton
                label="Profile"
                icon={<UserAvatar />}
                color={color}
                isFocused={focused}
              />
            ),
          })}
          listeners={() => ({
            tabPress: e => {
              // Prevent the default action (navigation)
              e.preventDefault();
              // Open the AppMenuSheet
              openProfileSheet();
            },
          })}
        />
      </Navigator>
      <UserProfileMenu sheetRef={profileSheet} closeSheet={closeProfileSheet} />
    </>
  );
};

export default NurseBottomTab;
