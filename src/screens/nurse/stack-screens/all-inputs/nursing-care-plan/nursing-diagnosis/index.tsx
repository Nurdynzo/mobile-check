import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {AllInputsMulipleSuggestionFormHookType} from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-muliple-suggestion-form/type';
import CollapsibleSiteCard from '@/screens/nurse/stack-screens/all-inputs/common/collapsible-site-card';
import {useApiServicesAppNursecareplansGetnursingdiagnosisGetQuery} from '@/state/services/nurseCarePlansApi';
import {EMPTY_STRING} from '@/utils/constants';
import React, {useState} from 'react';
import planNames from '@/constants/nurseCarePlan';

const planName = planNames.nursingDiagnosis;
const NursingDiagnosis = ({
  formProps,
}: {
  formProps: AllInputsMulipleSuggestionFormHookType<NewCustomSnowstormSimpleResponseDto>;
}) => {
  const {data: diagnosisData} =
    useApiServicesAppNursecareplansGetnursingdiagnosisGetQuery(undefined, {
      selectFromResult: result => ({
        ...result,
        data: result.data?.map(
          el =>
            ({
              id: `${el.id}`,
              name: el.name,
            } as NewCustomSnowstormSimpleResponseDto),
        ),
      }),
    });

  const {
    text,
    setText,
    selectedItems,
    setSelectedItems,
    handleAddItem,
    handleRemoveItem,
    reset,
  } = formProps;
  const [isPreviewing, setIsPreviewing] = useState(false);
  const selectedData = selectedItems?.[planName] ?? [];

  return (
    <CollapsibleSiteCard
      title="Nursing diagnosis"
      leadingLabel={`${
        !isPreviewing ? 'Enter diagnosis' : 'Diagnosis selected'
      }`}
      selectedData={selectedData}
      suggestions={diagnosisData}
      isPreviewing={isPreviewing && !!selectedData.length}
      onToggle={() => {
        if (selectedData.length) {
          setIsPreviewing(!isPreviewing);
        }
      }}
      shouldOpen
      isSummary={false}
      hideSaveButton
      handleRemoveItem={item => {
        handleRemoveItem(item, {tabName: planName});
        if (selectedData.length === 1) {
          setIsPreviewing(false);
        }
      }}
      formProps={{
        selectedItems: selectedData,
        text: text?.[planName] ?? EMPTY_STRING,
        handleAddItem: item =>
          handleAddItem(item, {
            tabName: planName,
            isSingleSelect: true,
          }),
        handleRemoveItem: item => handleRemoveItem(item, {tabName: planName}),
        setSelectedItems: items => setSelectedItems(items, {tabName: planName}),
        setText: val => setText(val, {tabName: planName}),
        reset,
      }}
    />
  );
};

export default NursingDiagnosis;
