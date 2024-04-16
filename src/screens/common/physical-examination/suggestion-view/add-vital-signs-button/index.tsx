import {showToast} from '@/components/app-toast';
import {AppButton} from '@/components/buttons';
import {AppContentSheet} from '@/components/sheets';
import {useSheet} from '@/hooks/useSheet';
import useProcessVitalSignsFormData from '@/screens/common/vital-signs/use-process-vital-signs-form-data';
import {zodResolver} from '@hookform/resolvers/zod';
import React, {FunctionComponent} from 'react';
import {FieldErrors, useFieldArray, useForm} from 'react-hook-form';
import {View} from 'react-native';
import AddVitalSignsButton from '../../../vital-signs/common/add-vital-signs-button';
import {
  AllVitalSignsSchema,
  allVitalSignsSchema,
} from '../../../vital-signs/schema';
import useCreateVitalSigns from '../../../vital-signs/use-create-vital-signs';
import VitalSignView from '../../../vital-signs/vital-sign-view';
import {physicalExaminationSuggestionStyles} from './../styles';

const PhysicalExaminationAddVitalSignsButton: FunctionComponent<{
  patientId: number;
  encounterId: number;
}> = ({encounterId, patientId}) => {
  const {
    sheetRef: takeVitalSignSheetRef,
    openSheet: openTakeVitalSignSheet,
    closeSheet: closeTakeVitalSignSheet,
  } = useSheet();
  const styles = physicalExaminationSuggestionStyles;

  const {vitalSignsFormData: defaultVitalSigns, vitalSignsRangesSites} =
    useProcessVitalSignsFormData({filter: el => el.isPreset});

  const {control, setValue, reset, handleSubmit} = useForm<AllVitalSignsSchema>(
    {
      defaultValues: {vitalSigns: defaultVitalSigns},
      values: {vitalSigns: defaultVitalSigns},
      resolver: zodResolver(allVitalSignsSchema),
      mode: 'onChange',
      reValidateMode: 'onChange',
    },
  );

  const {fields, ...formFieldHandlers} = useFieldArray({
    name: 'vitalSigns',
    control,
  });

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

  return (
    <>
      <AppButton
        buttonColor="white"
        textColor="primary400"
        borderColor="primary400"
        text="Add vital signs"
        onPress={openTakeVitalSignSheet}
      />
      <AppContentSheet
        headerTitle="Take vital signs"
        sheetRef={takeVitalSignSheetRef}
        HeaderRightContent={
          <AddVitalSignsButton
            control={control}
            fieldsFormHanders={formFieldHandlers}
          />
        }
        closeSheet={closeTakeVitalSignSheet}
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

export default PhysicalExaminationAddVitalSignsButton;
