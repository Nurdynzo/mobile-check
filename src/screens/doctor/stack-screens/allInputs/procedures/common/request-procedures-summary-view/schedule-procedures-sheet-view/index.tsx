import React from 'react';
import {PatientProcedureResponseDto} from '@/state/services/procedureApi';
import {ModalizeSheetRef} from '@/types/sheet';
import useSaveScheduledProcedures from './use-save-scheduled-procedures';
import ProceduresSessionBottomSheetView from '../common/procedures-session-bottom-sheet-view';
import useProceduresSessionForm from '../common/use-procedures-session-form';

const ScheduleProceduresSheetView = ({
  item,
  sheetRef,
  closeSheet,
}: {
  item: PatientProcedureResponseDto;
  sheetRef: ModalizeSheetRef | undefined;
  closeSheet: () => void;
}) => {
  const {
    selectedProcedures,
    setSelectedProcedures,
    handleSave,
    isCreateRequestProcedureLoading,
  } = useSaveScheduledProcedures({
    procedureList: item,
  });

  const formProps = useProceduresSessionForm({
    item,
    selectedProcedures,
    setSelectedProcedures,
  });

  const {isSameSession} = formProps;

  return (
    <ProceduresSessionBottomSheetView
      sheetRef={sheetRef}
      formProps={formProps}
      headerTitle={'Schedule procedure'}
      isSaving={isCreateRequestProcedureLoading}
      onSave={() => {
        handleSave({isSameSession, reset: closeSheet});
      }}
    />
  );
};

export default ScheduleProceduresSheetView;
