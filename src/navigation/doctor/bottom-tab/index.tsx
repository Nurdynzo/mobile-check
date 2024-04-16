/* eslint-disable react/no-unstable-nested-components */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {
  ActiveAllPatientsIcon,
  ActiveAppointmentsIcon,
  ActiveMessageIcon,
  ActiveNotificationIcon,
  InActiveAllPatientsIcon,
  InActiveAppointmentsIcon,
  InActiveMessageIcon,
  InActiveNotificationIcon,
} from '@/assets/svg';
import {AppTabButton} from '@/components/buttons';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {routesNames} from '@/navigation/routes';
import {wp} from '@/resources/config';
import ComingSoonScreen from '@/screens/common/coming-soon-screen';
import UserProfile from '@/screens/common/user-profile';
import {DoctorRootStackParamList} from '../root-navigation/type';
import UserProfileMenu from '@/components/user-profile-menu';
import UserAvatar from '@/components/user-avatar';
import {Patients} from '@/screens/doctor/bottom-tabs';

const {Navigator, Screen} =
  createBottomTabNavigator<DoctorRootStackParamList>();

const DoctorBottomTab = () => {
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
            paddingHorizontal: wp(10),
            height: wp(82),
          },
          tabBarIconStyle: {
            marginHorizontal: wp(2),
          },
          tabBarActiveTintColor: colors.primary400,
          tabBarInactiveTintColor: colors.default600,
        }}>
        <Screen
          name={routesNames.DOCTOR.DOCTOR_PATIENTS}
          component={Patients}
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
          name={routesNames.DOCTOR.DOCTOR_ALL_PATIENTS}
          component={View}
          options={() => ({
            tabBarIcon: ({color, focused}) => (
              <AppTabButton
                label="All Patients"
                icon={
                  focused ? (
                    <ActiveAllPatientsIcon />
                  ) : (
                    <InActiveAllPatientsIcon />
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
              e.preventDefault();
              openProfileSheet();
            },
          })}
        />
      </Navigator>
      <UserProfileMenu sheetRef={profileSheet} closeSheet={closeProfileSheet} />
    </>
  );
};

export default DoctorBottomTab;
