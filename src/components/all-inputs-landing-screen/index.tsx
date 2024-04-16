import {HorizontalMoreIcon} from '@/assets/svg';
import {AppButton, AppIconButton} from '@/components/buttons';
import {NavigationCard} from '@/components/cards';
import {AppRow, AppText} from '@/components/common';
import Column from '@/components/common/column';
import {GeneralPatientProfileMenuModal} from '@/components/patient-profile-overlay';
import AppSpacer from '@/components/spacer/AppSpacer';
import React from 'react';
import {AllInput, AllInputDataItem} from './types';
import ScaffoldWithAnimatedHeader from '../scaffolds/scaffold-with-animated-header';

export const AllInputsLandingScreen = <
  T extends string,
  S extends string,
  R extends keyof ReactNavigation.RootParamList,
>({
  handleRoute,
  AllInputsClinicalInfoContent,
  allInputData = [],
  ScreenHeaderRightContent,
}: AllInput<T, S, R>) => {
  return (
    <>
      <ScaffoldWithAnimatedHeader
        screenTitle={'All inputs'}
        AppHeaderRightContent={ScreenHeaderRightContent}>
        {AllInputsClinicalInfoContent}
        {allInputData.map((item, index) => {
          return (
            <AllInputCard item={item} key={index} onSelect={handleRoute} />
          );
        })}
        <AllInputFooter />
      </ScaffoldWithAnimatedHeader>
      <GeneralPatientProfileMenuModal />
    </>
  );
};

const AllInputCard = <T extends string, S extends string, R>({
  item,
  onSelect,
}: {
  item: AllInputDataItem<T, S, R>;
  onSelect: (title: R) => void;
}) => {
  return (
    <NavigationCard onPress={() => onSelect(item.routeName)} marginTop={16}>
      <Column flex={1}>
        <AppText type={'body_1_semibold'} color="text400" text={item.title} />
        <AppSpacer direction="top" size={4} />
        <AppText type={'caption_medium'} color="text400" text={item.subTitle} />
      </Column>
    </NavigationCard>
  );
};

const AllInputFooter = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <AppRow columnGap={19} extraStyles={{marginVertical: 32}}>
      <AppIconButton icon={<HorizontalMoreIcon />} />
      <AppButton
        flex={1}
        text={'Review and save'}
        borderColor={'success600'}
        buttonColor={'success600'}
        onPress={() => {}}
      />
    </AppRow>
  );
};
