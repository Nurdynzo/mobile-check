/* eslint-disable react/no-unstable-nested-components */
import {BriefcaseIcon, MoreVerticalIcon, PlusCircleIcon} from '@/assets/svg';
import AlertBubbleIconWrapper from '@/components/alert-bubble-icon-wrapper';
import AnimatedBubble from '@/components/animated-bubble';
import {AppButton} from '@/components/buttons';
import {LabelValueText} from '@/components/cards';
import {AppAlert, AppLoading, AppRow, AppSeperator} from '@/components/common';
import {FormFieldController} from '@/components/forms/form-field-controller';
import {
  AppDateTimeInput,
  AppTextInput,
  AppToggleSwitch,
} from '@/components/inputs';
import {OccupationSelectInput} from '@/components/inputs/form-select-input';
import {AppContentSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {detectTouch} from '@/resources/config';
import {
  DateTimeFieldControls,
  InputFieldControls,
  ToggleSwitchFieldControls,
} from '@/types/formFieldsControls';
import {BaseSheetProps} from '@/types/sheet';
import {EMPTY_STRING, NOT_AVAILABLE} from '@/utils/constants';
import {convertToReadableDate} from '@/utils/helpers/convertDateTime';
import {zodResolver} from '@hookform/resolvers/zod';
import React, {FunctionComponent} from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import {TouchableOpacity, View} from 'react-native';
import {
  DetailedHistoryHeader,
  EditFormFieldsContainer,
  OptionsSheet,
} from '../common';
import {
  AllOccupationsSchema,
  OccupationFormSchema,
  allOccupationsSchema,
  occupationFormSchema,
} from './schema';
import {
  occupationFormSheetStyles,
  occupationHistoryCardStyles,
  occupationHistoryStyles,
} from './styles';
import {useCreateOccupation} from './use-create-occupation';
import {useDeleteOccupation} from './use-delete-occupation';
import {useGetSavedOccupations} from './use-get-saved-occupations';
import {useUpdateOccupation} from './use-update-occupation';

const OccupationHistory: FunctionComponent<{
  patientId: number;
  onPressEdit?: () => void;
}> = ({onPressEdit, patientId}) => {
  const {colors} = useColors();
  const styles = occupationHistoryStyles({colors});

  const {occupationsData} = useGetSavedOccupations({
    patientId,
  });

  return (
    <View style={styles.container}>
      <DetailedHistoryHeader
        buttonTitle="Edit"
        onButtonPress={onPressEdit}
        title="Occupational History"
        lastEntered={
          occupationsData?.length
            ? {
                by: 'Mr Franklyn',
                day: '23 Nov 2023',
                time: '11: 23 PM',
              }
            : undefined
        }
      />
      {occupationsData?.length ? (
        <>
          {occupationsData.map((item, index) => {
            return (
              <React.Fragment key={item.id}>
                <OccupationDetailsCard
                  removeOptionsBtn
                  details={{
                    location: item.workLocation as string,
                    notes: item.note as string,
                    occupation: item.occupation as string,
                    ...(item.to && {endDate: new Date(item.to)}),
                    ...(item.from && {
                      startDate: new Date(item.from),
                    }),
                    ...(item.id && {id: item.id}),
                    isCurrent: item.isCurrent,
                    occupationId: item.id as number,
                  }}
                />
                {index !== (occupationsData?.length ?? 0) - 1 && (
                  <AppSeperator />
                )}
              </React.Fragment>
            );
          })}
        </>
      ) : (
        <AppAlert
          title="Occupational History"
          description="No occupational history has been saved"
          showButton={false}
          icon={
            <AnimatedBubble
              bgColor="primary25"
              size={90}
              Icon={
                <AlertBubbleIconWrapper
                  icon={
                    <BriefcaseIcon fill={colors.white} width={36} height={36} />
                  }
                />
              }
            />
          }
        />
      )}
    </View>
  );
};

const OccupationHistoryEdit: FunctionComponent<{
  patientId: number;
  onClose?: () => void;
}> = ({onClose, patientId}) => {
  const {colors} = useColors();
  const styles = occupationHistoryStyles({colors});
  const {
    closeSheet: closeAddOccupationSheet,
    openSheet: openAddOccupationSheet,
    sheetRef: addOccupationSheetRef,
  } = useSheet();

  const {occupationsData} = useGetSavedOccupations({
    patientId,
  });

  const defaultValues = {
    occupations: occupationsData.map(el => {
      return {
        isCurrent: el.isCurrent,
        location: el.workLocation as string,
        notes: el.note as string,
        occupation: {id: 1, value: el.occupation},
        ...(el.to && {endDate: new Date(el.to)}),
        ...(el.from && {
          startDate: new Date(el.from),
        }),
        ...(el.id && {occupationId: el.id}),
      };
    }),
  } as AllOccupationsSchema;

  const {control} = useForm<AllOccupationsSchema>({
    defaultValues,
    values: defaultValues,
    resolver: zodResolver(allOccupationsSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const {handleCreate, isLoading: isCreateLoading} = useCreateOccupation({
    patientId,
  });

  const {handleUpdate, isLoading: isUpdateLoading} = useUpdateOccupation({
    patientId,
  });

  const {handleDelete} = useDeleteOccupation();

  return (
    <View style={[styles.container, styles.editContainer]}>
      <AppLoading isLoading={isCreateLoading || isUpdateLoading} />
      <DetailedHistoryHeader
        buttonTitle="Done"
        onButtonPress={onClose}
        title="Occupational History"
      />
      <EditFormFieldsContainer>
        <AppButton
          onPress={openAddOccupationSheet}
          text={'Add new'}
          buttonColor="white"
          borderColor="primary400"
          textColor="primary400"
          borderWidth={1}
          LeftContent={<PlusCircleIcon fill={colors.primary400} />}
          containerStyle={styles.btn}
        />
        <OccupationList
          control={control}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </EditFormFieldsContainer>
      <OccupationDetailsFormSheet
        headerTitle="Add occupation details"
        sheetRef={addOccupationSheetRef}
        closeSheet={closeAddOccupationSheet}
        submitBtnTitle={'Save'}
        onSubmit={handleCreate}
      />
    </View>
  );
};

export {OccupationHistory, OccupationHistoryEdit};

const OccupationDetailsCard: FunctionComponent<{
  removeOptionsBtn?: boolean;
  details: {
    occupation: string;
    notes: string;
    location: string;
    occupationId: number | undefined;
    isCurrent?: boolean | undefined;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
  };
  onUpdate?: (props: {values: OccupationFormSchema; reset: () => void}) => void;
  onRemove?: () => void;
}> = ({details, removeOptionsBtn, onRemove, onUpdate = () => null}) => {
  const styles = occupationHistoryCardStyles;
  const {
    closeSheet: closeOptionsSheet,
    openSheet: openOptionsSheet,
    sheetRef: optionsSheetRef,
  } = useSheet();
  const {
    closeSheet: closeEditOccupationSheet,
    openSheet: openEditOccupationSheet,
    sheetRef: editOccupationSheetRef,
  } = useSheet();
  const {colors} = useColors();
  const type = details?.isCurrent ? 'Current' : 'Previous';

  return (
    <View>
      <View style={styles.container}>
        <LabelValueText
          label={`${type} work location`}
          value={details?.location ?? NOT_AVAILABLE}
        />
        <AppRow alignItems="flex-start">
          <LabelValueText
            label={'From'}
            value={
              details?.startDate
                ? convertToReadableDate(details?.startDate)
                : NOT_AVAILABLE
            }
          />
          <LabelValueText
            label={'To'}
            value={
              details?.isCurrent
                ? 'Present'
                : details?.endDate
                ? convertToReadableDate(details?.endDate)
                : NOT_AVAILABLE
            }
          />
        </AppRow>
        <LabelValueText
          label={`${type} occupation`}
          value={details?.occupation ?? NOT_AVAILABLE}
        />
        <LabelValueText
          label={'Note'}
          value={details?.notes ?? NOT_AVAILABLE}
        />
      </View>
      {!removeOptionsBtn && (
        <TouchableOpacity
          onPress={openOptionsSheet}
          hitSlop={detectTouch}
          style={styles.optionBtn}>
          <MoreVerticalIcon stroke={colors.black} />
        </TouchableOpacity>
      )}
      <OptionsSheet
        closeSheet={closeOptionsSheet}
        sheetRef={optionsSheetRef}
        onDeletePress={onRemove}
        onEditPress={openEditOccupationSheet}
      />
      <OccupationDetailsFormSheet
        headerTitle="Edit occupation details"
        sheetRef={editOccupationSheetRef}
        closeSheet={closeEditOccupationSheet}
        submitBtnTitle={'Update'}
        onSubmit={onUpdate}
        defaultValues={{
          ...(details?.endDate &&
            !details.isCurrent && {endDate: new Date(details?.endDate)}),
          ...(details?.startDate && {startDate: new Date(details?.startDate)}),
          notes: details?.notes ?? EMPTY_STRING,
          occupation: {id: 1, value: details.occupation},
          location: details?.location ?? EMPTY_STRING,
          isCurrent: details.isCurrent,
          occupationId: details.occupationId,
        }}
      />
    </View>
  );
};

type FormSelectInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
};

const CurrentSwitchInput = <T extends FieldValues>({
  name,
  control,
  watchFieldName,
}: FormSelectInputProps<T> & {
  countryCode?: string;
  watchFieldName: {endDate: FieldPath<T>};
}) => {
  const {
    field: {onChange: ocChangeEndDate},
  } = useController({control, name: watchFieldName.endDate});

  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value}: ToggleSwitchFieldControls) => {
        return (
          <AppToggleSwitch
            isOn={value}
            labelPosition="left"
            onColor={'primary400'}
            label="Is this the current occupation?"
            useNativeDriver={true}
            offColor="neutral100"
            onToggle={isOn => {
              onChange(isOn);
              if (isOn) {
                ocChangeEndDate(null);
              }
            }}
          />
        );
      }}
    />
  );
};

const OccupationDetailsFormSheet: FunctionComponent<
  {
    defaultValues?: Omit<OccupationFormSchema, 'startDate'>;
    onSubmit?: (props: {
      values: OccupationFormSchema;
      reset: () => void;
    }) => void;
    headerTitle: string;
    submitBtnTitle: string;
  } & BaseSheetProps
> = ({
  closeSheet = () => null,
  sheetRef,
  defaultValues,
  onSubmit = () => null,
  headerTitle,
  submitBtnTitle,
}) => {
  const styles = occupationFormSheetStyles;
  const {control, handleSubmit, reset, watch} = useForm<OccupationFormSchema>({
    defaultValues,
    resolver: zodResolver(occupationFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  return (
    <AppContentSheet
      headerTitle={headerTitle}
      closeSheet={closeSheet}
      onClose={reset}
      FooterComponent={
        <View style={styles.footerContainer}>
          <AppButton
            text={submitBtnTitle}
            onPress={handleSubmit(values =>
              onSubmit({
                values,
                reset: () => {
                  reset();
                  closeSheet();
                },
              }),
            )}
          />
        </View>
      }
      sheetRef={sheetRef}>
      <View style={styles.container}>
        <OccupationSelectInput control={control} name="occupation" />

        <FormFieldController
          name="location"
          control={control}
          Field={({onChange, value}: InputFieldControls) => {
            return (
              <AppTextInput
                label="Workplace location"
                placeholder="Enter workplace location"
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />

        <CurrentSwitchInput
          control={control}
          name="isCurrent"
          watchFieldName={{endDate: 'endDate'}}
        />
        <FormFieldController
          name="startDate"
          control={control}
          Field={({onChange, value}: DateTimeFieldControls) => {
            return (
              <AppDateTimeInput
                label="Start date"
                placeholder="Select start date"
                mode="date"
                onChange={onChange}
                value={value}
              />
            );
          }}
        />
        <FormFieldController
          name="endDate"
          control={control}
          Field={({onChange, value}: DateTimeFieldControls) => {
            return (
              <AppDateTimeInput
                label="End date"
                placeholder="Select end date"
                mode="date"
                minimumDate={watch('startDate')}
                onChange={onChange}
                disabled={watch('isCurrent')}
                value={value}
              />
            );
          }}
        />
        <FormFieldController
          name="notes"
          control={control}
          Field={({onChange, value}: InputFieldControls) => {
            return (
              <AppTextInput
                label="Notes"
                multiline={true}
                placeholder="Enter notes"
                height={88}
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />
      </View>
    </AppContentSheet>
  );
};

export const OccupationList: FunctionComponent<{
  control: Control<AllOccupationsSchema>;
  onUpdate?: (props: {values: OccupationFormSchema; reset: () => void}) => void;
  onDelete?: (props: {id: number | undefined; remove: () => void}) => void;
}> = ({control, onUpdate, onDelete = () => null}) => {
  const {fields, remove} = useFieldArray({control, name: 'occupations'});

  return (
    <>
      {fields.map((item, index) => (
        <React.Fragment key={item.id}>
          <OccupationDetailsCard
            details={{
              isCurrent: item.isCurrent,
              location: item.location,
              notes: item.notes ?? EMPTY_STRING,
              occupation: item.occupation?.value,
              ...(item.endDate && {endDate: item.endDate}),
              ...(item.startDate && {startDate: item.startDate}),
              occupationId: item.occupationId,
            }}
            onUpdate={onUpdate}
            onRemove={() =>
              onDelete({
                id: item.occupationId,
                remove: () => remove(index),
              })
            }
          />
          {index !== (fields.length ?? 0) - 1 && <AppSeperator />}
        </React.Fragment>
      ))}
    </>
  );
};
