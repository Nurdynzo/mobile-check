import {
  PlusCircleIcon,
  SelectedCheckBoxIcon,
  UnSelectedCheckBoxIcon,
} from '@/assets/svg';
import {AppButton, AppIconButton} from '@/components/buttons';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import React, {FunctionComponent, useState} from 'react';
import {Control, UseFieldArrayReturn, useWatch} from 'react-hook-form';
import {AllVitalSignsSchema, VitalSignFormSchema} from '../../schema';
import useProcessVitalSignsFormData from '../../use-process-vital-signs-form-data';
import {addVitalSignsButtonStyles} from './styles';
import convertVitalSignsFormDataToSelectOptions from '../convertVitalSignsFormDataToSelectOptions';
import {SelectItem} from '@/types/selectItemsheet';

const AddVitalSignsButton: FunctionComponent<{
  fieldsFormHanders: Omit<
    UseFieldArrayReturn<AllVitalSignsSchema, 'vitalSigns', 'id'>,
    'fields'
  >;
  control: Control<AllVitalSignsSchema>;
}> = ({fieldsFormHanders, control}) => {
  const [selectedVitals, setSelectedVitals] = useState<VitalSignFormSchema[]>(
    [],
  );
  const [searchText, setSearchText] = useState(EMPTY_STRING);
  const {replace} = fieldsFormHanders;
  const initialVitalSigns = useWatch({control, name: 'vitalSigns'});

  const {vitalSignsFormData} = useProcessVitalSignsFormData({
    filter: el => !el.isPreset,
  });

  const {
    sheetRef: addVitalSignSheet,
    openSheet: openAddVitalSignSheet,
    closeSheet: closeAddVitalSignSheet,
  } = useSheet();

  const styles = addVitalSignsButtonStyles;
  const {colors} = useColors();

  const handleContinue = () => {
    replace(
      selectedVitals.map((el, index) =>
        initialVitalSigns.some(elF => elF.vitalSignId === el.vitalSignId)
          ? initialVitalSigns[index]
          : el,
      ),
    );
    setSelectedVitals([]);
    setSearchText(EMPTY_STRING);
    closeAddVitalSignSheet();
  };

  const selectOptions = convertVitalSignsFormDataToSelectOptions({
    vitalSignsFormData,
    query: searchText,
  });

  const handleSelect = <T,>({item}: {item: SelectItem<T>}) => {
    if (selectedVitals.some(el => el.vitalSignId === item.id)) {
      setSelectedVitals(preVS =>
        preVS.filter(el => el.vitalSignId !== item.id),
      );
    } else {
      setSelectedVitals(preVS => [...preVS, ...(item.data ? [item.data] : [])]);
    }
  };

  return (
    <>
      <AppIconButton
        onPress={openAddVitalSignSheet}
        height={32}
        icon={<PlusCircleIcon fill={colors.primary400} />}
      />

      <AppSelectItemSheet
        title="Add vitals to list"
        showSearchInput
        onOpen={() => setSelectedVitals(initialVitalSigns)}
        searchPlaceholder="Search Vital signs"
        searchValue={searchText}
        onSearchInputChange={setSearchText}
        FooterComponent={
          <AppButton
            text="Continue"
            onPress={handleContinue}
            containerStyle={styles.sheetFooter}
          />
        }
        sheetRef={addVitalSignSheet}
        selectOptions={selectOptions}
        renderRightIcon={({isSelected}) =>
          isSelected ? (
            <SelectedCheckBoxIcon height={wp(20)} width={wp(20)} />
          ) : (
            <UnSelectedCheckBoxIcon />
          )
        }
        onSelectItem={handleSelect}
        isMultiSelect
        isOptionSelected={option => {
          return selectedVitals.some(
            selected => selected?.vitalSignId === option.item.id,
          );
        }}
      />
    </>
  );
};

export default AddVitalSignsButton;
