import {ArrowRightIcon, BinIcon} from '@/assets/svg';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {AppButton} from '@/components/buttons';
import {AllInputsPanelWithTitleCard} from '@/components/cards';
import {AppSeperator, AppText} from '@/components/common';
import {
  AllInputsSuggestionForm,
  useAllInputsSuggestionForm,
} from '@/components/forms';
import {useSheet} from '@/hooks/useSheet';
import {GeneralScreenProps} from '@/navigation/types';
import {useApiServicesAppSnowstormGetsymptomsuggestionGetQuery} from '@/state/services/snowstorm';
import {MenuOptionsProp} from '@/types/menusheet';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import React, {FunctionComponent} from 'react';
import {otherPlanItemsStyles} from './styles';
import {useDeleteOtherPlanItems} from './use-delete-other-plan-items';
import {useSaveOtherPlanItems as useSaveOtherPlanItemInput} from './use-save-other-plan-items';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import {
  PlanItemsSummaryForReturnDto,
  useApiServicesAppPlanitemsGetpatientplanitemsGetQuery,
} from '@/state/services/planItemsApi';
import AppMenuSheet from '@/components/sheets/app-menu-sheet';
import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';

const OtherPlanItems: FunctionComponent<
  GeneralScreenProps<'OTHER_PLAN_ITEMS'>
> = ({route}) => {
  const styles = otherPlanItemsStyles;
  const {patientId, encounterId} = route?.params ?? {};

  const {currentData: otherPlanItemsSuggestionData = []} =
    useApiServicesAppSnowstormGetsymptomsuggestionGetQuery({
      inputType: 'PlanItems',
    });
  const formProps = useAllInputsSuggestionForm();
  const {reset, selectedItems} = formProps;

  const {handleSave, isCreatePlanItemLoading: isCreateOtherPlanItemLoading} =
    useSaveOtherPlanItemInput({
      encounterId,
      patientId,
    });

  return (
    <ScaffoldWithAnimatedHeader screenTitle={'Other plan Items'}>
      <AllInputsPanelWithTitleCard title={'Add other plan items'}>
        <AllInputsSuggestionForm
          expandSheetHeaderTitle={'Select suggestion(s) for Other plan items'}
          formProps={formProps}
          suggestions={otherPlanItemsSuggestionData}
        />
        <AppButton
          text={'Save'}
          isLoading={isCreateOtherPlanItemLoading}
          isDisabled={isCreateOtherPlanItemLoading}
          containerStyle={styles.saveBtn}
          onPress={() =>
            handleSave({
              selectedItems,
              reset,
            })
          }
        />
        <InputedOtherPlanItemsHistory patientId={patientId} />
      </AllInputsPanelWithTitleCard>
    </ScaffoldWithAnimatedHeader>
  );
};

export default OtherPlanItems;

const InputedOtherPlanItemsHistory: FunctionComponent<{
  patientId: number;
}> = ({patientId}) => {
  const styles = otherPlanItemsStyles;
  const {data: inputSummaries} =
    useApiServicesAppPlanitemsGetpatientplanitemsGetQuery({patientId});
  if (!inputSummaries?.length) {
    return <></>;
  }
  return (
    <>
      <AppSeperator style={styles.seperator} />

      <AllInputsHistoryListView
        data={inputSummaries}
        renderItem={({item}) => (
          <InputedOtherPlanItemsHistoryCard key={item.id} item={item} />
        )}
      />
    </>
  );
};

const InputedOtherPlanItemsHistoryCard: FunctionComponent<{
  item: PlanItemsSummaryForReturnDto;
}> = ({item}) => {
  const {
    handleDeleteOtherPlanItems: handleDeleteNote,
    isDeletingOtherPlanItem,
  } = useDeleteOtherPlanItems();
  const {sheetRef, openSheet, closeSheet} = useSheet();

  const menuOptions: MenuOptionsProp = [
    {value: 'Link to care plan', onPress: () => null},
    {value: 'Mark as done', onPress: () => null},
    {value: 'Highlight for attention', onPress: () => null},
    {
      value: 'Delete',
      onPress: () => handleDeleteNote(item.id),
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
        isLoading={isDeletingOtherPlanItem}
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
