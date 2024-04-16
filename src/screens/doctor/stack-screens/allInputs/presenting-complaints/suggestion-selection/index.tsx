import {ArrowRightIcon, BinIcon, DownCaretIcon} from '@/assets/svg';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {
  AllInputsAddNotesButton,
  AllInputsPlusButton,
  AppButton,
} from '@/components/buttons';
import {AllInputsPanelWithTitleCard} from '@/components/cards';
import AllInputPresaveItemView from '@/components/cards/all-input-pre-save-item-view';
import {AppText} from '@/components/common';
import useAddNoteButton from '@/hooks/useAddNoteButton';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {
  PatientSymptomSummaryForReturnDto,
  useApiServicesAppSymptomGetpatientsummaryGetQuery,
} from '@/state/services/symptomApi';
import {
  SocratesState,
  resetTempSocratesState,
  selectStates,
  selectTempState,
  setSavedSocratesStates,
  setSocratesStates,
  setTempStateNote,
} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import {setPresentingComplaintsSelectedResult} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaintsSearchBar';
import {AddNotesButtonState} from '@/types/addNoteButtonState';
import {ListRenderItemInfo} from '@shopify/flash-list';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {combineSocratesStateToDraftString} from './combineSocratesStateToDraftString';
import {
  AssociationsView,
  CharacterView,
  ExacerbatingView,
  OnsetView,
  RadiationView,
  SeverityView,
  SiteView,
  TimeCourseView,
} from './socrates';
import {presentingComplaintsSuggestionSelectionStyles} from '../styles';

import {AppMenuSheet} from '@/components/sheets';
import {useSheet} from '@/hooks/useSheet';
import {MenuOptionsProp} from '@/types/menusheet';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import {useCreateSymptomSummary} from '../use-create-symptom-summary';
import {useDeleteSymptomSummary} from './use-delete-symptom-summary';
import {wp} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';

const PresentingComplaintsSuggestionView = ({
  activeTab,
  encounterId,
  patientId,
}: {
  activeTab: number;
  patientId: number;
  encounterId: number;
}) => {
  const {title, SocratesView} = socratesViewItems[activeTab];
  const styles = presentingComplaintsSuggestionSelectionStyles();

  return (
    <AllInputsPanelWithTitleCard title={title}>
      {SocratesView}

      <AddNotesAndAddSymptomView />

      <PreSaveListView encounterId={encounterId} patientId={patientId} />

      <HistoryView patientId={patientId} />

      <View style={styles.socialAndPastHistoryContainer}>
        <AppButton
          isDisabled
          text={'Past medical hx'}
          containerStyle={styles.socialAndPastHistoryFlex}
        />
        <AppButton
          isDisabled
          text={'Social hx'}
          containerStyle={styles.socialAndPastHistoryFlex}
        />
      </View>

      <AppButton
        isDisabled
        text={'Review detailed hx'}
        containerStyle={styles.reviewDetailedHistoryButton}
        RightContent={<DownCaretIcon stroke={'white'} />}
      />
    </AllInputsPanelWithTitleCard>
  );
};

const PreSaveListView: FunctionComponent<{
  patientId: number;
  encounterId: number;
}> = ({encounterId, patientId}) => {
  const savedSocratesStates = useSelector(selectStates);
  const styles = presentingComplaintsSuggestionSelectionStyles();
  const dispatch = useDispatch();

  const handleDelete = (index: number) => {
    dispatch(
      setSavedSocratesStates(savedSocratesStates.filter((_, i) => i !== index)),
    );
  };

  const {handleSaveSymptomSummary, isLoading} = useCreateSymptomSummary({
    patientId,
    encounterId,
  });

  const handleEdit = ({
    index,
    socrateState,
  }: {
    socrateState: SocratesState;
    index: number;
  }) => {
    dispatch(setSocratesStates(socrateState));
    handleDelete(index);
  };

  return (
    <>
      <View style={styles.preSaveSummary}>
        {savedSocratesStates.map((pc, index) => {
          const summary = combineSocratesStateToDraftString({socrates: pc});

          return (
            <AllInputPresaveItemView
              onEdit={() => handleEdit({index, socrateState: pc})}
              onRemove={() => handleDelete(index)}
              key={index}
              TextComponent={
                <AppText
                  text={`${pc.mainSearchResult.name} - ${summary}`}
                  type="body_2_semibold"
                  color="text400"
                />
              }
            />
          );
        })}
      </View>
      <AppButton
        isDisabled={!savedSocratesStates.length || isLoading}
        text={'Save'}
        onPress={handleSaveSymptomSummary}
        isLoading={isLoading}
        containerStyle={styles.saveButton}
      />
    </>
  );
};

const AddNotesAndAddSymptomView = () => {
  const styles = presentingComplaintsSuggestionSelectionStyles();
  const addNotesButtonState = useAddNoteButton();
  const dispatch = useAppDispatch();

  const savedSocratesState = useAppSelector(selectStates);
  const inputtedSocratesState = useAppSelector(selectTempState);
  const {onSet, note, mainSearchResult} = inputtedSocratesState;
  const {interval, intervalUnit} = onSet;

  const addNoteButton = (
    <AllInputsAddNotesButton
      addButtonLabel={'Add symptom notes'}
      buttonState={addNotesButtonState}
      buttonStyle={styles.addNotesButton}
      noteValue={note}
      onChangeNoteValue={text => dispatch(setTempStateNote(text))}
    />
  );

  const addSymptomButton = (
    <AllInputsPlusButton
      text={'Add symptom'}
      isDisabled={!interval || !intervalUnit || !mainSearchResult?.name}
      onPress={() => {
        dispatch(
          setSavedSocratesStates([
            ...savedSocratesState,
            inputtedSocratesState,
          ]),
        );
        dispatch(resetTempSocratesState());
        dispatch(
          dispatch(
            setPresentingComplaintsSelectedResult({
              id: EMPTY_STRING,
              name: EMPTY_STRING,
            }),
          ),
        );
      }}
      buttonStyle={styles.plusButton}
    />
  );

  return addNotesButtonState.state === AddNotesButtonState.open ? (
    <View style={styles.addNoteOpenedContainer}>
      {addNoteButton}
      {addSymptomButton}
    </View>
  ) : (
    <>
      <View style={styles.addNoteClosedContainer}>
        {addNoteButton}
        {addSymptomButton}
      </View>
    </>
  );
};

const HistoryView: FunctionComponent<{patientId: number}> = ({patientId}) => {
  const {currentData: symptomSummary} =
    useApiServicesAppSymptomGetpatientsummaryGetQuery({
      patientId,
    });

  return (
    <AllInputsHistoryListView
      data={symptomSummary ?? []}
      renderItem={renderedItem => <HistoryRenderItem {...renderedItem} />}
      estimatedItemSize={5}
      removeSeparator
      containerStyles={{height: undefined}}
    />
  );
};

const HistoryRenderItem: FunctionComponent<
  ListRenderItemInfo<PatientSymptomSummaryForReturnDto>
> = ({item}) => {
  const {closeSheet, openSheet, sheetRef} = useSheet();

  const {handleDeleteSymptomSummary, isDeletingSymptomSummary} =
    useDeleteSymptomSummary();

  const menuOptions: MenuOptionsProp = [
    {value: 'Mark as done', onPress: () => null},
    {value: 'Review severity', onPress: () => null},
    {value: 'Highlight for attention', onPress: () => null},
    {
      value: 'Delete',
      onPress: () => handleDeleteSymptomSummary(item.id),
      renderRightIcon: () => <BinIcon />,
      color: 'danger300',
    },
  ];
  return (
    <>
      <AllInputsHistoryTile
        time={convertToReadableTime(item?.creationTime)}
        date={checkDay(item?.creationTime)}
        onPress={openSheet}
        containerStyles={{marginTop: wp(24)}}
        isLoading={isDeletingSymptomSummary}
        textComponent={
          <AppText
            type={'body_2_semibold'}
            text={[
              <AppText
                key={0}
                text={item?.symptomEntryTypeName}
                type={'body_2_bold'}
              />,
              ` - ${item?.description}`,
            ]}
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

export default PresentingComplaintsSuggestionView;

type socratesViewType = {
  title: string;
  SocratesView: JSX.Element;
};

export const socratesViewItems: socratesViewType[] = [
  {
    title: 'Site',
    SocratesView: <SiteView />,
  },
  {
    title: 'Onset',
    SocratesView: <OnsetView />,
  },
  {
    title: 'Character',
    SocratesView: <CharacterView />,
  },
  {
    title: 'Radiation',
    SocratesView: <RadiationView />,
  },
  {
    title: 'Association',
    SocratesView: <AssociationsView />,
  },
  {
    title: 'Time course',
    SocratesView: <TimeCourseView />,
  },
  {
    title: 'Exacerbating/relieving factors',
    SocratesView: <ExacerbatingView />,
  },
  {
    title: 'Severity',
    SocratesView: <SeverityView />,
  },
];
