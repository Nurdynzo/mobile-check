import AppScreen from '@/components/app-screen';
import {AppButton, AppTouchButton} from '@/components/buttons';
import {AppFormContainer, DisplayImage} from '@/components/common';
import {
  DoubleFormFieldController,
  FormFieldController,
} from '@/components/forms/form-field-controller';
import {AppHeader} from '@/components/headers';
import {
  AppDateTimeInput,
  AppSelectTextInput,
  AppTextInput,
} from '@/components/inputs';
import {AppImageUploadSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {useApiServicesAppIdentificationtypeGetidentificationtypesGetQuery} from '@/state/services/identificationTypeApi';
import {EMPTY_STRING} from '@/utils/constants';
import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {EditProfileInfoSchema, editProfileInfoSchema} from './schema';
import {editProfileStyles} from './styles';
import stringToTitleCase from '@/utils/helpers/string-to-title-case';

const defaultValues: EditProfileInfoSchema = {
  dateOfBirth: new Date(),
  firstName: EMPTY_STRING,
  gender: EMPTY_STRING,
  govermentIssuedIdCardNumber: EMPTY_STRING,
  govermentIssuedIdCardType: EMPTY_STRING,
  lastName: EMPTY_STRING,
  middleName: EMPTY_STRING,
  phoneNumber: EMPTY_STRING,
  primaryEmailAddress: EMPTY_STRING,
  secondaryEmailAddress: EMPTY_STRING,
};

const EditProfile = () => {
  const {data: idTypes = []} =
    useApiServicesAppIdentificationtypeGetidentificationtypesGetQuery();

  const {colors} = useColors();
  const styles = editProfileStyles({colors});

  const {control, handleSubmit} = useForm<EditProfileInfoSchema>({
    resolver: zodResolver(editProfileInfoSchema),
    defaultValues,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const handleEditProfile = () => {};

  return (
    <AppScreen
      paddingHorizontal={24}
      ScreenHeader={
        <>
          <AppHeader middleTitle="Edit personal information" />
          <View style={styles.top}>
            <EditAvatar />
          </View>
        </>
      }>
      <View style={styles.container}>
        <AppFormContainer>
          <FormFieldController
            name="firstName"
            control={control}
            Field={({onChange, value, onBlur}) => {
              return (
                <AppTextInput
                  label="First name*"
                  placeholder="Enter first name"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={stringToTitleCase(value)}
                />
              );
            }}
          />
          <FormFieldController
            name="middleName"
            control={control}
            Field={({onChange, value, onBlur}) => {
              return (
                <AppTextInput
                  label="Middle name*"
                  placeholder="Enter middle name"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={stringToTitleCase(value)}
                />
              );
            }}
          />
          <FormFieldController
            name="lastName"
            control={control}
            Field={({onChange, value, onBlur}) => {
              return (
                <AppTextInput
                  label="Last name*"
                  placeholder="Enter last name"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={stringToTitleCase(value)}
                />
              );
            }}
          />
          <FormFieldController
            name="dateOfBirth"
            control={control}
            Field={() => {
              return (
                <AppDateTimeInput
                  mode={'date'}
                  label="Date of birth*"
                  extraFontStyle={{fontSize: 12}}
                  placeholder="12 Nov 2023"
                />
              );
            }}
          />
          <FormFieldController
            name="phoneNumber"
            control={control}
            Field={({onChange, value, onBlur}) => {
              return (
                <AppTextInput
                  label="Phone number*"
                  placeholder="Enter phone number"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              );
            }}
          />
          <FormFieldController
            name="primaryEmailAddress"
            control={control}
            Field={({onChange, value, onBlur}) => {
              return (
                <AppTextInput
                  label="Primary Email address"
                  placeholder="Enter primary email address"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              );
            }}
          />
          <FormFieldController
            name="secondaryEmailAddress"
            control={control}
            Field={({onChange, value, onBlur}) => {
              return (
                <AppTextInput
                  label="Secondary Email address"
                  placeholder="Enter secondary email address"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              );
            }}
          />
          <DoubleFormFieldController
            names={{
              name1: 'govermentIssuedIdCardType',
              name2: 'govermentIssuedIdCardNumber',
            }}
            control={control}
            Fields={({field1, field2}) => {
              return (
                <AppSelectTextInput
                  label="Government issued ID"
                  placeholder={{
                    select: 'Select ID type',
                    text: 'Enter number',
                  }}
                  inputKeyboardType="numeric"
                  selectOptions={idTypes.map(idType => {
                    return {item: {id: idType, value: idType}};
                  })}
                  value={{select: field1.value, text: field2.value}}
                  onChange={{
                    select: item => field1.onChange(item?.value),
                    text: text => field2.onChange(text),
                  }}
                />
              );
            }}
          />
          <AppButton
            onPress={handleSubmit(handleEditProfile)}
            text="Update Profile"
          />
        </AppFormContainer>
      </View>
    </AppScreen>
  );
};

const EditAvatar = () => {
  const {colors} = useColors();
  const styles = editProfileStyles({colors});
  const {closeSheet, sheetRef, openSheet} = useSheet();
  return (
    <>
      <View style={styles.editAvatar}>
        <DisplayImage size={100} />
        <View>
          <AppTouchButton
            text="Change picture"
            bg="white"
            extraStyles={styles.changePassword}
            onPress={openSheet}
          />
          <AppImageUploadSheet sheetRef={sheetRef} closeSheet={closeSheet} />
        </View>
      </View>
    </>
  );
};

export default EditProfile;
