import useAddNoteButton from '@/hooks/useAddNoteButton';
import {useApiServicesAppMedicationGetmedicationsuggestionsGetQuery} from '@/state/services/medicationApi';
import {MedicationDto} from '@/types/medication';
import React, {FunctionComponent} from 'react';
import {AllInputsAddNotesButton} from '../buttons';
import {AppSelectInput} from '../inputs';
import SelectWithLeftInput from '../inputs/select-with-left-input';

const AllInputMedicationFields: FunctionComponent<{
  medication: MedicationDto;
  handleUnitValueChange: ({
    field,
    value,
  }: {
    field: keyof MedicationDto;
    value: string;
  }) => void;
}> = ({handleUnitValueChange, medication}) => {
  const {data: dosageData} =
    useApiServicesAppMedicationGetmedicationsuggestionsGetQuery();

  return (
    <>
      <SelectWithLeftInput
        label="Dose & Unit"
        placeholder="Select unit"
        leftValuePlaceholder="0"
        selectOptions={(dosageData?.unit ?? []).map(el => ({
          item: {id: el, value: el},
        }))}
        leftValue={medication?.doseValue}
        value={medication?.doseUnit}
        onChangeLeftValueText={value =>
          handleUnitValueChange({field: 'doseValue', value})
        }
        onChange={value =>
          handleUnitValueChange({field: 'doseUnit', value: value.value})
        }
      />
      <SelectWithLeftInput
        label="Frequency"
        placeholder="Select frequency"
        leftValuePlaceholder="0"
        selectOptions={(dosageData?.frequency ?? []).map(el => ({
          item: {id: el, value: el},
        }))}
        leftValue={medication?.frequencyValue}
        value={medication?.frequencyUnit}
        onChangeLeftValueText={value =>
          handleUnitValueChange({field: 'frequencyValue', value})
        }
        onChange={value =>
          handleUnitValueChange({
            field: 'frequencyUnit',
            value: value.value,
          })
        }
      />
      <SelectWithLeftInput
        label="Duration"
        placeholder="Select interval"
        leftValuePlaceholder="0"
        selectOptions={(dosageData?.duration ?? []).map(el => ({
          item: {id: el, value: el},
        }))}
        leftValue={medication?.durationValue}
        value={medication?.durationUnit}
        onChangeLeftValueText={value =>
          handleUnitValueChange({field: 'durationValue', value})
        }
        onChange={value =>
          handleUnitValueChange({
            field: 'durationUnit',
            value: value.value,
          })
        }
      />
      <AppSelectInput
        label="Directions"
        placeholder="Select directions"
        selectOptions={(dosageData?.direction ?? []).map(el => ({
          item: {id: el, value: el},
        }))}
        value={medication?.direction}
        onChange={value =>
          handleUnitValueChange({
            field: 'direction',
            value: value.value,
          })
        }
      />
      <AddNotesAndAddSymptomView
        noteValue={medication.note}
        onChangeNoteValue={value =>
          handleUnitValueChange({field: 'note', value})
        }
      />
    </>
  );
};

const AddNotesAndAddSymptomView: FunctionComponent<{
  onChangeNoteValue?: (text: string) => void;
  noteValue?: string;
}> = props => {
  const addNotesButtonState = useAddNoteButton();

  return (
    <AllInputsAddNotesButton
      addButtonLabel={'Add prescription notes'}
      buttonState={addNotesButtonState}
      // eslint-disable-next-line react-native/no-inline-styles
      buttonStyle={{alignSelf: 'flex-start'}}
      {...props}
    />
  );
};

export default AllInputMedicationFields;
