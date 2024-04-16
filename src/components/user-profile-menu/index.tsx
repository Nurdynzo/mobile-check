import {RightCaretIcon} from '@/assets/svg';
import {routesNames} from '@/navigation/routes';
import {GeneralNavProp} from '@/navigation/types';
import {useAppSelector} from '@/state/hooks';
import {selectAuth} from '@/state/slices/auth/auth';
import {RolesTypes} from '@/state/slices/auth/type';
import {MenuOptionsProp} from '@/types/menusheet';
import {ModalizeSheetRef} from '@/types/sheet';
import VoidFunction from '@/types/voidfunction';
import {NOT_AVAILABLE, EMPTY_STRING} from '@/utils/constants';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {AppMenuSheet} from '../sheets';
import EmergencyLeave from '../user-profile-menu-options/emergency-leave';
import GiveFeedbackOption from '../user-profile-menu-options/give-feedback-option';
import SignOut from '../user-profile-menu-options/sign-out';
import {useColors} from '@/hooks/useColors';

const UserProfileMenu = ({
  sheetRef,
  closeSheet,
}: {
  closeSheet: VoidFunction;
  sheetRef?: ModalizeSheetRef | undefined;
}) => {
  const navigation = useNavigation<GeneralNavProp>();
  const {role} = useAppSelector(selectAuth);
  const {colors} = useColors();

  return (
    <AppMenuSheet
      removeHeader
      sheetRef={sheetRef}
      renderRightIcon={() => <RightCaretIcon stroke={colors.text400} />}
      menuOptions={getMenuOptions({role, closeSheet, navigation}).filter(
        item => item.id !== NOT_AVAILABLE,
      )}
    />
  );
};

export default UserProfileMenu;

const getMenuOptions = ({
  role,
  navigation,
  closeSheet,
}: {
  role: RolesTypes;
  closeSheet: VoidFunction;
  navigation: GeneralNavProp;
}): MenuOptionsProp => {
  return [
    {
      id: '1',
      value: 'Profile',
      onPress: () => {
        navigation.navigate(routesNames.USER_PROFILE);
        closeSheet();
      },
    },
    {
      id: '2',
      value: 'Switch role',
      onPress: () => null,
    },
    {
      id: role === 'Doctor' || role === 'Nurse' ? '3' : NOT_AVAILABLE,
      value: 'Calendar',
      onPress: () => null,
    },
    {
      id: '4',
      value: EMPTY_STRING,
      onPress: () => null,
      customComponent: <GiveFeedbackOption />,
    },
    {
      id: role === 'Doctor' || role === 'Nurse' ? '5' : NOT_AVAILABLE,
      value: EMPTY_STRING,
      onPress: () => null,
      customComponent: <EmergencyLeave />,
    },
    {
      id: '6',
      value: EMPTY_STRING,
      onPress: () => null,
      customComponent: <SignOut />,
    },
  ];
};
