/* eslint-disable react/no-unstable-nested-components */
import {
  MinusCircleIcon,
  MoreVerticalIcon,
  PlusCircleIcon,
  UsersIcon,
} from '@/assets/svg';
import {AppButton} from '@/components/buttons';
import {LabelValueText} from '@/components/cards';
import {
  AppAlert,
  AppLoading,
  AppRow,
  AppSeperator,
  AppText,
} from '@/components/common';
import {FormFieldController} from '@/components/forms/form-field-controller';
import {
  AppButtonInput,
  AppTextInput,
  AppToggleSwitch,
} from '@/components/inputs';
import {RelationshipSelectInput} from '@/components/inputs/form-select-input';
import {AppContentSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {detectTouch} from '@/resources/config';
import {Relationship} from '@/state/services/patientApi';
import {
  InputFieldControls,
  ToggleSwitchFieldControls,
} from '@/types/formFieldsControls';
import {zodResolver} from '@hookform/resolvers/zod';
import React, {FunctionComponent} from 'react';
import {
  Control,
  FieldPath,
  useFieldArray,
  useForm,
  useWatch,
} from 'react-hook-form';
import {TouchableOpacity, View} from 'react-native';
import {
  EditFamilyHistoryFormSchema,
  FamilyMemberDetailsFormSchema,
  editFamilyHistoryFormSchema,
  familyMemberDetailsFormSchema,
} from './schema';
import {
  causeOfDeathFormStyles,
  deathCauseSearchInputStyles,
  familyHistoryStyles,
  familyKinInputStyles,
  familyMemberCardStyles,
  familyMemberFormSheetStyles,
} from './styles';

import AlertBubbleIconWrapper from '@/components/alert-bubble-icon-wrapper';
import AnimatedBubble from '@/components/animated-bubble';
import AppActivityIndicator from '@/components/app-activity-indicator';
import {SearchDiagnosesByTermInput} from '@/components/inputs/search';
import {SnowstormSimpleResponseDto} from '@/state/services/diagnosisApi';
import {BaseSheetProps} from '@/types/sheet';
import {EMPTY_STRING, NOT_AVAILABLE} from '@/utils/constants';
import {
  DetailedHistoryHeader,
  EditFormFieldsContainer,
  OptionsSheet,
} from '../common';
import {useDeleteFamilyMember} from './use-delete-family-member';
import {useGetFamilyDetails} from './use-get-family-details';
import {useSaveFamilyHistory} from './use-save-family-history';

const diagnosisByTerm = {
  id: EMPTY_STRING,
  name: EMPTY_STRING,
};

const FamilyHistory: FunctionComponent<{
  patientId: number;
  noOfSpouses?: number;
  positionInFamily?: string;
  nuclearFamilySize?: number;
  onPressEdit?: () => void;
}> = ({
  onPressEdit,
  patientId,
  noOfSpouses,
  nuclearFamilySize,
  positionInFamily,
}) => {
  const {colors} = useColors();
  const styles = familyHistoryStyles({colors});

  const {familyHistoryData} = useGetFamilyDetails({
    patientId,
  });

  const familyHistoryDetails = {
    noOfSpouses,
    positionInFamily,
    nuclearFamilySize,
    noOfMaleChildren: familyHistoryData?.totalNumberOfMaleChildren || 0,
    noOfFemaleChildren: familyHistoryData?.totalNumberOfFemaleChildren || 0,
    totalChildren: Number(familyHistoryData?.totalNumberOfChildren || 0),
    noOfMaleSiblings: familyHistoryData?.totalNumberOfMaleSiblings || 0,
    noOfFemaleSiblings: familyHistoryData?.totalNumberOfFemaleSiblings || 0,
    totalSiblings: Number(familyHistoryData?.totalNumberOfSiblings || 0),
  };

  const familyMembers = familyHistoryData?.familyMembers ?? [];
  const familyMemberLastIndex = (familyMembers?.length ?? 1) - 1;
  const isThereFamilyHistory =
    Object.values(familyHistoryDetails).some(el => !!el) ||
    familyMembers?.length;

  return (
    <View style={styles.container}>
      <DetailedHistoryHeader
        buttonTitle="Edit"
        onButtonPress={onPressEdit}
        title="Family history"
        lastEntered={
          isThereFamilyHistory
            ? {
                by: 'Mr Franklyn',
                day: '23 Nov 2023',
                time: '11: 23 PM',
              }
            : undefined
        }
      />
      {isThereFamilyHistory ? (
        <>
          <AppRow alignItems="flex-start">
            <LabelValueText
              label={'No. of spouses'}
              value={familyHistoryDetails.noOfSpouses}
            />
            <LabelValueText
              label={'Position in family'}
              value={familyHistoryDetails.positionInFamily ?? NOT_AVAILABLE}
            />
          </AppRow>
          <LabelValueText
            label={'Nuclear family size'}
            value={familyHistoryDetails.nuclearFamilySize}
          />
          <AppText
            text="Number of children"
            type="label_semibold"
            color="text300"
          />
          <AppRow alignItems="flex-end">
            <LabelValueText
              label={'No. of males'}
              value={familyHistoryDetails.noOfMaleChildren}
            />
            <LabelValueText
              label={'No. of females'}
              value={familyHistoryDetails.noOfFemaleChildren}
            />
            <LabelValueText
              label={'Total'}
              value={familyHistoryDetails.totalChildren}
            />
          </AppRow>
          <AppText
            text="Number of siblings"
            type="label_semibold"
            color="text300"
          />
          <AppRow alignItems="flex-end">
            <LabelValueText
              label={'No. of males'}
              value={familyHistoryDetails.noOfMaleSiblings}
            />
            <LabelValueText
              label={'No. of females'}
              value={familyHistoryDetails.noOfFemaleSiblings}
            />
            <LabelValueText
              label={'Total'}
              value={familyHistoryDetails.totalSiblings}
            />
          </AppRow>
          <AppSeperator />
          <AppText
            text="List of members"
            type="subtitle_semibold"
            color="text400"
          />
          <>
            {familyMembers?.map((el, index) => (
              <React.Fragment key={el.id}>
                <FamilyMemberCard
                  details={{
                    relationship: el.relationship as Relationship,
                    isAlive: el.isAlive,
                    ageOfDeath: el.ageAtDeath
                      ? `${el.ageAtDeath}`
                      : NOT_AVAILABLE,
                    ageAtDiagnosis: el.ageAtDiagnosis
                      ? `${el.ageAtDiagnosis}`
                      : NOT_AVAILABLE,
                    causeOfDeath: (el?.causesOfDeath?.split(',') ?? []).map(
                      eItem => ({
                        id: eItem as string,
                        name: eItem as string,
                      }),
                    ),
                    seriousIllnesses: (
                      el?.seriousIllnesses?.split(',') ?? []
                    ).map(eItem => ({
                      id: eItem as string,
                      name: eItem as string,
                    })),
                  }}
                  removeOptionsBtn
                />
                {index !== familyMemberLastIndex && <AppSeperator />}
              </React.Fragment>
            ))}
          </>
        </>
      ) : (
        <AppAlert
          title="Family History"
          description="No family history has been saved"
          showButton={false}
          icon={
            <AnimatedBubble
              bgColor="primary25"
              size={90}
              Icon={
                <AlertBubbleIconWrapper
                  icon={
                    <UsersIcon fill={colors.white} width={36} height={36} />
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

const FamilyHistoryEdit: FunctionComponent<{
  patientId: number;
  onClose: () => void;
}> = props => {
  const {colors} = useColors();
  const styles = familyHistoryStyles({colors});
  const {patientId, onClose} = props;

  const {closeSheet, openSheet, sheetRef} = useSheet();

  const {familyHistoryData} = useGetFamilyDetails({
    patientId,
  });

  const defaultValues: EditFamilyHistoryFormSchema = {
    isFamilyHistoryNotKnown: familyHistoryData?.isFamilyHistoryKnown,
    noOfMaleChildren: `${
      familyHistoryData?.totalNumberOfMaleChildren ?? EMPTY_STRING
    }`,
    noOfFemaleChildren: `${
      familyHistoryData?.totalNumberOfFemaleChildren ?? EMPTY_STRING
    }`,
    noOfMaleSiblings: `${
      familyHistoryData?.totalNumberOfMaleSiblings ?? EMPTY_STRING
    }`,
    noOfFemaleSiblings: `${
      familyHistoryData?.totalNumberOfFemaleSiblings ?? EMPTY_STRING
    }`,
    members: (familyHistoryData?.familyMembers ?? [])?.map(el => ({
      ...(el.id && {memberId: el.id}),
      isAlive: el.isAlive,
      ...(el.ageAtDiagnosis && {ageAtDiagnosis: `${el?.ageAtDiagnosis}`}),
      ...(el.ageAtDeath && {ageOfDeath: `${el?.ageAtDeath}`}),
      relationship: el.relationship,
      causeOfDeath: (el?.causesOfDeath?.split(', ') ?? []).map(eItem => ({
        id: eItem as string,
        name: eItem as string,
      })),
      seriousIllnesses: (el?.seriousIllnesses?.split(', ') ?? []).map(
        eItem => ({
          id: eItem as string,
          name: eItem as string,
        }),
      ),
    })),
  };

  const {
    handleCreateorEditHistory: handleCreateHistory,
    handleCreateOrEditFamilyMember,
    isLoading,
  } = useSaveFamilyHistory({
    patientId,
    historyId: familyHistoryData?.id as number,
  });

  const {control, reset, handleSubmit} = useForm<EditFamilyHistoryFormSchema>({
    defaultValues,
    values: defaultValues,
    resolver: zodResolver(editFamilyHistoryFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  return (
    <View style={[styles.container, styles.editContainer]}>
      <AppLoading isLoading={isLoading} />
      <DetailedHistoryHeader
        buttonTitle="Done"
        onButtonPress={handleSubmit(values =>
          handleCreateHistory({
            values,
            reset: () => {
              reset();
              onClose();
            },
          }),
        )}
        title="Family history"
      />
      <EditFormFieldsContainer>
        <FormFieldController
          name="isFamilyHistoryNotKnown"
          control={control}
          Field={({onChange, value}: ToggleSwitchFieldControls) => {
            return (
              <AppToggleSwitch
                isOn={value}
                labelPosition="left"
                onColor={'primary400'}
                label="Family history not known"
                useNativeDriver={true}
                offColor="neutral100"
                onToggle={isOn => onChange(isOn)}
              />
            );
          }}
        />
        <AppText text="Number of siblings" type="subtitle_semibold" />
        <FamilyKinsInput
          control={control}
          names={{
            numOfFemales: 'noOfFemaleSiblings',
            numOfMales: 'noOfMaleSiblings',
          }}
        />
        <AppText text="Number of children" type="subtitle_semibold" />
        <FamilyKinsInput
          control={control}
          names={{
            numOfFemales: 'noOfFemaleChildren',
            numOfMales: 'noOfMaleChildren',
          }}
        />
        <View style={styles.addViewContainer}>
          <AppText text="List of family members" />
          <AppButton
            onPress={openSheet}
            text={'Add new'}
            buttonColor="white"
            borderColor="primary400"
            textColor="primary400"
            borderWidth={1}
            LeftContent={<PlusCircleIcon fill={colors.primary400} />}
            containerStyle={styles.btn}
          />
        </View>
        <AppSeperator />
        <FamilyMemberList
          control={control}
          isSubmitting={isLoading}
          onSubmit={handleCreateOrEditFamilyMember}
        />
      </EditFormFieldsContainer>
      <FamilyMemberDetailsFormSheet
        headerTitle="Add member details"
        closeSheet={closeSheet}
        sheetRef={sheetRef}
        submitBtnTitle={'Save'}
        isSubmitting={isLoading}
        onSubmit={handleCreateOrEditFamilyMember}
      />
    </View>
  );
};

export {FamilyHistory, FamilyHistoryEdit};

const FamilyMemberList: FunctionComponent<{
  control: Control<EditFamilyHistoryFormSchema>;
  isSubmitting?: boolean;
  onSubmit?: (props: {
    values: FamilyMemberDetailsFormSchema;
    reset: () => void;
  }) => void;
}> = ({control, isSubmitting, onSubmit}) => {
  const {fields} = useFieldArray({control, name: 'members'});
  const {colors} = useColors();
  const styles = familyHistoryStyles({colors});
  return (
    <View style={styles.memberListContainer}>
      {fields.map((el, index) => (
        <React.Fragment key={el.id}>
          <FamilyMemberCard
            isSubmitting={isSubmitting}
            onSubmit={onSubmit}
            details={{
              memberId: el.memberId,
              ageOfDeath: el.ageOfDeath as string,
              ageAtDiagnosis: el.ageAtDiagnosis as string,
              isAlive: el.isAlive,
              causeOfDeath: el.causeOfDeath,
              seriousIllnesses: el.seriousIllnesses,
              relationship: el.relationship as string,
            }}
          />
          {index !== (fields?.length ?? 1) - 1 && <AppSeperator />}
        </React.Fragment>
      ))}
    </View>
  );
};

const FamilyMemberCard: FunctionComponent<{
  removeOptionsBtn?: boolean;
  details?: FamilyMemberDetailsFormSchema;
  isSubmitting?: boolean;
  onSubmit?: (props: {
    values: FamilyMemberDetailsFormSchema;
    reset: () => void;
  }) => void;
}> = ({removeOptionsBtn, details, isSubmitting, onSubmit}) => {
  const styles = familyMemberCardStyles;
  const {
    closeSheet: closeOptionsSheet,
    openSheet: openOptionsSheet,
    sheetRef: optionsSheetRef,
  } = useSheet();
  const {
    closeSheet: closeEditMemberSheet,
    openSheet: openEditMemberSheet,
    sheetRef: editMemberSheetRef,
  } = useSheet();
  const {colors} = useColors();

  const {handleDelete, isLoading} = useDeleteFamilyMember();

  return (
    <View>
      <View style={styles.container}>
        <AppRow alignItems="flex-start">
          <LabelValueText
            label={'Member'}
            value={details?.relationship ?? NOT_AVAILABLE}
          />
          <LabelValueText
            label={'Alive'}
            value={
              typeof details?.isAlive === 'boolean'
                ? details?.isAlive
                  ? 'Yes'
                  : 'No'
                : NOT_AVAILABLE
            }
          />
        </AppRow>
        <AppRow alignItems="flex-start">
          <LabelValueText
            label={'Age at death'}
            value={
              details?.ageOfDeath ? `${details.ageOfDeath}yrs` : NOT_AVAILABLE
            }
          />
          <LabelValueText
            label={'Cause at death'}
            value={
              details?.causeOfDeath.map(item => item?.name).join(', ') ||
              NOT_AVAILABLE
            }
          />
        </AppRow>
        <AppRow alignItems="flex-start">
          <LabelValueText
            label={'Serious illnesses'}
            value={
              details?.seriousIllnesses.map(item => item?.name).join(', ') ||
              NOT_AVAILABLE
            }
          />
          <LabelValueText
            label={'Age at diagnosis'}
            value={
              details?.ageAtDiagnosis
                ? `${details.ageAtDiagnosis}yrs`
                : NOT_AVAILABLE
            }
          />
        </AppRow>
      </View>
      {!removeOptionsBtn && (
        <TouchableOpacity
          onPress={openOptionsSheet}
          disabled={isLoading}
          hitSlop={detectTouch}
          style={styles.optionBtn}>
          {isLoading ? (
            <AppActivityIndicator />
          ) : (
            <MoreVerticalIcon stroke={colors.black} />
          )}
        </TouchableOpacity>
      )}
      <OptionsSheet
        closeSheet={closeOptionsSheet}
        sheetRef={optionsSheetRef}
        onDeletePress={() => handleDelete(details?.memberId as number)}
        onEditPress={openEditMemberSheet}
      />
      <FamilyMemberDetailsFormSheet
        headerTitle="Edit member details"
        sheetRef={editMemberSheetRef}
        closeSheet={closeEditMemberSheet}
        defaultValues={details}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        submitBtnTitle={'Update'}
      />
    </View>
  );
};

export const FamilyKinsInput: FunctionComponent<{
  control: Control<EditFamilyHistoryFormSchema>;
  names: {
    numOfMales: FieldPath<EditFamilyHistoryFormSchema>;
    numOfFemales: FieldPath<EditFamilyHistoryFormSchema>;
  };
}> = ({control, names}) => {
  const numOfFemales = useWatch({control, name: names.numOfFemales});
  const numOfMales = useWatch({control, name: names.numOfMales});
  const styles = familyKinInputStyles;

  return (
    <View style={styles.container}>
      <FormFieldController
        name={names.numOfFemales}
        control={control}
        containerStyle={styles.flex1}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              label="No. of females"
              placeholder="0"
              onChangeText={onChange}
              keyboardType="numeric"
              value={value}
            />
          );
        }}
      />
      <FormFieldController
        name={names.numOfMales}
        control={control}
        containerStyle={styles.flex1}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              label="No. of males"
              placeholder="0"
              onChangeText={onChange}
              keyboardType="numeric"
              value={value}
            />
          );
        }}
      />
      <AppButtonInput
        disabled
        label="Total"
        placeholder="0"
        value={`${Number(numOfFemales ?? 0) + Number(numOfMales ?? 0)}`}
        style={styles.btnInput}
      />
    </View>
  );
};

const FamilyMemberDetailsFormSheet: FunctionComponent<
  {
    isSubmitting?: boolean;
    defaultValues?: FamilyMemberDetailsFormSchema;
    onSubmit?: (props: {
      values: FamilyMemberDetailsFormSchema;
      reset: () => void;
    }) => void;
    headerTitle: string;
    submitBtnTitle: string;
  } & BaseSheetProps
> = ({
  isSubmitting,
  closeSheet = () => null,
  sheetRef,
  defaultValues,
  onSubmit = () => null,
  headerTitle,
  submitBtnTitle,
}) => {
  const styles = familyMemberFormSheetStyles;
  const {control, handleSubmit, reset, watch} =
    useForm<FamilyMemberDetailsFormSchema>({
      defaultValues: {
        ...defaultValues,
        causeOfDeath: defaultValues?.causeOfDeath.length
          ? defaultValues?.causeOfDeath
          : [diagnosisByTerm],
        seriousIllnesses: defaultValues?.seriousIllnesses.length
          ? defaultValues?.seriousIllnesses
          : [diagnosisByTerm],
      },
      resolver: zodResolver(familyMemberDetailsFormSchema),
      mode: 'onSubmit',
      reValidateMode: 'onChange',
    });

  return (
    <AppContentSheet
      headerTitle={headerTitle}
      closeSheet={closeSheet}
      adjustToContentHeight={false}
      onClose={reset}
      FooterComponent={
        <View style={styles.footerContainer}>
          <AppButton
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
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
        <RelationshipSelectInput control={control} name="relationship" />
        <FormFieldController
          name="isAlive"
          control={control}
          Field={({onChange, value}: ToggleSwitchFieldControls) => {
            return (
              <AppToggleSwitch
                isOn={value}
                labelPosition="left"
                onColor={'primary400'}
                label="Alive"
                useNativeDriver={true}
                offColor="neutral100"
                onToggle={isOn => onChange(isOn)}
              />
            );
          }}
        />
        <FormFieldController
          name="ageOfDeath"
          control={control}
          Field={({onChange, value}: InputFieldControls) => {
            return (
              <AppTextInput
                label="Age at death"
                placeholder="0"
                onChangeText={onChange}
                editable={!watch('isAlive')}
                keyboardType="numeric"
                value={value}
                RightContent={
                  <AppText text="yrs" type="body_1_medium" color="text300" />
                }
              />
            );
          }}
        />
        <DiagnosisByTermForm
          control={control}
          name="causeOfDeath"
          label="Cause of death"
          placeholder="Search cause"
          disable={watch('isAlive')}
        />
        <DiagnosisByTermForm
          control={control}
          name="seriousIllnesses"
          label="Serious illnesses (if any)"
          placeholder="Search illness"
        />

        <FormFieldController
          name="ageAtDiagnosis"
          control={control}
          Field={({onChange, value}: InputFieldControls) => {
            return (
              <AppTextInput
                label="Age at Diagnosis"
                placeholder="0"
                onChangeText={onChange}
                keyboardType="numeric"
                value={value}
                RightContent={
                  <AppText text="yrs" type="body_1_medium" color="text300" />
                }
              />
            );
          }}
        />
      </View>
    </AppContentSheet>
  );
};

export const DiagnosisByTermForm: FunctionComponent<{
  control: Control<FamilyMemberDetailsFormSchema>;
  name: 'causeOfDeath' | 'seriousIllnesses';
  label?: string;
  placeholder?: string;
  disable?: boolean;
}> = ({control, name, label, placeholder, disable}) => {
  const {fields, remove, insert} = useFieldArray({
    control,
    name,
  });
  const styles = causeOfDeathFormStyles;
  return (
    <View style={styles.container}>
      <AppText text={label} type="label_semibold" color="text300" />
      <View style={styles.fieldsContainer}>
        {fields.map((field, index) => {
          const nameRef = `${name}.${index}` as const;
          return (
            <FormFieldController
              key={field.id}
              name={nameRef}
              control={control}
              Field={({onChange, value}) => {
                return (
                  <DiagnosisByTermSearchInput
                    onChange={onChange}
                    placeholder={placeholder}
                    disable={disable}
                    value={value}
                    onAddPress={() => insert(index + 1, diagnosisByTerm)}
                    onMinusPress={() => remove(index)}
                    type={index === fields.length - 1 ? 'add' : 'remove'}
                  />
                );
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

const DiagnosisByTermSearchInput: FunctionComponent<{
  value: {id: number; name: string};
  onChange?: (item: SnowstormSimpleResponseDto) => void;
  disable?: boolean;
  isLoadingDetails?: boolean;
  onAddPress?: () => void;
  onMinusPress?: () => void;
  type: 'add' | 'remove';
  placeholder?: string;
}> = ({
  value,
  onChange = () => null,
  disable,
  isLoadingDetails,
  type,
  placeholder,
  onAddPress,
  onMinusPress,
}) => {
  const {colors} = useColors();
  const styles = deathCauseSearchInputStyles;

  return (
    <View style={styles.container}>
      <View style={styles.btnInput}>
        <SearchDiagnosesByTermInput
          placeholder={placeholder}
          onSelectedItem={onChange}
          isLoading={isLoadingDetails}
          disable={disable}
          value={value.name}
        />
      </View>
      <TouchableOpacity
        hitSlop={detectTouch}
        disabled={disable}
        onPress={type === 'add' ? onAddPress : onMinusPress}>
        {type === 'add' ? (
          <PlusCircleIcon fill={colors[disable ? 'primary50' : 'primary400']} />
        ) : (
          <MinusCircleIcon fill={colors[disable ? 'primary50' : 'danger300']} />
        )}
      </TouchableOpacity>
    </View>
  );
};
