import {useColors} from '@/hooks/useColors';
import {SnowstormSimpleResponseDto} from '@/state/services/procedureApi';
import {proceduresStyles} from '../../styles';
import useAddNoteButton from '@/hooks/useAddNoteButton';
import {useEffect} from 'react';
import AllInputsAddNotesButton from '@/components/buttons/all-inputs-add-note-button';
import React from 'react';

const ProcedureAddNoteButton = ({
  noteValue,
  onChangeNoteValue,
  selectedItems,
}: {
  noteValue: string;
  onChangeNoteValue: (value: string) => void;
  selectedItems: SnowstormSimpleResponseDto[];
}) => {
  const {colors} = useColors();
  const styles = proceduresStyles({colors});
  const addNotesButtonState = useAddNoteButton();

  const onFormChange = () => {
    if (selectedItems.length > 1) {
      addNotesButtonState.onDisable();
    } else {
      addNotesButtonState.onClose();
    }
  };

  useEffect(() => {
    onFormChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems]);

  return (
    <AllInputsAddNotesButton
      addButtonLabel={'Add procedures notes'}
      buttonState={addNotesButtonState}
      buttonStyle={styles.addNotesButton}
      noteValue={noteValue}
      onChangeNoteValue={onChangeNoteValue}
    />
  );
};

export default ProcedureAddNoteButton;
