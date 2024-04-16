import {ArrowRightIcon, BinIcon} from '@/assets/svg';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {AppButton, ExpandIconButton} from '@/components/buttons';
import {AllInputsPanelWithTitleCard} from '@/components/cards';
import {AppSeperator, AppText} from '@/components/common';
import {
  AllInputsSuggestionForm,
  useAllInputsSuggestionForm,
} from '@/components/forms';
import {AppTextInput} from '@/components/inputs';
import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';
import {AppContentSheet, AppMenuSheet} from '@/components/sheets';
import {useSheet} from '@/hooks/useSheet';
import {GeneralScreenProps} from '@/navigation/types';
import {
  InputNotesSummaryForReturnDto,
  useApiServicesAppInputnotesGetpatientinputnotesGetQuery,
} from '@/state/services/inputNotesApi';
import {useApiServicesAppSnowstormGetsymptomsuggestionGetQuery} from '@/state/services/snowstorm';
import {MenuOptionsProp} from '@/types/menusheet';
import VoidFunction from '@/types/voidfunction';
import {EMPTY_STRING} from '@/utils/constants';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {addNotesStyles} from './styles';
import {useDeleteInputNote} from './use-delete-input-note';
import {useSaveInputNote} from './use-save-input-note';

const AddNotes: FunctionComponent<GeneralScreenProps<'ADD_NOTES'>> = ({
  route,
}) => {
  const styles = addNotesStyles;
  const {patientId, encounterId} = route?.params ?? {};
  const {currentData: notesSuggestionData = []} =
    useApiServicesAppSnowstormGetsymptomsuggestionGetQuery({
      inputType: 'InputNotes',
    });
  const formProps = useAllInputsSuggestionForm();
  const {reset, selectedItems} = formProps;

  const {handleSave, isCreateNoteLoading} = useSaveInputNote({
    encounterId,
    patientId,
  });

  return (
    <>
      <ScaffoldWithAnimatedHeader screenTitle={'Add notes'}>
        <AllInputsPanelWithTitleCard title="Add notes">
          <AllInputsSuggestionForm
            expandSheetHeaderTitle="Select suggestion(s) for notes"
            formProps={formProps}
            suggestions={notesSuggestionData}
            ActionBtnContent={
              <ExpandableNoteSheet
                initialTextValue={formProps.text}
                onSave={formProps.setText}
              />
            }
          />
          <AppButton
            text="Save"
            isLoading={isCreateNoteLoading}
            isDisabled={isCreateNoteLoading}
            containerStyle={styles.saveBtn}
            onPress={() =>
              handleSave({
                selectedItems,
                reset,
              })
            }
          />
          <InputNoteHistory patientId={patientId} />
        </AllInputsPanelWithTitleCard>
      </ScaffoldWithAnimatedHeader>
    </>
  );
};

export default AddNotes;

const ExpandableNoteSheet: FunctionComponent<{
  initialTextValue: string;
  onSave: (text: string) => void;
}> = ({initialTextValue, onSave}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {sheetRef, openSheet, closeSheet} = useSheet();
  const styles = addNotesStyles;

  return (
    <>
      <ExpandIconButton onPress={openSheet} />
      <AppContentSheet
        headerTitle="Add notes"
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        containerStyle={styles.containerStyle}>
        <ExpandableNoteSheetView
          initialTextValue={initialTextValue}
          onSave={onSave}
          closeSheet={closeSheet}
          isOpen={isOpen}
        />
      </AppContentSheet>
    </>
  );
};

const ExpandableNoteSheetView: FunctionComponent<{
  initialTextValue: string;
  onSave: (text: string) => void;
  closeSheet: VoidFunction;
  isOpen: boolean;
}> = ({initialTextValue, onSave, isOpen, closeSheet}) => {
  const [text, setText] = useState(EMPTY_STRING);
  const styles = addNotesStyles;

  useEffect(() => {
    if (isOpen) {
      setText(initialTextValue);
    } else {
      setText(EMPTY_STRING);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) {
    return <></>;
  }

  return (
    <>
      <AppTextInput
        placeholder="Type your notes here"
        height={240}
        value={text}
        onChangeText={val => setText(val)}
        multiline
        baseContainerStyle={styles.baseinputContentContainer}
      />
      <AppButton
        text="Save changes"
        onPress={() => {
          onSave(text);
          closeSheet();
        }}
      />
    </>
  );
};

const InputNoteHistory: FunctionComponent<{
  patientId: number;
}> = ({patientId}) => {
  const styles = addNotesStyles;
  const {currentData: inputSummaries} =
    useApiServicesAppInputnotesGetpatientinputnotesGetQuery({patientId});

  if (!inputSummaries?.length) {
    return <></>;
  }

  return (
    <>
      <AppSeperator style={styles.seperator} />

      <AllInputsHistoryListView
        data={inputSummaries}
        renderItem={({item}) => (
          <InputNoteHistoryCard key={item.id} item={item} />
        )}
      />
    </>
  );
};

const InputNoteHistoryCard: FunctionComponent<{
  item: InputNotesSummaryForReturnDto;
}> = ({item}) => {
  const {handleDeleteNote, isDeletingNote} = useDeleteInputNote();
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
        isLoading={isDeletingNote}
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
