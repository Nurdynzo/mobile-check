import {AppButton} from '@/components/buttons';
import {AllInputsPanelWithTitleCard} from '@/components/cards';
import {ScrollableTab} from '@/components/tabs';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {proceduresStyles} from '../../styles';
import RecordedProcedures from '../recorded-procedures';
import ScrollablePillSummary from '../scrollable-pill-summary';
import AllInputsSuggestionForm from '@/components/forms/all-inputs-suggestion-form';
import useGetProcedureSuggestions from '../hooks/use-get-procedure-suggestions';
import {useAllInputsSuggestionForm} from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-suggestion-form';
import ProcedureAddNoteButton from '../add-note-button';
import useGetRequestedProcedureHistory from '../hooks/use-get-requested-procedure';
import useSaveRecordProcedure from './use-save-record-procedure';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import {BinIcon, RightCaretIcon} from '@/assets/svg';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import AppDivider from '@/components/app-divider';
import {AppText} from '@/components/common';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {summaryMenuForRecords} from '@/constants/procedures';
import {useSheet} from '@/hooks/useSheet';
import {PatientProcedureResponseDto} from '@/state/services/patientApi';
import {ItemOptionProp} from '@/types/selectItemsheet';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import {useDeleteProcedureHistory} from '../hooks/index';
import useGetRecordedProcedureHistory from './use-get-recorded-procedure-history';

const RecordProceduresView: React.FC<{encounterId: number}> = ({
  encounterId,
}) => {
  const {id: patientId} = useAppSelector(selectPatient);
  const {colors} = useColors();
  const styles = proceduresStyles({colors});
  const [currentTab, setCurrentTab] = useState<number | null>(null);
  const formProps = useAllInputsSuggestionForm();
  const {selectedItems} = formProps;
  const [noteValue, setNoteValue] = useState<string>(EMPTY_STRING);

  const {procedureSuggestionData = []} = useGetProcedureSuggestions();

  const {
    apiRequestedProcedureHistory = [],
    isSuccess: isGetRequetedProcedureHistorySuccessful,
  } = useGetRequestedProcedureHistory({
    patientId: patientId,
  });

  useEffect(() => {
    if (
      isGetRequetedProcedureHistorySuccessful &&
      apiRequestedProcedureHistory.length > 0
    ) {
      setCurrentTab(0);
    }
  }, [isGetRequetedProcedureHistorySuccessful, apiRequestedProcedureHistory]);

  const {handleSave, isSavingProcedure} = useSaveRecordProcedure({
    patientId,
    encounterId,
  });

  const reset = () => {
    formProps.reset();
    setNoteValue(EMPTY_STRING);
    setCurrentTab(0);
  };

  const getSnowmedId = () => {
    const selectedProcedure = apiRequestedProcedureHistory[currentTab!];
    if (selectedProcedure && selectedProcedure.selectedProcedures) {
      return selectedProcedure.selectedProcedures[0].snowmedId;
    } else {
      return null;
    }
  };

  const requestedProcedures = apiRequestedProcedureHistory
    .filter(
      item =>
        item.selectedProcedures !== null &&
        item.selectedProcedures !== undefined,
    )
    .map(item => item.selectedProcedures![0].procedureName);

  const isSaveButtonDisabled =
    apiRequestedProcedureHistory.length === 0 || selectedItems.length === 0;

  const handleTabSelection = (index: number) => {
    if (currentTab !== index) {
      formProps.reset();
      setCurrentTab(currentTab !== index ? index : null);
    }
  };

  return (
    <>
      {requestedProcedures.length === 0 ? (
        <></>
      ) : (
        <ScrollableTab
          tabs={requestedProcedures}
          currentIndex={currentTab}
          activeColor={{background: 'default300'}}
          unActiveColor={{background: 'neutral100'}}
          onPress={handleTabSelection}
          style={{marginBottom: wp(16)}}
        />
      )}
      <AllInputsPanelWithTitleCard
        title={'Record procedures'}
        style={{marginHorizontal: wp(24)}}>
        <AllInputsSuggestionForm
          expandSheetHeaderTitle="Select suggestion(s) for request procedures"
          formProps={formProps}
          suggestions={procedureSuggestionData}
        />

        <ProcedureAddNoteButton
          noteValue={noteValue}
          selectedItems={selectedItems}
          onChangeNoteValue={note => setNoteValue(note)}
        />
        <AppButton
          text={'Save'}
          containerStyle={styles.recordProceduresSaveButton}
          isLoading={isSavingProcedure}
          isDisabled={isSaveButtonDisabled}
          onPress={() => {
            handleSave({
              selectedItems,
              note: noteValue,
              reset,
              parentProcedureId: apiRequestedProcedureHistory[currentTab!].id,
              snowmedId: getSnowmedId(),
            });
          }}
        />
        <View style={{gap: wp(32)}}>
          <ScrollablePillSummary />
          <RecordedProcedures />
        </View>
        <RecordProceduresSummaryView patientId={patientId} />
      </AllInputsPanelWithTitleCard>
    </>
  );
};

export default RecordProceduresView;

const RecordProceduresSummaryView = ({patientId}: {patientId: number}) => {
  const {history}: {history: PatientProcedureResponseDto[] | undefined} =
    useGetRecordedProcedureHistory({patientId});

  if (!history?.length) {
    return <></>;
  }
  return (
    <>
      <AppDivider marginTop={16} marginBottom={24} />
      <AllInputsHistoryListView
        data={history}
        renderItem={({item}) => <HistoryTile key={item.id} item={item} />}
      />
    </>
  );
};

const HistoryTile = ({item}: {item: PatientProcedureResponseDto}) => {
  const {closeSheet, openSheet, sheetRef} = useSheet();
  const {colors} = useColors();
  const summary = createSummaryFromSelectedProcedures(item);
  const {handleDeletion, isDeleting} = useDeleteProcedureHistory();

  const handleSummaryDeletion = () => {
    handleDeletion({id: item.id});
  };

  const handleItemSelection = (value: string) => {
    switch (value) {
      case 'Delete':
        return handleSummaryDeletion();
      default:
        return;
    }
  };
  return (
    <>
      <AllInputsHistoryTile
        key={item.id}
        date={checkDay(item.creationTime)}
        time={convertToReadableTime(item.creationTime)}
        onPress={openSheet}
        isLoading={isDeleting}
        textComponent={
          <AppText
            type={'body_2_semibold'}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              textDecorationLine: item.isDeleted ? 'line-through' : undefined,
            }}
            text={[summary, '\n', item?.note]}
          />
        }
      />
      <AppSelectItemSheet
        removeHeader
        sheetRef={sheetRef}
        selectOptions={summaryMenuForRecords}
        renderRightIcon={({
          item: menuIcon,
        }: {
          item?: ItemOptionProp<unknown> | undefined;
        }) =>
          menuIcon?.item?.value?.toLowerCase() === 'delete' ? (
            <BinIcon fill={colors.danger100} />
          ) : (
            <RightCaretIcon stroke={colors.text400} />
          )
        }
        onSelectItem={({item: selectedOption}) => {
          handleItemSelection(selectedOption.value);
          closeSheet();
        }}
      />
    </>
  );
};

const createSummaryFromSelectedProcedures = (
  item: PatientProcedureResponseDto,
): string => {
  const procedures = item.selectedProcedures ?? [];

  const procedureNames = procedures.map(procedure => procedure.procedureName);

  let summary = procedureNames.join(', ') + '.';
  if (item.isDeleted) {
    summary += `\nDeleted by ${item.deletedUser}`;
  }
  return summary;
};
