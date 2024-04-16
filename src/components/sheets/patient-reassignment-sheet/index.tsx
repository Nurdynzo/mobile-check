import {AppButton} from '@/components/buttons';
import VoidFunction from '@/types/voidfunction';
import React from 'react';
import {IHandles} from 'react-native-modalize/lib/options';
import AppSelectItemSheet from '../app-select-item-sheet';
import useReassignPatient from './use-reassign-patient';
import {patientReassignmentSheetStyles} from './style';
import {UserIcon} from '@/assets/svg';
import AnimatedBubble from '@/components/animated-bubble';
import {AppAlert} from '@/components/common';
import {wp} from '@/resources/config';
import {View} from 'react-native';
import {useColors} from '@/hooks/useColors';

const PatientReassignmentSheet = ({
  sheetRef,
  closeSheet,
  encounterId,
}: {
  encounterId?: number;
  closeSheet: VoidFunction;
  sheetRef: React.RefObject<IHandles>;
}) => {
  const {colors} = useColors();
  const styles = patientReassignmentSheetStyles({colors});

  const {
    setSearchText,
    searchResults,
    physician,
    setPhysician,
    isReassigning,
    handleReassignment,
    refetchPhysicians,
    isFetchingPhysicians,
    isErrorFetchingPhysicians,
  } = useReassignPatient({
    encounterId,
  });

  return (
    <AppSelectItemSheet
      contentHeight={379}
      adjustToContentHeight
      title={'Assign to'}
      showSearchInput
      sheetRef={sheetRef}
      onSearchInputChange={value => setSearchText(value)}
      selectOptions={searchResults}
      selectedValue={physician?.value}
      isLoading={isFetchingPhysicians}
      error={{
        value: isErrorFetchingPhysicians,
        onPressRefresh: refetchPhysicians,
      }}
      onSelectItem={({item}) => {
        setPhysician(item);
      }}
      FooterComponent={
        <AppButton
          text={'Assign'}
          isLoading={isReassigning}
          isDisabled={!physician}
          containerStyle={styles.assignButton}
          onPress={() => handleReassignment({reset: closeSheet})}
        />
      }
      EmptyStateComponent={<EmptyStateComponent />}
    />
  );
};

export default PatientReassignmentSheet;

const EmptyStateComponent = () => {
  const {colors} = useColors();
  const styles = patientReassignmentSheetStyles({colors});
  return (
    <AppAlert
      title={'Available doctors'}
      description={'No doctor is currently available'}
      showButton={false}
      containerStyle={{marginHorizontal: wp(24)}}
      icon={
        <AnimatedBubble
          bgColor={'primary25'}
          size={96}
          Icon={
            <View style={styles.userIcon}>
              <UserIcon fill={colors.white} width={36} height={36} />
            </View>
          }
        />
      }
    />
  );
};
