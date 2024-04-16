import {ArrowRightIcon} from '@/assets/svg';
import {showToast} from '@/components/app-toast';
import {AppButton} from '@/components/buttons';
import {AppSeperator} from '@/components/common';
import {AppToggleSwitch} from '@/components/inputs';
import {AppContentSheet} from '@/components/sheets';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';
import {BaseSheetProps} from '@/types/sheet';
import {EMPTY_STRING} from '@/utils/constants';
import {zodResolver} from '@hookform/resolvers/zod';
import React, {FunctionComponent, useState} from 'react';
import {FieldErrors, useFieldArray, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {AllVitalSignsSchema, allVitalSignsSchema} from '../../schema';
import {vitalSignsStyles} from '../../styles';
import useProcessVitalSignsFormData from '../../use-process-vital-signs-form-data';
import useRecheckVitalSign from '../../use-recheck-vital-sign';
import VitalSignView from '../../vital-sign-view';
import convertVitalSignsFormDataToSelectOptions from '../convertVitalSignsFormDataToSelectOptions';

const RecheckVitalsSheet: FunctionComponent<
  {
    vitalSigns?: {id: number; vitalSignId: number}[];
    patientId: number;
    encounterId: number;
    checkAll?: boolean;
  } & BaseSheetProps
> = ({
  vitalSigns = [],
  closeSheet,
  sheetRef,
  encounterId,
  patientId,
  checkAll,
}) => {
  const {colors} = useColors();
  const styles = vitalSignsStyles({colors});
  const [shouldDeleteRecent, setShouldDeleteRecent] = useState(false);

  const [searchText, setSearchText] = useState(EMPTY_STRING);

  const {control, setValue, handleSubmit, reset} = useForm<AllVitalSignsSchema>(
    {
      defaultValues: {vitalSigns: []},
      resolver: zodResolver(allVitalSignsSchema),
      mode: 'onChange',
      reValidateMode: 'onChange',
    },
  );

  const {vitalSignsFormData: defaultVitalSigns, vitalSignsRangesSites} =
    useProcessVitalSignsFormData({
      filter: el =>
        checkAll ||
        vitalSigns.map(elVS => elVS.vitalSignId).includes(el.id ?? 0),
    });

  const {fields} = useFieldArray({name: 'vitalSigns', control});

  const {handleRecheck, isRecheckVitalSignLoading} = useRecheckVitalSign({
    encounterId,
    patientId,
  });

  const {
    sheetRef: takeVitalSignSheetRef,
    openSheet: openTakeVitalSignSheet,
    closeSheet: closeTakeVitalSignSheet,
  } = useSheet();

  const handleSubmitSuccess = (values: AllVitalSignsSchema) => {
    handleRecheck({
      values: values.vitalSigns[0],
      id:
        vitalSigns.find(
          el => el.vitalSignId === values.vitalSigns[0].vitalSignId,
        )?.id ?? 0,
      deleteMostRecentRecord: shouldDeleteRecent,
      reset: () => {
        reset({vitalSigns: defaultVitalSigns});
        setValue('vitalSigns', defaultVitalSigns);
        closeTakeVitalSignSheet();
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

  return (
    <>
      <AppSelectItemSheet
        showSearchInput
        title="Select vitals to recheck"
        searchPlaceholder="Search Vital signs"
        sheetRef={sheetRef}
        searchValue={searchText}
        onSearchInputChange={setSearchText}
        onClose={() => setShouldDeleteRecent(false)}
        closeSheet={closeSheet}
        selectOptions={selectOptions}
        renderRightIcon={() => <ArrowRightIcon />}
        onSelectItem={({item}) => {
          setValue('vitalSigns', item.data ? [item.data] : []);
          openTakeVitalSignSheet();
        }}
      />

      <AppContentSheet
        headerTitle="Recheck vital signs"
        sheetRef={takeVitalSignSheetRef}
        onClose={() => setShouldDeleteRecent(false)}
        AdditionalHeaderContent={
          <>
            <View style={styles.deleteRecentContainer}>
              <AppToggleSwitch
                labelColor="text400"
                labelType="body_1_semibold"
                label="Delete my most recent record for this"
                labelStyle={{paddingRight: wp(16)}}
                onToggle={setShouldDeleteRecent}
                isOn={shouldDeleteRecent}
              />
            </View>
            <AppSeperator style={{marginTop: wp(16)}} />
          </>
        }
        FooterComponent={
          <AppButton
            isDisabled={isRecheckVitalSignLoading}
            text="Save"
            isLoading={isRecheckVitalSignLoading}
            onPress={handleSubmit(handleSubmitSuccess, handleSubmitError)}
            containerStyle={styles.sheetFooter}
          />
        }>
        <View style={[styles.takeContainer, {paddingTop: wp(16)}]}>
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

export default RecheckVitalsSheet;
