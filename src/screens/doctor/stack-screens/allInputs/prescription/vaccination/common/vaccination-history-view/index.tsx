import {ArrowRightIcon} from '@/assets/svg';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {AppButton} from '@/components/buttons';
import {AppRow, AppSeperator, AppText} from '@/components/common';
import {
  AllInputsSuggestionForm,
  useNewAllInputsSuggestionForm,
} from '@/components/forms';
import {AllInputsSuggestionFormHookType} from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-suggestion-form/type';
import {AppTextInput, AppToggleSwitch} from '@/components/inputs';
import SelectWithLeftInput from '@/components/inputs/select-with-left-input';
import {AppMenuSheet} from '@/components/sheets';
import {vaccinationPeriodIntervals} from '@/constants/vaccination';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {fs} from '@/resources/config';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import {useApiServicesAppVaccineGetallGetQuery} from '@/state/services/vaccineApi';
import {MenuOptionsProp} from '@/types/menusheet';
import {EMPTY_STRING} from '@/utils/constants';
import {filterData} from '@/utils/helpers/filter-data';
import {generateVaccineMessage} from '@/utils/helpers/vaccine-util';
import React, {FunctionComponent} from 'react';
import {prescriptionStyles} from '../../../styles';
import {PatientVaccinationDto} from '../../../types';
import {useGetVaccinationHistory} from './use-get-vaccination-history';
import {useVaccinationHistory} from './use-vaccination-history';

const VaccinationHistoryView = ({encounterId}: {encounterId: number}) => {
  const formProps = useNewAllInputsSuggestionForm({isSingleSelect: true});
  const {selectedItems, text} = formProps;
  const {data: apiVaccines} = useApiServicesAppVaccineGetallGetQuery();

  return (
    <>
      <AllInputsSuggestionForm
        showRightView={false}
        extraBaseContainerStyle={{minHeight: undefined}}
        expandSheetHeaderTitle={EMPTY_STRING}
        showTextInput={selectedItems.length === 0}
        formProps={formProps}
        suggestions={
          (filterData(text, apiVaccines, 'name') ||
            []) as SnowstormSimpleResponseDto[]
        }
        isSingleSelect
      />
      {selectedItems.length > 0 && (
        <HistoryDoseForm
          formProps={formProps}
          encounterId={encounterId}
          id={Number(selectedItems[0]?.id)}
        />
      )}
      <PatientVaccinationHistory />
    </>
  );
};

export default VaccinationHistoryView;

const HistoryDoseForm = ({
  id,
  formProps,
  encounterId,
}: {
  id: number;
  encounterId: number;
  formProps: AllInputsSuggestionFormHookType;
}) => {
  const {
    handleSubmitVaccinationHistory,
    handleUpdateHistoryDoseForm,
    historyDoseForm,
    isLoading,
    selectedItems,
  } = useVaccinationHistory({
    id,
    formProps,
    encounterId,
  });

  return (
    <>
      <AppText
        type="subtitle_semibold"
        text={selectedItems[0]?.name}
        style={{fontSize: fs(14)}}
      />
      <SelectWithLeftInput
        label="Period since vaccinations"
        placeholder="Select interval"
        value={`${historyDoseForm.interval}`}
        selectOptions={vaccinationPeriodIntervals}
        onChange={item => handleUpdateHistoryDoseForm('interval', item.value)}
        onChangeLeftValueText={item =>
          handleUpdateHistoryDoseForm('howLong', item)
        }
        leftValue={`${historyDoseForm.howLong}`}
        leftValuePlaceholder="0"
      />
      <AppRow>
        <AppText
          type="body_1_medium"
          color="text300"
          text="Complication experienced"
        />
        <AppToggleSwitch
          isOn={historyDoseForm.hasComplication}
          onToggle={isOn =>
            handleUpdateHistoryDoseForm('hasComplication', isOn)
          }
        />
      </AppRow>
      <AppTextInput
        placeholder="Add note"
        height={80}
        value={historyDoseForm.note}
        multiline
        onChangeText={text => handleUpdateHistoryDoseForm('note', text)}
      />
      <AppButton
        text="Save"
        onPress={() => {
          handleSubmitVaccinationHistory();
        }}
        isLoading={isLoading}
      />
    </>
  );
};

const PatientVaccinationHistory: FunctionComponent = () => {
  const {colors} = useColors();
  const styles = prescriptionStyles({colors});
  const {patientHistorySummaries} = useGetVaccinationHistory();
  if (!patientHistorySummaries?.length) {
    return <></>;
  }

  return (
    <>
      <AppSeperator style={styles.seperator} />
      <AllInputsHistoryListView
        data={patientHistorySummaries}
        renderItem={({item}) => (
          <PatientVaccinationHistoryCard
            key={item.id}
            item={item as PatientVaccinationDto}
          />
        )}
      />
    </>
  );
};

const PatientVaccinationHistoryCard: FunctionComponent<{
  item: PatientVaccinationDto;
}> = ({item}) => {
  const {sheetRef, openSheet, closeSheet} = useSheet();

  const menuOptions: MenuOptionsProp = [
    {value: 'Discontinue', onPress: () => null},
    {value: 'Kiv meds', onPress: () => null},
    {value: 'Alternate with', onPress: () => null},
    {value: 'Mark as administered', onPress: () => null},
  ];

  return (
    <>
      <AllInputsHistoryTile
        date={'Today'} //TODO(Zucci) Either confirm this endpoint is the actual EP or ask BE to put date and time props.
        time={'9:00 AM'}
        onPress={openSheet}
        isLoading={false}
        textComponent={
          <AppText
            text={generateVaccineMessage(item)}
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
