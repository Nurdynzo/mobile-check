import {ArrowRightIcon, BinIcon} from '@/assets/svg';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import AppScreen from '@/components/app-screen';
import {AppButton} from '@/components/buttons';
import {AllInputsPanelWithTitleCard} from '@/components/cards';
import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import {AppSeperator, AppText} from '@/components/common';
import {
  AllInputsSuggestionForm,
  useAllInputsSuggestionForm,
} from '@/components/forms';
import {AppHeader} from '@/components/headers';
import {AppMenuSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {GeneralScreenProps} from '@/navigation/types';
import {wp} from '@/resources/config';
import {
  WoundDressingSummaryForReturnDto,
  useApiServicesAppPatientsGetpatientdetailsGetQuery,
  useApiServicesAppWounddressingGetpatientwounddressingGetQuery,
} from '@/state/services/patientApi';
import {useApiServicesAppSnowstormGetsymptomsuggestionGetQuery} from '@/state/services/snowstorm';
import {MenuOptionsProp} from '@/types/menusheet';
import {EMPTY_STRING, TEMP_AVATAR_URL} from '@/utils/constants';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {woundDressingStyles} from './styles';
import {useDeleteWoundDressing} from './use-delete-wound-dressing';
import {useSaveWoundDressing} from './use-save-wound-dressing';

const WoundDressing = ({route}: GeneralScreenProps<'NURSE_WOUND_DRESSING'>) => {
  const {colors} = useColors();
  const {patientId, encounterId} = route?.params ?? {};

  const formProps = useAllInputsSuggestionForm();
  const {selectedItems, setSelectedItems} = formProps;
  const styles = woundDressingStyles({colors});

  const {data: suggestionsData} =
    useApiServicesAppSnowstormGetsymptomsuggestionGetQuery({
      inputType: 'WoundDressing',
    });

  const {data: patientDetails} =
    useApiServicesAppPatientsGetpatientdetailsGetQuery({patientId});

  const {handleSaveWoundDressing, isSavingWoundDressing} = useSaveWoundDressing(
    {
      encounterId,
      patientId,
      successCallback: () => {
        setSelectedItems([]);
      },
    },
  );

  return (
    <>
      <AppScreen
        paddingHorizontal={24}
        ScreenHeader={
          <>
            <AppHeader middleTitle="Wound dressing" paddingBottom={0} />
            <View style={styles.cardHeader}>
              <PatientInfoCard
                fullName={patientDetails?.fullName as string}
                code={patientDetails?.patientCode as string}
                dateOfBirth={patientDetails?.dateOfBirth}
                gender={patientDetails?.gender}
                avatar={TEMP_AVATAR_URL}
              />
            </View>
          </>
        }>
        <AllInputsPanelWithTitleCard title={'Enter wound dressing details'}>
          <AllInputsSuggestionForm
            expandSheetHeaderTitle={EMPTY_STRING}
            formProps={formProps}
            suggestions={suggestionsData || []}
          />
          <AppButton
            isDisabled={selectedItems.length === 0}
            text="Save"
            isLoading={isSavingWoundDressing}
            onPress={() => handleSaveWoundDressing(selectedItems)}
            containerStyle={styles.save}
          />
          <AppSeperator style={styles.seperator} />
          <WoundDressingHistory
            patientFullName={patientDetails?.fullName as string}
            patientId={patientId}
          />
        </AllInputsPanelWithTitleCard>
      </AppScreen>
    </>
  );
};

export default WoundDressing;

const WoundDressingHistory: FunctionComponent<{
  patientId: number;
  patientFullName: string;
}> = ({patientId, patientFullName}) => {
  const {data: woundDressingSummaries} =
    useApiServicesAppWounddressingGetpatientwounddressingGetQuery({patientId});
  return (
    <View style={{gap: wp(16)}}>
      {woundDressingSummaries?.map(item => (
        <WoundDressingHistoryCard
          key={item.id}
          patientFullName={patientFullName}
          item={item}
        />
      ))}
    </View>
  );
};

const WoundDressingHistoryCard: FunctionComponent<{
  item: WoundDressingSummaryForReturnDto;
  patientFullName: string;
}> = ({item, patientFullName}) => {
  const {handleDeleteWoundDressing, isDeletingWoundDressing} =
    useDeleteWoundDressing({
      patientFullName,
    });
  const {sheetRef, openSheet, closeSheet} = useSheet();

  const menuOptions: MenuOptionsProp = [
    {value: 'Link to care plan', onPress: () => null},
    {value: 'Mark as done', onPress: () => null},
    {value: 'Highlight for attention', onPress: () => null},
    {
      value: 'Delete',
      onPress: () => handleDeleteWoundDressing(item.id),
      renderRightIcon: () => <BinIcon />,
      color: 'danger300',
    },
  ];

  return (
    <>
      <AllInputsHistoryTile
        key={item.id}
        date={checkDay(item.creationTime)}
        time={convertToReadableTime(item.creationTime)}
        onPress={openSheet}
        isLoading={isDeletingWoundDressing}
        textComponent={
          <AppText
            text={item.description}
            type="body_2_semibold"
            color="text400"
          />
        }
      />
      <AppMenuSheet
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        removeHeader
        renderRightIcon={() => <ArrowRightIcon />}
        menuOptions={menuOptions}
      />
    </>
  );
};
