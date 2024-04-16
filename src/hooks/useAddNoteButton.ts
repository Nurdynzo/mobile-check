import {AddNotesButtonState} from '@/types/addNoteButtonState';
import {useState} from 'react';

const useAddNoteButton = (initialState?: AddNotesButtonState) => {
  const [state, setButtonState] = useState<AddNotesButtonState>(
    initialState ?? AddNotesButtonState.close,
  );

  const onOpen = () => {
    setButtonState(AddNotesButtonState.open);
  };
  const onClose = () => {
    setButtonState(AddNotesButtonState.close);
  };

  const onDisable = () => {
    setButtonState(AddNotesButtonState.disable);
  };

  return {state, onOpen, onClose, onDisable};
};

export default useAddNoteButton;
