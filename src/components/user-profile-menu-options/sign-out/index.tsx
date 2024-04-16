import {SignOutIcon} from '@/assets/svg';
import MenuOption from '@/components/menu-option';
import {AppContentSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {logOut} from '@/state/slices/auth/auth';
import React, {FunctionComponent} from 'react';
import {useDispatch} from 'react-redux';
import ExitWrapper from '../exit-wrapper';

const SignOut: FunctionComponent = () => {
  const {
    sheetRef: signOutSheetRef,
    openSheet: openFeedbackSheet,
    closeSheet: closeSignOutSheet,
  } = useSheet();
  const {colors} = useColors();
  const dispatch = useDispatch();
  return (
    <>
      <MenuOption
        label="Sign out"
        valueTextColor="danger500"
        onPress={openFeedbackSheet}
        RightIcon={<SignOutIcon fill={colors.danger500} />}
      />
      <AppContentSheet sheetRef={signOutSheetRef} removeHeader>
        <ExitWrapper
          closeSheet={closeSignOutSheet}
          onProceed={() => {
            dispatch(logOut());
          }}
          title="Sign out"
          titleColor="danger300"
          brief="You are about to sign out of this session"
          question="Do you wish to proceed?"
        />
      </AppContentSheet>
    </>
  );
};

export default SignOut;
