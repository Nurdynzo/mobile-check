import {AppButton} from '@/components/buttons';
import {AppAlert, AppFormContainer} from '@/components/common';
import {FormFieldController} from '@/components/forms/form-field-controller';
import {AppTextInput} from '@/components/inputs';
import {AppContentSheet} from '@/components/sheets';
import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import ProfileSettingsOption from '../profile-setting-option';
import {ChangePasswordSchema, changePasswordSchema} from './schema';
import {changePasswordOptionStyles} from './style';

const defaultValues: ChangePasswordSchema = {
  oldPassword: EMPTY_STRING,
  newPassword: EMPTY_STRING,
  confirmPassword: EMPTY_STRING,
};
const ChangePasswordOption = () => {
  const {openSheet, closeSheet, sheetRef} = useSheet();
  const {
    openSheet: openCongratRef,
    closeSheet: closeCongratRef,
    sheetRef: congratRef,
  } = useSheet();
  const styles = changePasswordOptionStyles();
  const {control, handleSubmit} = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const handleAuthentication = () => {
    closeSheet();
    openCongratRef();
  };
  return (
    <>
      <ProfileSettingsOption onPress={openSheet} title="Change Password" />

      <AppContentSheet
        adjustToContentHeight
        isScrollable
        sheetRef={sheetRef}
        headerTitle="Change password">
        <View style={styles.sheetContainer}>
          <AppFormContainer>
            <FormFieldController
              name="oldPassword"
              control={control}
              Field={({onChange, value, onBlur}) => {
                return (
                  <AppTextInput
                    label="Old password"
                    placeholder="Enter old password"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    isPassword
                  />
                );
              }}
            />
            <FormFieldController
              name="newPassword"
              control={control}
              Field={({onChange, value, onBlur}) => {
                return (
                  <AppTextInput
                    isPassword
                    placeholder="Enter new password"
                    label="New password"
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                  />
                );
              }}
            />
            <FormFieldController
              name="confirmPassword"
              control={control}
              Field={({onChange, value, onBlur}) => {
                return (
                  <AppTextInput
                    isPassword
                    placeholder="Retype new password"
                    label="Confirm new password"
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                  />
                );
              }}
            />
          </AppFormContainer>

          <AppButton
            isLoading={false}
            onPress={handleSubmit(handleAuthentication)}
            text="Update password"
            containerStyle={{marginTop: wp(229)}}
          />
        </View>
      </AppContentSheet>
      <AppContentSheet
        adjustToContentHeight
        isScrollable
        removeHeader
        sheetRef={congratRef}>
        <View style={styles.sheetContainer}>
          <AppAlert
            buttonWidth={327}
            title="Congratulations"
            description="Your new password has been created successfully"
            buttonText="Return to profile"
            onPress={closeCongratRef}
          />
        </View>
      </AppContentSheet>
    </>
  );
};

export default ChangePasswordOption;
