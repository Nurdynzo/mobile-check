import React from 'react';
import {View} from 'react-native';
import {AppButton, AppLink} from '@/components/buttons';
import {FormHeader} from '@/components/headers';
import {AppTextInput} from '@/components/inputs';
import {AppText} from '@/components/common';
import AppFormContainer from '@/components/common/app-form-container';
import {enterOtpStyles} from './styles';
import {routesNames} from '@/navigation/routes';
import AppScreen from '@/components/app-screen';
import {GeneralScreenProps} from '@/navigation/types';
import ForgotPasswordScreensHeader from '../common/forgot-password-screens-header';

const EnterOtp = ({navigation}: GeneralScreenProps<'ENTER_OTP'>) => {
  return (
    <AppScreen isScrollable={false} paddingHorizontal={24}>
      <ForgotPasswordScreensHeader />
      <FormHeader
        title={'Enter the OTP code'}
        desc={
          'To confirm your account, enter the OTP code sent to someone@xyzmedicals.com'
        }
      />
      <AppFormContainer hasFlex>
        <AppTextInput placeholder={'Enter OTP code'} label={'OTP code'} />
        <AppButton
          onPress={() => navigation.navigate(routesNames.CREATE_NEW_PASSWORD)}
          text={'Confirm code'}
        />
        <Resend />
      </AppFormContainer>
    </AppScreen>
  );
};

export default EnterOtp;

const Resend = () => {
  return (
    <>
      <View style={enterOtpStyles.resend}>
        <AppText
          text={"Didn't get a code?"}
          type={'body_1_medium'}
          color={'text300'}
        />
        <AppLink
          text={'Click to resend'}
          onPress={() => null}
          // eslint-disable-next-line react-native/no-inline-styles
          extraStyles={{lineHeight: 20}}
          textType={'button_link_semibold'}
        />
      </View>
    </>
  );
};
