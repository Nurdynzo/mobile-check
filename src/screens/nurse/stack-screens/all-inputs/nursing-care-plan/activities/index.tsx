import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {AllInputsMulipleSuggestionFormHookType} from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-muliple-suggestion-form/type';
import CollapsibleSiteCard from '@/screens/nurse/stack-screens/all-inputs/common/collapsible-site-card';
import {useApiServicesAppNursecareplansGetnursingactivitiesGetQuery} from '@/state/services/nurseCarePlansApi';
import {EMPTY_STRING} from '@/utils/constants';
import React, {FunctionComponent, useEffect, useState} from 'react';
import planNames from '@/constants/nurseCarePlan';

const planName = planNames.activities;

const Activities: FunctionComponent<{
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
  const interventionData = selectedItems[planNames.nursingIntervention] ?? [];
  const shouldOpen = !!interventionData?.length;
  const {currentData: activitiesData} =
    useApiServicesAppNursecareplansGetnursingactivitiesGetQuery(
      {
        careInterventionIds: interventionData.map(el => Number(el.id)),
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
  }, [interventionData?.length]);

  return (
    <CollapsibleSiteCard
      title="Activities"
      leadingLabel={`${
        !isPreviewing ? 'Enter activities' : 'Activities selected'
      }`}
      suggestions={activitiesData}
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

export default Activities;
