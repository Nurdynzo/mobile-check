import {AllInputsSuggestionFormHookType} from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-suggestion-form/type';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import {EMPTY_STRING} from '@/utils/constants';
import {useEffect, useState} from 'react';
import {historyDoseType} from '../../../../types';
import {useSaveVaccinationHistory} from '../use-save-vaccination-history';

export const useVaccinationHistory = ({
  id,
  formProps,
  encounterId,
}: {
  id: number;
  encounterId: number;
  formProps: AllInputsSuggestionFormHookType;
}) => {
  const defaultState = {
    title: EMPTY_STRING,
    interval: EMPTY_STRING,
    howLong: EMPTY_STRING,
    note: EMPTY_STRING,
    hasComplication: false,
  };

  const {id: patientId} = useAppSelector(selectPatient);

  const [historyDoseForm, setHistoryDoseForm] =
    useState<historyDoseType>(defaultState);
  const {handleCreateVaccinationHistory, isLoading} =
    useSaveVaccinationHistory();

  const {selectedItems, text, reset} = formProps;

  const handleUpdateHistoryDoseForm = (
    field: keyof historyDoseType,
    value: string | number | boolean,
  ) => setHistoryDoseForm({...historyDoseForm, [field]: value});

  const handleSubmitVaccinationHistory = () => {
    handleCreateVaccinationHistory({
      historyDoseForm,
      encounterId,
      id,
      patientId,
      cleanup: () => {
        setHistoryDoseForm(defaultState);
        reset();
      },
    });
  };

  useEffect(() => {
    setHistoryDoseForm(defaultState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems]);

  return {
    handleSubmitVaccinationHistory,
    handleUpdateHistoryDoseForm,
    historyDoseForm,
    isLoading,
    selectedItems,
    text,
    formProps,
  };
};
