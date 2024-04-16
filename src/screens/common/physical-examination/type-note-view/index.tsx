import {AppButton} from '@/components/buttons';
import CollapsibleNoteEntryView from '@/components/inputs/collapsible-note-entry-view';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {typeNoteStyles} from './styles';
import {
  PhysicalExaminationTypeNoteViewProps,
  PhysicalExaminationTypeNoteViewRef,
} from './types';
import useCreatePhysicalExamination from '../use-create-physical-examination';

const PhysicalExaminationTypeNoteView = forwardRef<
  PhysicalExaminationTypeNoteViewRef,
  PhysicalExaminationTypeNoteViewProps
>(({encounterId, patientId, noteTabs = [], examinationType}, ref) => {
  const styles = typeNoteStyles;
  const [notes, setNotes] = useState<{[key: string]: string}>({});

  const handleNoteChange = (key: string, text: string) =>
    setNotes(preNotes => ({
      ...preNotes,
      [key]: text,
    }));

  useImperativeHandle(ref, () => ({
    resetAllInputNoteForm: () => setNotes({}),
  }));

  const {handleSaveTypeNote, isLoading} = useCreatePhysicalExamination({
    patientId,
    encounterId,
  });

  return (
    <>
      {[
        ...(examinationType?.data === 'General' ? [examinationType.data] : []),
        ...noteTabs,
      ].map((tabName, index) => (
        <CollapsibleNoteEntryView
          key={tabName}
          marginTop={!index ? 0 : undefined}
          name={tabName}
          value={notes[tabName]}
          onChangeText={text => handleNoteChange(tabName, text)}
        />
      ))}
      <AppButton
        isDisabled={!Object.values(notes).some(el => el?.trim()) || isLoading}
        text={'Save'}
        isLoading={isLoading}
        containerStyle={styles.saveButton}
        onPress={async () =>
          await handleSaveTypeNote({
            notes,
            physicalExaminationTypeId: examinationType?.id as number,
            reset: () => setNotes({}),
          })
        }
      />
    </>
  );
});

export default PhysicalExaminationTypeNoteView;
