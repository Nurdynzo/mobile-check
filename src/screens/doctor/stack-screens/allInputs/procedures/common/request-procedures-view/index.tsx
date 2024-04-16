import {AppButton} from '@/components/buttons';
import {AllInputsPanelWithTitleCard} from '@/components/cards';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import React, {useState} from 'react';
import {proceduresStyles} from '../../styles';
import RequestProceduresSummaryView from '../request-procedures-summary-view';
import {
  AllInputsSuggestionForm,
  useAllInputsSuggestionForm,
} from '@/components/forms';
import useSaveRequestProcedure from './use-save-request-procedure';
import useGetProcedureSuggestions from '../hooks/use-get-procedure-suggestions';
import ProcedureAddNoteButton from '../add-note-button';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';

const RequestProceduresView: React.FC<{encounterId: number}> = ({
  encounterId,
}) => {
  const {id: patientId} = useAppSelector(selectPatient);
  const {colors} = useColors();
  const styles = proceduresStyles({colors});

  const formProps = useAllInputsSuggestionForm();
  const {selectedItems} = formProps;

  const [noteValue, setNoteValue] = useState<string>(EMPTY_STRING);

  const {procedureSuggestionData = []} = useGetProcedureSuggestions();

  const {handleSave, isSavingProcedure} = useSaveRequestProcedure({
    patientId,
    encounterId,
  });

  const reset = () => {
    formProps.reset();
    setNoteValue(EMPTY_STRING);
  };

  return (
    <AllInputsPanelWithTitleCard
      title={'Request procedures'}
      style={{marginHorizontal: wp(24)}}>
      <AllInputsSuggestionForm
        expandSheetHeaderTitle={'Select suggestion(s) for request procedures'}
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
        containerStyle={styles.requestProceduresSaveButton}
        isLoading={isSavingProcedure}
        onPress={() => {
          handleSave({
            selectedItems,
            note: noteValue,
            reset,
          });
        }}
      />

      <RequestProceduresSummaryView patientId={patientId} />
    </AllInputsPanelWithTitleCard>
  );
};

export default RequestProceduresView;
