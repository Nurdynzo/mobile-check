import {MicrophoneIcon} from '@/assets/svg';
import {showToast} from '@/components/app-toast';
import {AppButton} from '@/components/buttons';
import AllInputsClosedPanelButton from '@/components/buttons/all-inputs-closed-panel-button';
import {OpenedPanel} from '@/components/inputs/collapsible-note-entry-view';
import {useVoiceText} from '@/hooks/useVoiceText';
import React, {FunctionComponent, useEffect, useState} from 'react';
import SpeachTextControlView from '../speech-text-control-view';
import {useCreateSymptomSummary} from '../use-create-symptom-summary';
import {presentingComplaintsTypeNotesStyles} from './styles';
import {EMPTY_STRING} from '@/utils/constants';

const PresentingComplaintsTypeNoteView: FunctionComponent<{
  patientId: number;
  encounterId: number;
}> = ({encounterId, patientId}) => {
  const styles = presentingComplaintsTypeNotesStyles();
  const [note, setNote] = useState(noteDefaultValues);
  const [speechText, setSpeechText] = useState('');
  const [selectedNote, setSelectedNote] = useState<
    keyof typeof noteDefaultValues | null
  >(null);

  const {handleSaveTypeNote, isLoading} = useCreateSymptomSummary({
    encounterId,
    patientId,
  });

  const handleNoteChange = (
    key: keyof typeof noteDefaultValues,
    text: string,
  ) =>
    setNote(preNotes => ({
      ...preNotes,
      [key]: text,
    }));

  useEffect(() => {
    if (selectedNote && speechText) {
      handleNoteChange(selectedNote, speechText);
    }
  }, [speechText, selectedNote]);

  const {
    islistening,
    startListening,
    stopListening,
    pauseListening,
    recordTime,
    speechVolume,
    startTime,
  } = useVoiceText({
    onChangeText: setSpeechText,
  });

  return (
    <>
      <>
        {!startTime ? (
          <AppButton
            height={40}
            width={undefined}
            buttonColor={'white'}
            text={'Record audio'}
            textColor={'primary400'}
            LeftContent={<MicrophoneIcon />}
            onPress={
              selectedNote
                ? startListening
                : () =>
                    showToast('INFO', {
                      title: 'Note not selected',
                      message: 'Please select a note below to record speach',
                    })
            }
          />
        ) : (
          <SpeachTextControlView
            islistening={islistening}
            recordTime={recordTime}
            speechVolume={speechVolume}
            pauseListing={pauseListening}
            startListing={startListening}
            stopListing={stopListening}
          />
        )}
      </>
      {noteEntries.map(({key, name}) => (
        <CollapsibleNoteEntryView
          key={key}
          name={name}
          isOpen={selectedNote === key}
          value={note[key]}
          setOpen={isOpen => {
            stopListening();
            setSelectedNote(isOpen ? key : null);
            if (!isOpen) {
              setSpeechText(EMPTY_STRING);
            }
          }}
          onChangeText={text => handleNoteChange(key, text)}
        />
      ))}
      <AppButton
        isDisabled={!Object.values(note).some(el => el?.trim()) || isLoading}
        text={'Save'}
        isLoading={isLoading}
        containerStyle={styles.saveButton}
        onPress={() =>
          handleSaveTypeNote({
            values: note,
            reset: () => setNote(noteDefaultValues),
          })
        }
      />
    </>
  );
};

export default PresentingComplaintsTypeNoteView;

const CollapsibleNoteEntryView = ({
  name,
  marginTop = 16,
  isOpen,
  setOpen = () => null,
  onChangeText,
  value,
}: {
  name: string;
  marginTop?: number;
  isOpen?: boolean;
  setOpen?: (val: boolean) => void;
  value?: string;
  onChangeText?: (text: string) => void;
}) => {
  return (
    <>
      {isOpen ? (
        <OpenedPanel
          marginTop={marginTop}
          name={name}
          value={value}
          onChangeText={onChangeText}
          onClose={() => {
            setOpen(false);
          }}
        />
      ) : (
        <AllInputsClosedPanelButton
          height={62}
          marginTop={marginTop}
          text={name}
          onPress={() => {
            setOpen(true);
          }}
        />
      )}
    </>
  );
};

export const noteDefaultValues = {
  complaintsHistory: EMPTY_STRING,
  pastMedical: EMPTY_STRING,
  familyHistory: EMPTY_STRING,
  socialHistory: EMPTY_STRING,
  otherHistory: EMPTY_STRING,
};

const noteEntries = [
  {
    key: 'complaintsHistory',
    name: 'History of presenting complaints',
  },
  {key: 'pastMedical', name: 'Past medical history'},
  {key: 'familyHistory', name: 'Family history'},
  {key: 'socialHistory', name: 'Social history'},
  {key: 'otherHistory', name: 'Other history'},
] as const;
