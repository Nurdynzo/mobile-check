import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {AllInputsMulipleSuggestionFormHookType} from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-muliple-suggestion-form/type';
import CollapsibleSiteCard from '@/screens/nurse/stack-screens/all-inputs/common/collapsible-site-card';
import {useApiServicesAppNursecareplansGetnursingcareinterventionsGetQuery} from '@/state/services/nurseCarePlansApi';
import {EMPTY_STRING} from '@/utils/constants';
import React, {FunctionComponent, useEffect, useState} from 'react';
import planNames from '@/constants/nurseCarePlan';

const planName = planNames.nursingIntervention;

const NursingInterventions: FunctionComponent<{
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
  const outcomeData = selectedItems?.[planNames.nursingOutcomes] ?? [];
  const shouldOpen = !!outcomeData?.length;

  const {currentData: interventionData = []} =
    useApiServicesAppNursecareplansGetnursingcareinterventionsGetQuery(
      {
        outcomesIds: outcomeData.map(el => Number(el.id)),
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
  }, [outcomeData?.length]);

  return (
    <CollapsibleSiteCard
      title="Nursing interventions"
      leadingLabel={`${
        !isPreviewing ? 'Enter interventions' : 'Interventions selected'
      }`}
      suggestions={interventionData}
      shouldOpen={shouldOpen}
      selectedData={selectedData}
      handleRemoveItem={item => {
        handleRemoveItem(item, {tabName: planName});
        if (selectedData.length === 1) {
          setIsPreviewing(false);
        }
      }}
      isPreviewing={isPreviewing}
      isSummary={false}
      hideSaveButton
      onToggle={() => {
        if (selectedData.length) {
          setIsPreviewing(!isPreviewing);
        }
      }}
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

export default NursingInterventions;
