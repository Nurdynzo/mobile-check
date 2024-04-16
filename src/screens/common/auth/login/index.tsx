import React, {useRef} from 'react';
import AppLogo from '@/components/app-logo';
import {AppButton, AppLink} from '@/components/buttons';
import {AppTextInput} from '@/components/inputs';
import {AppFormButtonWrapper, AppText} from '@/components/common';
import AppFormContainer from '@/components/common/app-form-container';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormFieldController} from '@/components/forms/form-field-controller';
import {routesNames} from '@/navigation/routes';
import AppScreen from '@/components/app-screen';
import {LoginSchema, loginSchema} from './type';
import {hp} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import {loginScreenStyles} from './styles';
import {GeneralScreenProps} from '@/navigation/types';
import DropdownList from '@/components/dropdown-list';
import {TextInput, TouchableOpacity} from 'react-native';
import {SearchResultCard} from '@/components/cards';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {useSheet} from '@/hooks/useSheet';
import {
  RadioBtnEmptyIcon,
  RadioBtnFilledIcon,
  SearchIcon,
  XCircleIcon,
} from '@/assets/svg';
import Tenant from '@/types/tenant';
import {localStorage, localStorageKeys} from '@/utils/localStorage';
import {useColors} from '@/hooks/useColors';
import VoidFunction from '@/types/voidfunction';
import {
  useLogin,
  useUniqueBusinessCodeInput,
  useSelectPreSavedUniqueBusinessCode,
} from './hooks';

const defaultValues: LoginSchema = {
  emailAddress: EMPTY_STRING,
  password: EMPTY_STRING,
  tenant: EMPTY_STRING,
  uniqueBusinessCode: EMPTY_STRING,
};

const LoginScreen = ({navigation}: GeneralScreenProps<'LOGIN'>) => {
  const styles = loginScreenStyles;

  const preSavedTenants = localStorage.get<Tenant[]>(
    localStorageKeys.PRE_SAVED_TENANTS,
  );

  const {control, handleSubmit, setValue} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues,
    values: {
      ...defaultValues,
      ...(preSavedTenants?.length === 1 && {
        tenant: preSavedTenants[0].name,
        uniqueBusinessCode: preSavedTenants[0].uniqueBusinessCode,
      }),
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const {handleAuthentication, isLoading} = useLogin();

  const onSelectTenant = (tenant: Tenant) => {
    setValue('uniqueBusinessCode', tenant.uniqueBusinessCode);
    setValue('tenant', tenant.name);
  };

  return (
    <AppScreen
      isScrollable
      paddingHorizontal={24}
      contentContainerStyle={styles.screen}>
      <HeaderView />
      <AppFormContainer>
        <FormFieldController
          name={'tenant'}
          control={control}
          // eslint-disable-next-line react/no-unstable-nested-components
          Field={({onChange, value, onBlur}) => {
            return (
              <UniqueBusinessCodeInput
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onSelectTenant={onSelectTenant}
              />
            );
          }}
        />
        <FormFieldController
          name={'emailAddress'}
          control={control}
          // eslint-disable-next-line react/no-unstable-nested-components
          Field={({onChange, value, onBlur}) => {
            return (
              <AppTextInput
                label={'Email address'}
                placeholder={'Enter email address'}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            );
          }}
        />
        <FormFieldController
          name={'password'}
          control={control}
          // eslint-disable-next-line react/no-unstable-nested-components
          Field={({onChange, value, onBlur}) => {
            return (
              <AppTextInput
                isPassword
                placeholder={'Enter password'}
                label={'Password'}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
              />
            );
          }}
        />
      </AppFormContainer>
      <AppFormButtonWrapper>
        <AppLink
          text={'Forgot password?'}
          onPress={() => navigation.navigate(routesNames.RESET_PASSWORD)}
        />
        <AppButton
          isLoading={isLoading}
          isDisabled={isLoading}
          onPress={handleSubmit(handleAuthentication)}
          text={'Login'}
        />
      </AppFormButtonWrapper>
      <SelectPresavedUniqueBusinessCodeView onSelectTenant={onSelectTenant} />
    </AppScreen>
  );
};

export default LoginScreen;

const HeaderView = () => {
  return (
    <>
      <AppLogo marginBottom={24} />
      <AppText
        color={'text400'}
        align={'center'}
        text={'Welcome'}
        type={'title_semibold'}
        style={{marginBottom: hp(10)}}
      />
      <AppText
        color={'text300'}
        align={'center'}
        type={'subtitle_medium'}
        style={{marginBottom: hp(32)}}
        text={
          'Please enter your unique business code, email address and password'
        }
      />
    </>
  );
};

const UniqueBusinessCodeInput = ({
  value,
  onBlur,
  onChange,
  onSelectTenant,
}: {
  value: string;
  onBlur: () => void;
  onChange: (text: string) => void;
  onSelectTenant: (value: Tenant) => void;
}) => {
  const styles = loginScreenStyles;

  const inputRef = useRef<TextInput>(null);

  const {
    tenants,
    isFetchingTenants,
    showSearchSheet,
    setShowSearchSheet,
    debouncedTerm,
    setSearchTerm,
    resetInput,
  } = useUniqueBusinessCodeInput({onChange});

  return (
    <>
      <AppTextInput
        inputRef={inputRef}
        label={'Unique business code'}
        placeholder={'Search unique business code'}
        onBlur={onBlur}
        value={value}
        rightIcon={
          <UniqueBusinessCodeInputRightIcon
            value={value}
            onPress={resetInput}
          />
        }
        onChangeText={text => {
          onChange(text);
          setSearchTerm(text);
          if (!showSearchSheet) {
            setShowSearchSheet(true);
          }
        }}
      />
      <DropdownList
        viewRef={inputRef}
        data={tenants}
        visible={showSearchSheet && tenants && debouncedTerm.length > 0}
        isLoading={isFetchingTenants}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => {
          return (
            <SearchResultCard
              showId={false}
              name={`${item.name}`}
              containerStyle={styles.searchResultCard}
              onPress={() => {
                onSelectTenant(item);
                setShowSearchSheet(false);
              }}
            />
          );
        }}
      />
    </>
  );
};

const UniqueBusinessCodeInputRightIcon = ({
  value,
  onPress,
}: {
  value: string;
  onPress: VoidFunction;
}) => {
  const {colors} = useColors();

  if (value) {
    return (
      <TouchableOpacity onPress={onPress}>
        <XCircleIcon />
      </TouchableOpacity>
    );
  }
  return <SearchIcon stroke={colors.text50} />;
};

const SelectPresavedUniqueBusinessCodeView = ({
  onSelectTenant,
}: {
  onSelectTenant: (value: Tenant) => void;
}) => {
  const {openSheet, closeSheet, sheetRef} = useSheet();

  const {
    preSavedTenants,
    filteredTenants,
    selectedTenant,
    setSelectedTenant,
    searchTerm,
    setSearchTerm,
  } = useSelectPreSavedUniqueBusinessCode();

  if (!preSavedTenants || preSavedTenants.length <= 1) {
    return <></>;
  }

  return (
    <>
      <AppText
        align={'center'}
        color={'text300'}
        type={'body_1_medium'}
        style={{marginTop: hp(32)}}
        text={'Not this unique business code?'}
      />
      <AppLink
        align={'center'}
        onPress={openSheet}
        textType={'button_link_semibold'}
        extraStyles={{marginVertical: hp(16)}}
        text={'Select pre-saved unique business code'}
      />

      <AppSelectItemSheet
        title={'Pre-saved unique business code'}
        enableScroll
        showSearchInput
        contentHeight={439}
        sheetRef={sheetRef}
        selectedValue={selectedTenant}
        searchValue={searchTerm}
        selectOptions={filteredTenants}
        onSearchInputChange={setSearchTerm}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        onSelectItem={({item}) => {
          if (item.data) {
            onSelectTenant(item.data);
          }
          setSelectedTenant(item.value);
          closeSheet();
        }}
      />
    </>
  );
};
