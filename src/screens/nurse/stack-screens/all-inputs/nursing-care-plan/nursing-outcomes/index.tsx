import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import CollapsibleSiteCard from '@/screens/nurse/stack-screens/all-inputs/common/collapsible-site-card';
import {useApiServicesAppNursecareplansGetnursingoutcomesGetQuery} from '@/state/services/nurseCarePlansApi';
import {EMPTY_STRING} from '@/utils/constants';
import React, {FunctionComponent, useEffect, useState} from 'react';
import planNames from '@/constants/nurseCarePlan';
import {AllInputsMulipleSuggestionFormHookType} from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-muliple-suggestion-form/type';

const planName = planNames.nursingOutcomes;

const NursingOutcomes: FunctionComponent<{
  formProps: AllInputsMulipleSuggestionFormHookType<NewCustomSnowstormSimpleResponseDto>;
}> = ({formProps}) => {
  const {
    text,
    setText,
    selectedItems,
    setSelectedItems,
    handleAddItem,
    handleRemoveItem,
    reset,
  } = formProps;
  const diagnosisData = selectedItems?.[planNames.nursingDiagnosis] ?? [];
  const shouldOpen = !!diagnosisData?.length;
  const {currentData: outcomesData = []} =
    useApiServicesAppNursecareplansGetnursingoutcomesGetQuery(
      {
        diagnosisId: Number(diagnosisData?.[0]?.id),
      },
      {
        skip: !shouldOpen,
        selectFromResult: result => ({
          ...result,
          currentData: result.currentData?.map(
            el =>
              ({
                id: `${el.id}`,
                name: el.name,
              } as NewCustomSnowstormSimpleResponseDto),
          ),
        }),
      },
    );
  const selectedData = selectedItems?.[planName] ?? [];
  const [isPreviewing, setIsPreviewing] = useState(false);

  useEffect(() => {
    setSelectedItems([], {tabName: planName});
    setIsPreviewing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diagnosisData?.length]);

  return (
    <CollapsibleSiteCard
      title="Nursing outcomes"
      leadingLabel={`${!isPreviewing ? 'Enter outcomes' : 'Outcomes selected'}`}
      suggestions={outcomesData}
      shouldOpen={shouldOpen}
      selectedData={selectedData}
      handleRemoveItem={item => {
        handleRemoveItem(item, {tabName: planName});
        if (selectedData.length === 1) {
          setIsPreviewing(false);
        }
      }}
      isPreviewing={isPreviewing}
      onToggle={() => {
        if (selectedData.length) {
          setIsPreviewing(!isPreviewing);
        }
      }}
      isSummary={false}
      hideSaveButton
      formProps={{
        selectedItems: selectedData,
        text: text?.[planName] ?? EMPTY_STRING,
        handleAddItem: item =>
          handleAddItem(item, {
            tabName: planName,
          }),
        handleRemoveItem: item => handleRemoveItem(item, {tabName: planName}),
        setSelectedItems: items => setSelectedItems(items, {tabName: planName}),
        setText: val => setText(val, {tabName: planName}),
        reset,
      }}
    />
  );
};

export default NursingOutcomes;
