/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ComingSoonScreen from '@/screens/common/coming-soon-screen';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {routesNames} from '@/navigation/routes';
import AppTabButton from '@/components/buttons/app-bottom-tab';
import Records from '@/screens/front-desk/bottom-tabs/records';
import {
  ActiveAppointmentsIcon,
  ActiveCalendarIcon,
  ActiveMessageIcon,
  ActiveNotificationIcon,
  InActiveAppointmentsIcon,
  InActiveCalendarIcon,
  InActiveMessageIcon,
  InActiveNotificationIcon,
} from '@/assets/svg';
import UserProfile from '@/screens/common/user-profile';
import UserProfileMenu from '@/components/user-profile-menu';
import {FrontDeskRootStackParamList} from '../root-navigation/type';
import UserAvatar from '@/components/user-avatar';

const {Navigator, Screen} =
  createBottomTabNavigator<FrontDeskRootStackParamList>();

const FrontDeskBottomTab = () => {
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
          name={routesNames.FRONT_DESK.FD_APPOINTMENTS}
          component={Records}
          options={{
            tabBarIcon: ({color, focused}) => (
              <AppTabButton
                label="Appointment"
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
          name={routesNames.FRONT_DESK.FD_CALENDAR}
          component={ComingSoonScreen}
          options={() => ({
            tabBarIcon: ({color, focused}) => (
              <AppTabButton
                label="Calendar"
                icon={
                  focused ? (
                    <ActiveCalendarIcon fill={color} />
                  ) : (
                    <InActiveCalendarIcon />
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

export default FrontDeskBottomTab;
