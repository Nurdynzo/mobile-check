import {
  urinePregnancyTestSpecimenComponents,
  urinePregnancyTabs,
} from '@/constants/recordInvestigationsTests';
import {EMPTY_STRING} from '@/utils/constants';
import convertObjectToArray from '@/utils/helpers/convert-object-to-array';
import React from 'react';
import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';
import RecordInvestigationToggleButton from '../../../record-investigation-toggle-button';
import useInvestigationUniqueFormState from '../../use-investigation-unique-form';
import {UrinePregnancyTestFormSpecimensDataType} from './type';

const UrinePregnancyTestForm = ({
  title,
  getData = type => type,
}: {
  title?: string;
  getData: (data: Array<RangeInputFormResponseValues>) => void;
}) => {
  const {form, updateForm} =
    useInvestigationUniqueFormState<UrinePregnancyTestFormSpecimensDataType>(
      {},
      formData => {
        const formDataArray = convertObjectToArray(formData);
        getData(formDataArray);
      },
    );

  return (
    <>
      {urinePregnancyTestSpecimenComponents.map((specimenComponent, index) => (
        <React.Fragment key={index}>
          {specimenComponent.type === 'tab' && (
            <>
              <RecordInvestigationToggleButton
                title={title}
                tabs={urinePregnancyTabs}
                getSelectedTab={item =>
                  updateForm(specimenComponent.specimen, {
                    category: 'Specimen',
                    name: specimenComponent.specimen,
                    leadingRangeValue: 0,
                    maxRangeValue: 0,
                    minRangeValue: 0,
                    unit: EMPTY_STRING,
                    result: item,
                  })
                }
                defaultTab={
                  form[specimenComponent.specimen]?.result || EMPTY_STRING
                }
              />
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default UrinePregnancyTestForm;
