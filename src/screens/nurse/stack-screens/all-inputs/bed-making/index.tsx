import {ArrowRightIcon, BinIcon} from '@/assets/svg';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {AppButton} from '@/components/buttons';
import {AllInputsPanelWithTitleCard} from '@/components/cards';
import {AppSeperator, AppText} from '@/components/common';
import {
  AllInputsSuggestionForm,
  useAllInputsSuggestionForm,
} from '@/components/forms';
import {AppMenuSheet} from '@/components/sheets';
import {useSheet} from '@/hooks/useSheet';
import {GeneralScreenProps} from '@/navigation/types';
import {
  PatientBedMakingSummaryForReturnDto,
  useApiServicesAppBedmakingGetpatientsummaryGetQuery,
} from '@/state/services/bedMakingApi';
import {useApiServicesAppSnowstormGetsymptomsuggestionGetQuery} from '@/state/services/snowstorm';
import {MenuOptionsProp} from '@/types/menusheet';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {bedMakingStyles} from './styles';
import {useDeleteBedMaking} from './use-delete-bed-making-item';
import {useSaveBedMaking} from './use-save-bed-making-item';
import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';

const BedMaking: FunctionComponent<GeneralScreenProps<'NURSE_BED_MAKING'>> = ({
  route,
}) => {
  const styles = bedMakingStyles;
  const {patientId, encounterId} = route.params;
  const {data: bedMakingSuggestionData = []} =
    useApiServicesAppSnowstormGetsymptomsuggestionGetQuery({
      inputType: 'BedMaking',
    });
  const formProps = useAllInputsSuggestionForm();
  const {reset, selectedItems} = formProps;

  const {handleSave, isCreateBedMakingLoading} = useSaveBedMaking({
    encounterId,
    patientId,
  });

  return (
    <>
      <ScaffoldWithAnimatedHeader
        screenTitle={'Bed making'}
        bodyHorizontalPadding={24}
        contentContainerStyle={styles.gap16}>
        <AllInputsPanelWithTitleCard title="Enter bed making details">
          <AllInputsSuggestionForm
            expandSheetHeaderTitle="Select suggestion(s) for bed making"
            formProps={formProps}
            suggestions={bedMakingSuggestionData}
          />
          <AppButton
            text="Save"
            isLoading={isCreateBedMakingLoading}
            isDisabled={isCreateBedMakingLoading}
            containerStyle={styles.saveBtn}
            onPress={() =>
              handleSave({
                selectedItems,
                reset,
              })
            }
          />

          <BedMakingHistory patientId={patientId} />
        </AllInputsPanelWithTitleCard>
      </ScaffoldWithAnimatedHeader>
    </>
  );
};

export default BedMaking;

const BedMakingHistory: FunctionComponent<{
  patientId: number;
}> = ({patientId}) => {
  const styles = bedMakingStyles;
  const {data: bedMakingSummaries} =
    useApiServicesAppBedmakingGetpatientsummaryGetQuery({
      patientId: patientId,
    });
  if (!bedMakingSummaries?.length) {
    return <></>;
  }
  return (
    <>
      <AppSeperator style={styles.seperator} />
      <View style={styles.gap16}>
        {bedMakingSummaries?.map(item => (
          <BedMakingHistoryCard key={item.id} item={item} />
        ))}
      </View>
    </>
  );
};

const BedMakingHistoryCard: FunctionComponent<{
  item: PatientBedMakingSummaryForReturnDto;
}> = ({item}) => {
  const {handleDeleteBedMaking, isDeletingBedMaking} = useDeleteBedMaking();
  const {sheetRef, openSheet, closeSheet} = useSheet();

  const menuOptions: MenuOptionsProp = [
    {value: 'Link to care plan', onPress: () => null},
    {value: 'Mark as done', onPress: () => null},
    {value: 'Highlight for attention', onPress: () => null},
    {
      value: 'Delete',
      onPress: () => handleDeleteBedMaking(item.id),
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
        isLoading={isDeletingBedMaking}
        textComponent={
          <AppText text={item.note} type="body_2_semibold" color="text400" />
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
