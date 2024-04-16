import React from 'react';
import {View} from 'react-native';
import {SuccessIcon} from '@/assets/svg';
import {AppButton} from '@/components/buttons';
import {FormHeader} from '@/components/headers';
import {AppTextInput} from '@/components/inputs';
import {AppText} from '@/components/common';
import AppFormContainer from '@/components/common/app-form-container';
import {useSheet} from '@/hooks/useSheet';
import {createNewPasswordStyles} from './styles';
import AppContentSheet from '@/components/sheets/app-content-sheet';
import {routesNames} from '@/navigation/routes';
import AppScreen from '@/components/app-screen';
import {GeneralScreenProps} from '@/navigation/types';
import VoidFunction from '@/types/voidfunction';
import {ModalizeSheetRef} from '@/types/sheet';
import ForgotPasswordScreensHeader from '../common/forgot-password-screens-header';

const CreateNewPassword = ({
  navigation,
}: GeneralScreenProps<'CREATE_NEW_PASSWORD'>) => {
  const {sheetRef, closeSheet, openSheet} = useSheet();
  return (
    <>
      <AppScreen isScrollable={false} paddingHorizontal={24}>
        <ForgotPasswordScreensHeader />
        <FormHeader
          title={'Create new password'}
          desc={'Please create new password and confirm the new password'}
        />
        <AppFormContainer hasFlex>
          <AppTextInput
            isPassword
            placeholder={'Enter Password'}
            label={'New password'}
          />
          <AppTextInput
            isPassword
            placeholder={'Confirm password'}
            label={'Confirm password'}
          />
          <AppButton onPress={openSheet} text={'Reset password'} />
        </AppFormContainer>
      </AppScreen>
      <Sheet
        sheetRef={sheetRef}
        onPressReturnToLogin={() => {
          navigation.navigate(routesNames.LOGIN);
          closeSheet();
        }}
      />
    </>
  );
};

export default CreateNewPassword;

const Sheet = ({
  sheetRef,
  onPressReturnToLogin,
}: {
  sheetRef: ModalizeSheetRef;
  onPressReturnToLogin: VoidFunction;
}) => {
  const styles = createNewPasswordStyles;
  return (
    <AppContentSheet removeHeader sheetRef={sheetRef}>
      <View style={styles.sheetContainer}>
        <SuccessIcon
          // eslint-disable-next-line react-native/no-inline-styles
          style={{alignSelf: 'center'}}
        />
        <View style={styles.sheetTextWrapper}>
          <AppText
            color={'text400'}
            align={'center'}
            type={'title_semibold'}
            text={'Congratulations'}
          />
          <AppText
            color={'text300'}
            align={'center'}
            type={'subtitle_medium'}
            text={'Your new password has been created successfully'}
          />
        </View>
        <AppButton text={'Return to login'} onPress={onPressReturnToLogin} />
      </View>
    </AppContentSheet>
  );
};
