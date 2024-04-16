import {ArrowRightIcon} from '@/assets/svg';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {AppButton} from '@/components/buttons';
import {AppSeperator, AppText} from '@/components/common';
import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {AllInputsMulipleSuggestionFormHookType} from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-muliple-suggestion-form/type';
import {AppMenuSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';
import {
  GetNurseCareSummaryResponse,
  useApiServicesAppNursecareplansGetallGetQuery,
  useApiServicesAppNursecareplansGetnursingevaluationGetQuery,
} from '@/state/services/nurseCarePlansApi';
import {MenuOptionsProp} from '@/types/menusheet';
import {EMPTY_STRING} from '@/utils/constants';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import CollapsibleAllInputsPanelWithTitleCard from '../../common/collapsible-all-inputs-panel';
import planNames from '@/constants/nurseCarePlan';
import {nursingCarePlanStyles} from '../styles';
import useCreateNursingCarePlan from '../use-create-nursing-care-plan';

const planName = planNames.evaluation;

const Evaluations: FunctionComponent<{
  patientId: number;
  encounterId: number;
  formProps: AllInputsMulipleSuggestionFormHookType<NewCustomSnowstormSimpleResponseDto>;
}> = ({patientId, encounterId, formProps}) => {
  const {colors} = useColors();
  const {
    text,
    setText,
    selectedItems,
    setSelectedItems,
    handleAddItem,
    handleRemoveItem,
    reset,
  } = formProps;

  const activitiesData = selectedItems?.[planNames.activities] ?? [];
  const shouldOpen = !!activitiesData?.length;

  const styles = nursingCarePlanStyles({colors});

  const {data: evaluationData} =
    useApiServicesAppNursecareplansGetnursingevaluationGetQuery(undefined, {
      skip: !shouldOpen,
      selectFromResult: result => ({
        ...result,
        data: result.data?.map(
          el =>
            ({
              id: `${el.id}`,
              name: el.name,
            } as NewCustomSnowstormSimpleResponseDto),
        ),
      }),
    });

  const selectedData = selectedItems?.[planName] ?? [];

  const {handleSave, isLoading} = useCreateNursingCarePlan({
    patientId,
    encounterId,
  });

  return (
    <CollapsibleAllInputsPanelWithTitleCard
      title={'Evaluation'}
      formProps={{
        selectedItems: selectedData,
        text: text?.[planName] ?? EMPTY_STRING,
        handleAddItem: item =>
          handleAddItem(item, {
            tabName: planName,
            isSingleSelect: true,
          }),
        handleRemoveItem: item => handleRemoveItem(item, {tabName: planName}),
        setSelectedItems: items =>
          setSelectedItems(items, {
            tabName: planName,
          }),
        setText: val => setText(val, {tabName: planName}),
        reset,
      }}
      suggestions={evaluationData ?? []}
      disableHeaderToggle
      isPrecedingFormEmpty={!shouldOpen}
      SummaryView={
        <NursingCarePlannHistory
          patientId={patientId}
          encounterId={encounterId}
        />
      }
      SaveButton={
        <AppButton
          text={'Save'}
          isDisabled={!selectedData.length}
          isLoading={isLoading}
          onPress={() => handleSave({selectedItems, reset})}
          containerStyle={styles.saveButton}
        />
      }
    />
  );
};

export default Evaluations;

const NursingCarePlannHistory: FunctionComponent<{
  patientId: number;
  encounterId: number;
}> = ({patientId, encounterId}) => {
  const {colors} = useColors();
  const styles = nursingCarePlanStyles({colors});

  const {currentData: summaryData} =
    useApiServicesAppNursecareplansGetallGetQuery({
      patientId,
      encounterId,
    });

  if (!summaryData?.length) {
    return <></>;
  }

  return (
    <>
      <AppSeperator style={styles.seperator} />
      <AllInputsHistoryListView
        data={summaryData ?? []}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => <NursingCarePlanHistoryCard item={item} />}
      />
    </>
  );
};

const NursingCarePlanHistoryCard: FunctionComponent<{
  item: GetNurseCareSummaryResponse;
}> = ({item}) => {
  const {sheetRef, openSheet, closeSheet} = useSheet();

  const menuOptions: MenuOptionsProp = [
    {value: 'Mark as ongoing', onPress: () => null},
    {value: 'Link to event', onPress: () => null},
    {value: 'Link to examination', onPress: () => null},
    {value: 'Highlight for attention', onPress: () => null},
    {value: 'Ignore', onPress: () => {}, color: 'danger300'},
  ];

  const data = {
    Diagnosis: item.diagnosis,
    Outcomes: item.outcomes?.join(', '),
    Interventions: item.outcomes?.join(', '),
    Activities: item.activities?.join(', '),
    Evaluation: item.evaluation,
  };

  return (
    <>
      <AllInputsHistoryTile
        key={item.id}
        date={checkDay(item.time)}
        time={convertToReadableTime(item.time)}
        onPress={openSheet}
        textComponent={
          <View style={{gap: wp(12)}}>
            <AppText
              text={'Care plan. Entered by ACNO Yasmine'}
              type="body_2_semibold"
              color="text400"
            />
            {Object.keys(data).map(key => (
              <AppText
                key={key}
                text={[
                  <AppText
                    key={0}
                    text={key}
                    type="body_2_semibold"
                    color="text300"
                  />,
                  ` - ${data[key as keyof typeof data]}`,
                ]}
                type="body_2_semibold"
                color="text400"
              />
            ))}
          </View>
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
