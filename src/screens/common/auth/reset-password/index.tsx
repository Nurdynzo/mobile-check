import React from 'react';
import {AppButton} from '@/components/buttons';
import {FormHeader} from '@/components/headers';
import {AppTextInput} from '@/components/inputs';
import AppFormContainer from '@/components/common/app-form-container';
import {routesNames} from '@/navigation/routes';
import AppScreen from '@/components/app-screen';
import {GeneralScreenProps} from '@/navigation/types';
import ForgotPasswordScreensHeader from '../common/forgot-password-screens-header';

const ResetPassword = ({navigation}: GeneralScreenProps<'RESET_PASSWORD'>) => {
  return (
    <AppScreen isScrollable={false} paddingHorizontal={24}>
      <ForgotPasswordScreensHeader />
      <FormHeader
        title={'Reset password'}
        desc={
          'Enter your email address below and we will send you a password reset OTP'
        }
      />
      <AppFormContainer hasFlex>
        <AppTextInput
          placeholder={'Enter Email address'}
          label={'Email address'}
        />
        <AppButton
          isDisabled={false}
          onPress={() => navigation.navigate(routesNames.ENTER_OTP)}
          text={'Send reset OTP'}
        />
      </AppFormContainer>
    </AppScreen>
  );
};

export default ResetPassword;
