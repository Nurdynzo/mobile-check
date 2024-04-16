import {ArrowRightIcon, BinIcon, CloseIcon} from '@/assets/svg';
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
import * as Contants from '@/constants/index';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';
import useCreateMedication from '@/screens/doctor/stack-screens/allInputs/prescription/prescribe-medication/use-create-medication';
import {SocratesSuggestionToggleButton} from '@/screens/doctor/stack-screens/allInputs/presenting-complaints/suggestion-selection/socrates/common';
import {
  MedicationAdministrationActivityResponse,
  useApiServicesAppMedicationGetadministeredmedicationGetQuery,
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
import {medicationStyles} from './styles';
import {
  MedicationDto,
  PrescribeMedicationSuggestionType,
} from '@/types/medication';

const MedicationAdministration: FunctionComponent<{
  patientId: number;
  encounterId: number;
}> = ({patientId, encounterId}) => {
  const [type, setType] = useState<
    (typeof Contants.availableAndUnAvailableSuggestionToggleOptions)[number]
  >(Contants.availableAndUnAvailableSuggestionToggleOptions[0]);
  const [medication, setMedication] = useState<MedicationDto>({});
  const [selectedMedications, setSelectedMedications] = useState<
    (MedicationDto & {product: PrescribeMedicationSuggestionType[]})[]
  >([]);
  const styles = medicationStyles;

  const formProps =
    useNewAllInputsSuggestionForm<PrescribeMedicationSuggestionType>();

  const {currentData: suggestionsData, isFetching} =
    useApiServicesAppMedicationGetsearchedmedicationsGetQuery(
      {
        searchTerm: formProps?.text,
      },
      {
        skip: !formProps.text,
        selectFromResult: ({currentData, ...rest}) => ({
          ...rest,
          currentData: (currentData ?? [])?.map(el => ({
            id: `${el.id}`,
            name: `${el.productName}`,
            data: el,
          })),
        }),
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
  const {data: prescriptionData} =
    useApiServicesAppMedicationGetpatientprescriptionsGetQuery(
      {patientId},
      {
        selectFromResult: ({data, ...rest}) => ({
          ...rest,
          data: (data ?? []).map(el => ({
            id: `${el.id}`,
            name: `${el.productName}, ${formatStringArrayToSentence([
              el.doseUnit,
              el.duration,
              el.frequency,
              el.direction,
              el.note,
            ])}`,
            data: el,
          })),
        }),
      },
    );

  return (
    <AllInputsPanelWithTitleCard title={'Medication administration'}>
      <NewAllInputsSuggestionForm
        placeholder="Search medication"
        extraBaseContainerStyle={{minHeight: undefined}}
        expandSheetHeaderTitle={EMPTY_STRING}
        showTextInput={formProps.selectedItems.length === 0}
        showRightView={formProps.selectedItems.length === 0}
        formProps={formProps}
        isloadingTextValueSuggestion={isFetching}
        textValueSuggestions={suggestionsData}
        toggleButton={
          <SocratesSuggestionToggleButton
            items={Contants.availableAndUnAvailableSuggestionToggleOptions}
            activeItem={type}
            setActiveItem={item => setType(item)}
          />
        }
        suggestions={prescriptionData}
        isSingleSelect
        ContentInBetweenSuggesstionsFields={
          <AppText
            text="Prescribed medications"
            type="subtitle_semibold"
            color="text300"
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
          isDisabled
          onPress={() =>
            handleSave({
              selectedMedications,
              reset: () => setSelectedMedications([]),
            })
          }
        />
        <MedicationAdministrationHistory encounterId={encounterId} />
      </View>
    </AllInputsPanelWithTitleCard>
  );
};

export default MedicationAdministration;

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
  const styles = medicationStyles;
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
          ].filter(part => part.trim() !== EMPTY_STRING);

          return (
            <AllInputPresaveItemView
              onEdit={() => onEdit({index, item: item})}
              onRemove={() => onDelete(index)}
              key={index}
              TextComponent={
                <AppText
                  text={`${product?.[0]?.name}, ${data.join(', ')}`
                    .trim()
                    .replace(/\s+/g, ' ')
                    .concat('.')}
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

const MedicationAdministrationHistory: FunctionComponent<{
  encounterId: number;
}> = ({encounterId}) => {
  const styles = medicationStyles;
  const {data: PrescriptionsSummaries} =
    useApiServicesAppMedicationGetadministeredmedicationGetQuery({
      encounterId,
    });
  if (!PrescriptionsSummaries?.length) {
    return <></>;
  }
  return (
    <>
      <AppSeperator style={styles.seperator} />
      <View style={styles.gap16}>
        {PrescriptionsSummaries?.map(item => (
          <PrescriptionsHistoryCard key={item.id} item={item} />
        ))}
      </View>
    </>
  );
};

const PrescriptionsHistoryCard: FunctionComponent<{
  item: MedicationAdministrationActivityResponse;
}> = ({item}) => {
  const {sheetRef, openSheet, closeSheet} = useSheet();

  const menuOptions: MenuOptionsProp = [
    {value: 'Mark as ongoing', onPress: () => null},
    {value: 'Link to care plan', onPress: () => null},
    {value: 'Link to event', onPress: () => null},
    {value: 'Highlight for attention', onPress: () => null},
    {value: 'Request from pharmacy', onPress: () => null},
    {
      value: 'Delete',
      renderRightIcon: () => <BinIcon />,
      color: 'danger300',
    },
  ];

  return (
    <>
      <AllInputsHistoryTile
        key={item.id}
        date={checkDay(item.createdDate)}
        time={convertToReadableTime(item.createdDate)}
        onPress={openSheet}
        textComponent={
          <AppText
            text={`${item.productName}, ${formatStringArrayToSentence([
              `${item.doseValue ?? EMPTY_STRING} ${
                item.doseUnit ?? EMPTY_STRING
              }`,
              `${item.durationValue ?? EMPTY_STRING} ${
                item.durationUnit ?? EMPTY_STRING
              }`,
              `${item.frequencyValue ?? EMPTY_STRING} ${
                item.frequencyUnit ?? EMPTY_STRING
              }`,
              `${item.direction ?? EMPTY_STRING}`,
              `${item.note ?? EMPTY_STRING}`,
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
