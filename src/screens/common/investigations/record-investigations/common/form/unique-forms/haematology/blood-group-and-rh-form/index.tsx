import {AppSeperator} from '@/components/common';
import {useNewAllInputsSuggestionForm} from '@/components/forms';
import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import RecordInvestigationSuggestionSelectionForm from '@/components/forms/record-investigation-suggestion-selection-form';
import {
  bloodGroupAndRhSpecimenComponents,
  bloodGroupAndRhTabs,
} from '@/constants/recordInvestigationsTests';
import {wp} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import {convertObjectToArray} from '@/utils/helpers/convertObjectToArray';
import React from 'react';
import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';
import RecordInvestigationToggleButton from '../../../record-investigation-toggle-button';
import Reference from '../../../reference';
import useInvestigationUniqueFormState from '../../use-investigation-unique-form';
import {BloodGroupAndRhFormSpecimensDataType} from './type';

const BloodGroupAndRhForm = ({
  title,
  getData = data => data,
}: {
  title?: string;
  getData: (data: Array<RangeInputFormResponseValues>) => void;
}) => {
  const {form, updateForm} =
    useInvestigationUniqueFormState<BloodGroupAndRhFormSpecimensDataType>(
      {},
      formData => {
        const formDataArray = convertObjectToArray(formData);
        getData(formDataArray);
      },
    );

  const bloodGroupAndRhForm =
    useNewAllInputsSuggestionForm<NewCustomSnowstormSimpleResponseDto>({
      isSingleSelect: true,
    });
  const {setSelectedItems: setSelectedBloodGroup} = bloodGroupAndRhForm;

  return (
    <>
      {bloodGroupAndRhSpecimenComponents.map((specimenComponent, index) => (
        <React.Fragment key={index}>
          {specimenComponent.type === 'suggestions' && (
            <>
              <RecordInvestigationSuggestionSelectionForm
                height={wp(100)}
                expandSheetHeaderTitle={EMPTY_STRING}
                placeholder="Click on predictive text or search results"
                formProps={{
                  ...bloodGroupAndRhForm,
                  handleAddItem: props => {
                    setSelectedBloodGroup([props]);
                    updateForm(specimenComponent.specimen, {
                      category: 'Specimen',
                      name: specimenComponent.specimen,
                      leadingRangeValue: 0,
                      maxRangeValue: 0,
                      minRangeValue: 0,
                      result: props.name,
                      unit: EMPTY_STRING,
                    });
                  },
                }}
                suggestions={
                  [
                    //TODO:(ZUCCI): Confirm if you'll have to call the get blood group EP for this
                    {id: '1', name: 'A+'},
                    {id: '2', name: 'b+'},
                  ] || []
                }
              />
              <Reference
                details="Result"
                value={form[specimenComponent.specimen]?.result || EMPTY_STRING}
              />
              <AppSeperator />
            </>
          )}
          {specimenComponent.type === 'tab' && (
            <>
              <RecordInvestigationToggleButton
                title={title}
                tabs={bloodGroupAndRhTabs}
                getSelectedTab={item =>
                  updateForm(specimenComponent.specimen, {
                    category: 'Specimen',
                    name: specimenComponent.specimen,
                    leadingRangeValue: 0,
                    maxRangeValue: 0,
                    minRangeValue: 0,
                    result: item,
                    unit: EMPTY_STRING,
                  })
                }
                defaultTab={
                  form[specimenComponent.specimen]?.result || EMPTY_STRING
                }
              />
              <Reference
                details="Result"
                value={form[specimenComponent.specimen]?.result || EMPTY_STRING}
              />
              <AppSeperator />
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default BloodGroupAndRhForm;
