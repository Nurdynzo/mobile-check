import {ArrowRightIcon, BinIcon, DownCaretIcon} from '@/assets/svg';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {showToast} from '@/components/app-toast';
import {AppButton} from '@/components/buttons';
import {AppRow, AppSeperator, AppText} from '@/components/common';
import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';
import {AppMenuSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {GeneralScreenProps} from '@/navigation/types';
import {wp} from '@/resources/config';
import {
  PatientVitalsSummaryResponseDto,
  useApiServicesAppVitalsignsGetpatientvitalssummaryGetQuery,
} from '@/state/services/vitalSignsApi';
import {MenuOptionsProp} from '@/types/menusheet';
import {EMPTY_STRING} from '@/utils/constants';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import {zodResolver} from '@hookform/resolvers/zod';
import React, {FunctionComponent, useState} from 'react';
import {UseFormHandleSubmit, useFieldArray, useForm} from 'react-hook-form';
import {View} from 'react-native';
import AddVitalSignsButton from './common/add-vital-signs-button';
import RecheckVitalsSheet from './common/recheck-vitals-sheet';
import VitalSignsSearchBar from './common/vital-signs-search-bar';
import {AllVitalSignsSchema, allVitalSignsSchema} from './schema';
import {vitalSignsStyles} from './styles';
import useCreateVitalSigns from './use-create-vital-signs';
import useDeleteVitalSigns from './use-delete-vital-signs';
import useProcessVitalSignsFormData from './use-process-vital-signs-form-data';
import VitalSignView from './vital-sign-view';
import VitalSignsSelectSheet from './common/vital-signs-select-sheet';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {BaseSheetProps} from '@/types/sheet';
import {SelectItem, SelectItemOptionsProp} from '@/types/selectItemsheet';

const VitalSigns: FunctionComponent<GeneralScreenProps<'VITAL_SIGNS'>> = ({
  route,
}) => {
  const {colors} = useColors();
  const styles = vitalSignsStyles({colors});

  const {patientId, encounterId} = route?.params ?? {};

  const {vitalSignsFormData: defaultVitalSigns, vitalSignsRangesSites} =
    useProcessVitalSignsFormData({filter: el => el.isPreset});

  const {control, handleSubmit, reset, setValue} = useForm<AllVitalSignsSchema>(
    {
      defaultValues: {vitalSigns: defaultVitalSigns},
      values: {
        vitalSigns: defaultVitalSigns,
      },
      resolver: zodResolver(allVitalSignsSchema),
      mode: 'onChange',
      reValidateMode: 'onChange',
    },
  );

  const {fields, ...formFieldHandlers} = useFieldArray({
    name: 'vitalSigns',
    control,
  });

  return (
    <>
      <ScaffoldWithAnimatedHeader
        screenTitle={'Vital signs'}
        AdditionalHeaderContent={
          <View style={styles.topContent}>
            <VitalSignsSearchBar
              encounterId={encounterId}
              patientId={patientId}
            />
          </View>
        }>
        <View style={styles.container}>
          <View style={styles.content}>
            <AppRow extraStyles={styles.contentTitle}>
              <AppText
                type="title_semibold"
                color="text400"
                text={'Vital signs'}
              />
              <AddVitalSignsButton
                control={control}
                fieldsFormHanders={formFieldHandlers}
              />
            </AppRow>

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
                  hasBorder={fields?.length - 1 !== index}
                  decimalPlaces={el.decimalPlaces}
                />
              );
            })}

            <VitalSignFooter
              patientId={patientId}
              encounterId={encounterId}
              onSave={handleSubmit}
              reset={() => {
                reset({vitalSigns: defaultVitalSigns});
                setValue('vitalSigns', defaultVitalSigns);
              }}
            />
          </View>
        </View>
      </ScaffoldWithAnimatedHeader>
    </>
  );
};

const VitalSignFooter: FunctionComponent<{
  patientId: number;
  encounterId: number;
  onSave: UseFormHandleSubmit<AllVitalSignsSchema>;
  reset: () => void;
}> = ({patientId, encounterId, onSave, reset}) => {
  const {data: inputSummaries} =
    useApiServicesAppVitalsignsGetpatientvitalssummaryGetQuery({
      patientId,
    });

  const {colors} = useColors();
  const styles = vitalSignsStyles({colors});

  const {handleSave, isCreateVitalSignLoading} = useCreateVitalSigns({
    encounterId,
    patientId,
  });

  const {sheetRef, closeSheet, openSheet} = useSheet();

  return (
    <>
      <AppRow>
        <AppButton
          containerStyle={{width: wp(152)}}
          onPress={openSheet}
          RightContent={<DownCaretIcon stroke={colors.primary400} />}
          text="Recheck vitals"
          buttonColor="transparent"
          borderColor="primary400"
          textColor="primary400"
        />

        <AppButton
          isDisabled={isCreateVitalSignLoading}
          isLoading={isCreateVitalSignLoading}
          onPress={onSave(
            values => {
              handleSave({values, reset});
            },
            err => {
              if (err.vitalSigns?.root?.message) {
                showToast('ERROR', {
                  title: 'Cannot save empty fields',
                  message: err.vitalSigns?.root?.message,
                });
              }
            },
          )}
          containerStyle={{width: wp(82)}}
          text="Save"
        />
      </AppRow>
      {inputSummaries?.length ? (
        <>
          <AppSeperator style={styles.seperator} />

          <AllInputsHistoryListView
            data={inputSummaries}
            renderItem={({item, index}) => (
              <VitalSignHistoryCard
                key={index}
                item={item}
                encounterId={encounterId}
                patientId={encounterId}
              />
            )}
          />
        </>
      ) : (
        <></>
      )}
      <RecheckVitalsSheet
        encounterId={encounterId}
        patientId={encounterId}
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        checkAll
      />
    </>
  );
};

const VitalSignHistoryCard: FunctionComponent<{
  item: PatientVitalsSummaryResponseDto;
  patientId: number;
  encounterId: number;
}> = ({item, encounterId, patientId}) => {
  const {handleDeleteVitalSigns, isDeletingVitalSigns} = useDeleteVitalSigns();
  const {
    sheetRef: menuSheetRef,
    openSheet: openMenuSheet,
    closeSheet: closeMenuSheet,
  } = useSheet();
  const {
    sheetRef: recheckSheetRef,
    openSheet: openRecheckSheet,
    closeSheet: closeRecheckSheet,
  } = useSheet();
  const {
    sheetRef: deleteSheetRef,
    openSheet: openDeleteSheet,
    closeSheet: closeDeleteSheet,
  } = useSheet();
  const {
    sheetRef: carePlanSheetRef,
    openSheet: openCarePlanSheet,
    closeSheet: closeCarePlanSheet,
  } = useSheet();
  const {
    sheetRef: eventSheetRef,
    openSheet: openEventSheet,
    closeSheet: closeEventSheet,
  } = useSheet();
  const {
    sheetRef: examinationSheetRef,
    openSheet: openExaminationSheet,
    closeSheet: closeExaminationSheet,
  } = useSheet();
  const {
    sheetRef: attentionSheetRef,
    openSheet: openAttentionSheet,
    closeSheet: closeAttentionSheet,
  } = useSheet();

  const menuOptions: MenuOptionsProp = [
    {value: 'Recheck', onPress: openRecheckSheet},
    {value: 'Link to care plan', onPress: openCarePlanSheet},
    {value: 'Link to event', onPress: openEventSheet},
    {value: 'Highlight for attention', onPress: openAttentionSheet},
    {value: 'Link to examination', onPress: openExaminationSheet},
    {
      value: 'Delete',
      onPress: openDeleteSheet,
      renderRightIcon: () => <BinIcon />,
      color: 'danger300',
    },
  ];

  return (
    <>
      <AllInputsHistoryTile
        date={checkDay(item.date)}
        time={convertToReadableTime(item.date)}
        onPress={openMenuSheet}
        textComponent={
          <View style={{gap: wp(12)}}>
            <AppText
              text={`Vital signs as at ${convertToReadableTime(
                item.date,
              )} ${checkDay(item.date)}`}
              type="body_2_semibold"
              color="text400"
            />
            {(item?.patientVitals ?? [])?.map(el => (
              <AppText
                key={el.id}
                text={`${el.vitalSign?.sign} - ${
                  el.measurementSite?.site ?? EMPTY_STRING
                } ${el.vitalReading} ${
                  el.measurementRange?.unit ?? EMPTY_STRING
                }`}
                type="body_2_semibold"
                color={el.overThreshold ? 'danger300' : 'text400'}
                textDecorationLine={el.isDeleted ? 'line-through' : 'none'}
              />
            ))}
          </View>
        }
      />
      <AppMenuSheet
        sheetRef={menuSheetRef}
        closeSheet={closeMenuSheet}
        removeHeader
        renderRightIcon={() => <ArrowRightIcon />}
        menuOptions={menuOptions}
      />
      <RecheckVitalsSheet
        encounterId={encounterId}
        patientId={patientId}
        sheetRef={recheckSheetRef}
        closeSheet={closeRecheckSheet}
        vitalSigns={(item?.patientVitals ?? [])?.map(el => ({
          id: el.id ?? 0,
          vitalSignId: el.vitalSignId ?? 0,
        }))}
      />
      <VitalSignsSelectSheet
        headerTitle="Delete"
        sheetRef={deleteSheetRef}
        closeSheet={closeDeleteSheet}
        vitalSignsData={item}
        onSubmit={({selectedIds, reset}) =>
          handleDeleteVitalSigns({patientVitalIds: selectedIds, reset})
        }
        submitLabel="Delete"
        isSubmitLoading={isDeletingVitalSigns}
      />
      <VitalSignsSelectSheet
        headerTitle="Link to care plan"
        sheetRef={carePlanSheetRef}
        closeSheet={closeCarePlanSheet}
        vitalSignsData={item}
        onSubmit={() => null}
        isSubmitLoading={isDeletingVitalSigns}
      />
      <VitalSignsSelectSheet
        headerTitle="Link to event"
        sheetRef={eventSheetRef}
        closeSheet={closeEventSheet}
        vitalSignsData={item}
        onSubmit={() => null}
        isSubmitLoading={isDeletingVitalSigns}
      />
      <VitalSignsSelectSheet
        headerTitle="Link to examination"
        sheetRef={examinationSheetRef}
        closeSheet={closeExaminationSheet}
        vitalSignsData={item}
        onSubmit={() => null}
        isSubmitLoading={isDeletingVitalSigns}
      />
      <HighlightForAttentionSheet
        sheetRef={attentionSheetRef}
        closeSheet={closeAttentionSheet}
      />
    </>
  );
};

export default VitalSigns;

const HighlightForAttentionSheet: FunctionComponent<BaseSheetProps> = ({
  closeSheet,
  sheetRef,
}) => {
  const [selected, setSelected] = useState<SelectItem<never> | undefined>();
  const {colors} = useColors();
  const styles = vitalSignsStyles({colors});
  return (
    <AppSelectItemSheet
      sheetRef={sheetRef}
      title="Highlight for attention"
      searchPlaceholder="Search list"
      selectOptions={
        // TODO(Franklyn): i will remove once api is ready
        [
          {item: {id: 1, value: 'Dr Adediji'}},
          {item: {id: 2, value: 'Dr Smith'}},
          {item: {id: 3, value: 'Dr Johnson'}},
          {item: {id: 4, value: 'Dr Lee'}},
          {item: {id: 5, value: 'Dr Patel'}},
        ] as SelectItemOptionsProp<never>
      }
      showSearchInput
      selectedValue={selected?.value}
      onSelectItem={({item}) => setSelected(item)}
      AdditionalHeaderContent={
        <View style={styles.attentionContainer}>
          <AppText text="Vital signs" type="subtitle_bold" color="text300" />
          <View style={styles.attentionSummary}>
            <AppText
              text="Blood pressure - 120/84 mmHg,  Resp rate - 24 cpm, Weight - 67 kg, Height - 165 cm, GCS score - 7"
              type="paragraph_1_medium"
              color="text400"
            />
          </View>
        </View>
      }
      FooterComponent={
        <AppButton
          text={'Notify'}
          onPress={closeSheet}
          containerStyle={[styles.sheetFooter, {alignSelf: undefined}]}
        />
      }
    />
  );
};
