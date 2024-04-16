import {useAllInputsSuggestionForm} from '@/components/forms';
import {
  CreateVaccinationDto,
  useApiServicesAppVaccineGetallGetQuery,
  useApiServicesAppVaccineGetvaccineGetQuery,
} from '@/state/services/vaccineApi';
import {RootState} from '@/state/store';
import VoidFunction from '@/types/voidfunction';
import {EMPTY_STRING} from '@/utils/constants';
import {getOrdinalNumber} from '@/utils/helpers/vaccine-util';
import {zodResolver} from '@hookform/resolvers/zod';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {Disease, VaccineIndexAndDisease} from '../../../../types';
import {
  ArrayCreateVaccinationDtoSchema,
  VaccineScheduleDtoArray,
} from '../schema';
import {useSaveRecordedVaccination} from './use-save-recorded-vaccination';

export const useRecordVaccination = ({encounterId}: {encounterId: number}) => {
  const {id: patientId} = useSelector(
    (state: RootState) => state.selectedPatient,
  );
  const formProps = useAllInputsSuggestionForm({isSingleSelect: true});
  const {selectedItems, text, setText, setSelectedItems} = formProps;
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: {isValid: isFormValid},
  } = useForm<VaccineScheduleDtoArray>({
    resolver: zodResolver(ArrayCreateVaccinationDtoSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    resetOptions: {keepDefaultValues: true},
  });

  const {handleSaveRecordedVaccination, isCreatingVaccineRequest} =
    useSaveRecordedVaccination({encounterId});
  const {data: apiVaccines} = useApiServicesAppVaccineGetallGetQuery();

  const {data: apiSelectedVaccine, isFetching: isFetchingSelectedVaccine} =
    useApiServicesAppVaccineGetvaccineGetQuery(
      {
        id: Number(selectedItems[0]?.id),
      },
      {skip: !selectedItems[0]?.id},
    );
  const [vaccination, setVaccination] = useState<Disease[]>([]);

  const defaultValues = {
    dueDate: undefined,
    patientId,
    isAdministered: false,
    dateAdministered: undefined,
    hasComplication: false,
    vaccineBrand: EMPTY_STRING,
    vaccineBatchNo: EMPTY_STRING,
    note: EMPTY_STRING,
  };

  /** Gathering all the medications for easy mapping and display. */
  const allVaccines = vaccination.flatMap(vaccine => vaccine.data.vaccines);

  const handleSaveVaccination = async (cleanup: VoidFunction) => {
    handleSaveRecordedVaccination({
      vaccinations: allVaccines,
      cleanup: () => {
        reset();
        setSelectedItems([]);
        setVaccination([]);
        setValue('vaccines', []);
        cleanup();
      },
    });
  };

  const handleClearVaccineForm = () => {
    setVaccination([]);
  };

  const addSelectedVaccineForPreview = (vaccinationData: Disease) => {
    setVaccination(prev => [vaccinationData, ...prev]);
    reset();
    setSelectedItems([]);
    setValue('vaccines', []);
  };

  /**
   * This function serves a UI-specific purpose. It identifies the ID of a specific vaccine drug and returns its position within the vaccines for a particular disease, along with the name of the disease.
   */
  const findVaccineIndexAndDisease = (
    vaccineScheduleId: number,
  ): VaccineIndexAndDisease | null => {
    for (const vaccine of vaccination) {
      for (let i = 0; i < vaccine.data.vaccines.length; i++) {
        if (vaccine.data.vaccines[i].vaccineScheduleId === vaccineScheduleId) {
          return {index: i, name: vaccine.name};
        }
      }
    }
    return null;
  };

  const formatVaccineForPreview = (vaccine: CreateVaccinationDto) => {
    return `${
      findVaccineIndexAndDisease(Number(vaccine.vaccineScheduleId))?.name
    } vaccine ${getOrdinalNumber(
      (Number(
        findVaccineIndexAndDisease(Number(vaccine.vaccineScheduleId))?.index,
      ) + 1) as number,
    )} dose administered on ${
      vaccine.dateAdministered
        ? vaccine.dateAdministered.toString()
        : EMPTY_STRING
    }`;
  };

  useEffect(() => {
    setValue('vaccines', []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems]);

  useEffect(() => {
    if (apiSelectedVaccine?.schedules?.length) {
      const defaultVaccines = (apiSelectedVaccine?.schedules ?? []).map(
        vaccine => ({
          ...defaultValues,
          dueDate: undefined,
          dateAdministered: undefined,
          vaccineId: apiSelectedVaccine?.id,
          vaccineScheduleId: vaccine?.id,
        }),
      );
      setValue('vaccines', defaultVaccines);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiSelectedVaccine]);

  return {
    formProps,
    selectedItems,
    text,
    setText,
    setSelectedItems,
    control,
    handleSubmit,
    apiVaccines,
    isCreatingVaccineRequest,
    apiSelectedVaccine,
    isFetchingSelectedVaccine,
    vaccination,
    setVaccination,
    handleSaveVaccination,
    handleClearVaccineForm,
    addSelectedVaccineForPreview,
    isFormValid,
    findVaccineIndexAndDisease,
    allVaccines,
    formatVaccineForPreview,
  };
};
