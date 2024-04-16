import {ArrowRightIcon, CloseIcon} from '@/assets/svg';
import AllInputMedicationFields from '@/components/all-input-medication-fields';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {AllInputsPlusButton, AppButton} from '@/components/buttons';
import {AllInputsPanelWithTitleCard} from '@/components/cards';
import AllInputPresaveItemView from '@/components/cards/all-input-pre-save-item-view';
import {AppSeperator, AppText} from '@/components/common';
import {
  NewAllInputsSuggestionForm,
  useNewAllInputsSuggestionForm,
} from '@/components/forms';
import {AppMenuSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';
import {
  PatientMedicationForReturnDto,
  useApiServicesAppMedicationGetpatientprescriptionsGetQuery,
  useApiServicesAppMedicationGetsearchedmedicationsGetQuery,
} from '@/state/services/medicationApi';
import {MenuOptionsProp} from '@/types/menusheet';
import VoidFunction from '@/types/voidfunction';
import {EMPTY_STRING} from '@/utils/constants';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import formatStringArrayToSentence from '@/utils/helpers/format-string-array-to-sentence';
import React, {FunctionComponent, useState} from 'react';
import {View} from 'react-native';
import {prescribeMedicationStyles} from './styles';
import {
  MedicationDto,
  PrescribeMedicationSuggestionType,
} from '@/types/medication';
import useCreateMedication from './use-create-medication';
import useDeleteMedication from './use-delete-medication';

const PrescribeMedication = ({
  encounterId,
  patientId,
}: {
  encounterId: number;
  patientId: number;
}) => {
  const [medication, setMedication] = useState<MedicationDto>({});
  const [selectedMedications, setSelectedMedications] = useState<
    (MedicationDto & {product: PrescribeMedicationSuggestionType[]})[]
  >([]);
  const styles = prescribeMedicationStyles;

  const formProps =
    useNewAllInputsSuggestionForm<PrescribeMedicationSuggestionType>();

  const {currentData: suggestionsData, isFetching} =
    useApiServicesAppMedicationGetsearchedmedicationsGetQuery(
      {
        searchTerm: formProps.text,
      },
      {
        skip: !formProps.text,
      },
    );

  const handleUnitValueChange = ({
    field,
    value,
  }: {
    field: keyof typeof medication;
    value: string;
  }) => {
    setMedication(prev => ({...prev, [field]: value}));
  };

  const handleDelete = (index: number) => {
    setSelectedMedications(prev => prev.filter((_, i) => i !== index));
  };

  const {handleSave, isLoading} = useCreateMedication({patientId, encounterId});

  const handleEdit = ({
    index,
    item,
  }: {
    index: number;
    item: MedicationDto & {product: PrescribeMedicationSuggestionType[]};
  }) => {
    handleDelete(index);
    const {product, ...rest} = item;
    setMedication(rest);
    formProps.setSelectedItems(product);
  };

  return (
    <AllInputsPanelWithTitleCard title={'Prescribe medication'}>
      <NewAllInputsSuggestionForm
        placeholder="Search medication"
        extraBaseContainerStyle={{minHeight: undefined}}
        expandSheetHeaderTitle={EMPTY_STRING}
        isloadingTextValueSuggestion={isFetching}
        textValueSuggestions={(suggestionsData ?? [])?.map(el => ({
          id: `${el.id}`,
          name: `${el.productName}`,
          data: el,
        }))}
        showTextInput={formProps?.selectedItems.length === 0}
        showRightView={formProps?.selectedItems.length === 0}
        formProps={formProps}
        suggestions={[]}
        isSingleSelect
        ContentInBetweenSuggesstionsFields={
          <AppText
            type="subtitle_semibold"
            color="text300"
            text="Suggested Medications"
            style={{paddingVertical: wp(5)}}
          />
        }
      />

      <View style={styles.fields}>
        <AllInputMedicationFields
          handleUnitValueChange={handleUnitValueChange}
          medication={medication}
        />
        <AllInputsPlusButton
          isDisabled={!formProps.selectedItems?.length}
          text={'Add prescription'}
          onPress={() => {
            setSelectedMedications(prev => [
              ...prev,
              {product: formProps.selectedItems, ...medication},
            ]);
            formProps?.reset();
            setMedication({});
          }}
          buttonStyle={styles.addButton}
        />
        <PreSaveListView
          selectedMedications={selectedMedications}
          onClearAll={() => setSelectedMedications([])}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <AppButton
          text="Save"
          containerStyle={{marginTop: wp(16)}}
          isLoading={isLoading}
          isDisabled={!selectedMedications.length || isLoading}
          onPress={() =>
            handleSave({
              selectedMedications,
              reset: () => setSelectedMedications([]),
            })
          }
        />
        <PrescriptionsHistory encounterId={encounterId} patientId={patientId} />
      </View>
    </AllInputsPanelWithTitleCard>
  );
};

export default PrescribeMedication;

const PreSaveListView: FunctionComponent<{
  selectedMedications: (MedicationDto & {
    product: PrescribeMedicationSuggestionType[];
  })[];
  onDelete: (index: number) => void;
  onEdit: (props: {
    index: number;
    item: MedicationDto & {product: PrescribeMedicationSuggestionType[]};
  }) => void;
  onClearAll: VoidFunction;
}> = ({onDelete, onEdit, onClearAll, selectedMedications}) => {
  const {colors} = useColors();
  const styles = prescribeMedicationStyles;
  if (!selectedMedications.length) {
    return <></>;
  }

  return (
    <>
      <AppButton
        text={'Clear all'}
        onPress={onClearAll}
        textColor={'primary400'}
        textType={'button_link_semibold'}
        buttonColor={'transparent'}
        height={16}
        borderWidth={0}
        // eslint-disable-next-line react-native/no-inline-styles
        textStyle={{
          textDecorationLine: 'underline',
        }}
        containerStyle={styles.clearAll}
        RightContent={
          <CloseIcon width={16} height={16} fill={colors.primary400} />
        }
      />
      <View style={styles.summary}>
        {selectedMedications.map((item, index) => {
          const {product, note, direction, ...rest} = item;

          const data = [
            `${rest.doseValue ?? EMPTY_STRING} ${
              rest.doseUnit ?? EMPTY_STRING
            }`,
            `${rest.durationValue ?? EMPTY_STRING} ${
              rest.durationUnit ?? EMPTY_STRING
            }`,
            `${rest.frequencyValue ?? EMPTY_STRING} ${
              rest.frequencyUnit ?? EMPTY_STRING
            }`,
            `${direction ?? EMPTY_STRING}`,
            `${note ?? EMPTY_STRING}`,
          ];

          return (
            <AllInputPresaveItemView
              onEdit={() => onEdit({index, item: item})}
              onRemove={() => onDelete(index)}
              key={index}
              TextComponent={
                <AppText
                  text={`${product?.[0]?.name}, ${formatStringArrayToSentence(
                    data,
                  )}`}
                  type="body_2_semibold"
                  color="text400"
                />
              }
            />
          );
        })}
      </View>
    </>
  );
};

const PrescriptionsHistory: FunctionComponent<{
  patientId: number;
  encounterId: number;
}> = ({patientId, encounterId}) => {
  const styles = prescribeMedicationStyles;
  const {data: prescriptionsSummaries} =
    useApiServicesAppMedicationGetpatientprescriptionsGetQuery({
      patientId,
      encounterId,
    });
  if (!prescriptionsSummaries?.length) {
    return <></>;
  }
  return (
    <>
      <AppSeperator style={styles.seperator} />
      <View style={styles.gap16}>
        {prescriptionsSummaries?.map(item => (
          <PrescriptionsHistoryCard key={item.id} item={item} />
        ))}
      </View>
    </>
  );
};

const PrescriptionsHistoryCard: FunctionComponent<{
  item: PatientMedicationForReturnDto;
}> = ({item}) => {
  const {handleDeleteMedication, isDeletingMedication} = useDeleteMedication();
  const {sheetRef, openSheet, closeSheet} = useSheet();

  const menuOptions: MenuOptionsProp = [
    {
      value: 'Discontinue',
      onPress: () => handleDeleteMedication(item.id),
      color: 'danger300',
    },
    {value: 'KIV meds', onPress: () => null},
    {value: 'Alternate with', onPress: () => null},
    {value: 'Mark as administered', onPress: () => null},
  ];

  return (
    <>
      <AllInputsHistoryTile
        key={item.id}
        date={checkDay(item.creationTime)}
        time={convertToReadableTime(item.creationTime)}
        onPress={openSheet}
        isLoading={isDeletingMedication}
        textComponent={
          <AppText
            text={`${item.productName}, ${formatStringArrayToSentence([
              item.doseUnit,
              item.duration,
              item.frequency,
              item.direction,
              item.note,
            ])}`}
            type="body_2_semibold"
            color="text400"
          />
        }
      />
      <AppMenuSheet
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        removeHeader
        renderRightIcon={() => <ArrowRightIcon />}
        menuOptions={menuOptions}
      />
    </>
  );
};
