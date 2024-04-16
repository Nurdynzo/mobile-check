/* eslint-disable react/no-unstable-nested-components */
import {useBackHandler} from '@/hooks/useBackHandler';
import {GeneralScreenProps} from '@/navigation/types';
import {PaperRecords, Regular} from '@/screens/common/view-paper-records';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FunctionComponent} from 'react';
import {Pressable} from 'react-native';
import {AttachmentIcon, TextDocumentIcon} from '@/assets/svg';
import AppTabButton from '@/components/buttons/app-bottom-tab';
import {useColors} from '@/hooks/useColors';

const {Navigator, Screen} = createBottomTabNavigator<{
  REGULAR_TAB: undefined;
  PAPER_RECORDS: undefined;
}>();

const ViewPaperRecordTab: FunctionComponent<
  GeneralScreenProps<'VIEW_PARER_RECORDS_TAB'>
> = props => {
  const {colors} = useColors();

  useBackHandler(() => {
    props.navigation.goBack();
    return true;
  }, []);

  const RegularScreen: FunctionComponent = () => <Regular {...props} />;
  const PaparRecordsScreen: FunctionComponent = () => (
    <PaperRecords {...props} />
  );
  const disableRegularTab = props?.route?.params?.disableRegularTab;

  return (
    <Navigator
      initialRouteName={disableRegularTab ? 'PAPER_RECORDS' : 'REGULAR_TAB'}
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
        name={'REGULAR_TAB'}
        component={RegularScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <AppTabButton
              label="Regular"
              icon={
                <TextDocumentIcon
                  stroke={disableRegularTab ? colors.primary50 : color}
                />
              }
              color={disableRegularTab ? colors.primary50 : color}
              isFocused={focused}
            />
          ),

          tabBarButton: tabProps => (
            <Pressable {...tabProps} disabled={disableRegularTab} />
          ),
        }}
      />
      <Screen
        name={'PAPER_RECORDS'}
        component={PaparRecordsScreen}
        options={() => ({
          tabBarIcon: ({color, focused}) => (
            <AppTabButton
              label="Paper records"
              icon={<AttachmentIcon fill={color} />}
              color={color}
              isFocused={focused}
            />
          ),
        })}
      />
    </Navigator>
  );
};

export default ViewPaperRecordTab;
