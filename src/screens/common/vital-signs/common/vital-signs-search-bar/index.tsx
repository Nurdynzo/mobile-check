import {
  DownCaretIcon,
  SelectedCheckBoxIcon,
  UnSelectedCheckBoxIcon,
} from '@/assets/svg';
import {showToast} from '@/components/app-toast';
import {AppButton} from '@/components/buttons';
import {AppButtonInput} from '@/components/inputs';
import {AppContentSheet} from '@/components/sheets';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';
import {useApiServicesAppVitalsignsGetallGetQuery} from '@/state/services/vitalSignsApi';
import {SelectItem} from '@/types/selectItemsheet';
import {EMPTY_STRING} from '@/utils/constants';
import {zodResolver} from '@hookform/resolvers/zod';
import React, {FunctionComponent, useState} from 'react';
import {FieldErrors, useFieldArray, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {
  AllVitalSignsSchema,
  VitalSignFormSchema,
  allVitalSignsSchema,
} from '../../schema';
import {vitalSignsStyles} from '../../styles';
import useCreateVitalSigns from '../../use-create-vital-signs';
import VitalSignView from '../../vital-sign-view';
import convertVitalSignsArrayToObject from '../convertVitalSignsArrayToObject';
import convertVitalSignsFormDataToSelectOptions from '../convertVitalSignsFormDataToSelectOptions';
import processVitalSignsData from '../processVitalSignsData';

const VitalSignsSearchBar: FunctionComponent<{
  patientId: number;
  encounterId: number;
}> = ({encounterId, patientId}) => {
  const {colors} = useColors();
  const styles = vitalSignsStyles({colors});

  const [selectedVitals, setSelectedVitals] = useState<VitalSignFormSchema[]>(
    [],
  );
  const [searchText, setSearchText] = useState(EMPTY_STRING);

  const {
    sheetRef: searchSheetRef,
    openSheet: openSearchSheet,
    closeSheet: closeSearchSheet,
  } = useSheet();

  const {control, setValue, handleSubmit, reset} = useForm<AllVitalSignsSchema>(
    {
      defaultValues: {vitalSigns: []},
      resolver: zodResolver(allVitalSignsSchema),
      mode: 'onChange',
      reValidateMode: 'onChange',
    },
  );

  const {currentData: vitalSignsData} =
    useApiServicesAppVitalsignsGetallGetQuery();

  const vitalSignsRangesSites = convertVitalSignsArrayToObject(
    vitalSignsData ?? [],
  );

  const defaultVitalSigns = processVitalSignsData({
    vitalSignsData,
    filter: el => !el.isPreset,
  });

  const {fields} = useFieldArray({name: 'vitalSigns', control});

  const {
    sheetRef: takeVitalSignSheetRef,
    openSheet: openTakeVitalSignSheet,
    closeSheet: closeTakeVitalSignSheet,
  } = useSheet();

  const {handleSave, isCreateVitalSignLoading} = useCreateVitalSigns({
    encounterId,
    patientId,
  });

  const handleSubmitSuccess = (values: AllVitalSignsSchema) => {
    handleSave({
      values,
      reset: () => {
        reset({vitalSigns: defaultVitalSigns});
        setValue('vitalSigns', defaultVitalSigns);
        closeTakeVitalSignSheet();
        closeSearchSheet();
      },
    });
  };
  const handleSubmitError = (err: FieldErrors<AllVitalSignsSchema>) => {
    if (err.vitalSigns?.root?.message) {
      showToast('ERROR', {
        title: 'Cannot save empty fields',
        message: err.vitalSigns?.root?.message,
      });
    }
  };

  const selectOptions = convertVitalSignsFormDataToSelectOptions({
    vitalSignsFormData: defaultVitalSigns,
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
      <AppButtonInput
        placeholder="Search Vital signs"
        value={EMPTY_STRING}
        onPress={openSearchSheet}
        RightContent={<DownCaretIcon stroke={colors.text50} />}
      />

      <AppSelectItemSheet
        showSearchInput
        searchPlaceholder="Search Vital signs"
        sheetRef={searchSheetRef}
        searchValue={searchText}
        onSearchInputChange={setSearchText}
        onClose={() => setSelectedVitals([])}
        FooterComponent={
          <AppButton
            text="Continue"
            onPress={() => {
              setValue('vitalSigns', selectedVitals);
              openTakeVitalSignSheet();
            }}
            containerStyle={styles.sheetFooter}
          />
        }
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

      <AppContentSheet
        headerTitle="Take vital signs"
        sheetRef={takeVitalSignSheetRef}
        FooterComponent={
          <AppButton
            isDisabled={isCreateVitalSignLoading}
            isLoading={isCreateVitalSignLoading}
            text="Save"
            onPress={handleSubmit(handleSubmitSuccess, handleSubmitError)}
            containerStyle={styles.sheetFooter}
          />
        }>
        <View style={styles.takeContainer}>
          {fields?.map((el, index) => {
            const nameRef = `${'vitalSigns'}.${index}` as const;
            return (
              <VitalSignView
                key={el.id}
                control={control}
                paths={{
                  measurementRange: `${nameRef}.measurementRange`,
                  measurementSite: `${nameRef}.measurementSite`,
                  position: `${nameRef}.position`,
                  vitalReading: `${nameRef}.vitalReading`,
                }}
                measurementRanges={
                  vitalSignsRangesSites[el.vitalSignId ?? 0].ranges ?? []
                }
                measurementSites={
                  vitalSignsRangesSites[el.vitalSignId ?? 0].sites ?? []
                }
                vitalSignData={el}
                hasBorder={fields.length - 1 !== index}
                decimalPlaces={el.decimalPlaces}
              />
            );
          })}
        </View>
      </AppContentSheet>
    </>
  );
};

export default VitalSignsSearchBar;
