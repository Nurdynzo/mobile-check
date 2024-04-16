import {
  CONSTANT_SPECIMEN_REFERENCE,
  serumPregnancyTabs,
  serumPregnancyTestSpecimenComponents,
} from '@/constants/recordInvestigationsTests';
import {EMPTY_STRING} from '@/utils/constants';
import convertObjectToArray from '@/utils/helpers/convert-object-to-array';
import React from 'react';
import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';
import RecordInvestigationToggleButton from '../../../record-investigation-toggle-button';
import useInvestigationUniqueFormState from '../../use-investigation-unique-form';
import {SerumPregnancyTestFormSpecimensDataType} from './type';

const SerumPregnancyTestForm = ({
  title,
  getData = type => type,
}: {
  title?: string;
  getData: (data: Array<RangeInputFormResponseValues>) => void;
}) => {
  const {form, updateForm} =
    useInvestigationUniqueFormState<SerumPregnancyTestFormSpecimensDataType>(
      {},
      formData => {
        const formDataArray = convertObjectToArray(formData);
        getData(formDataArray);
      },
    );
  return (
    <>
      {serumPregnancyTestSpecimenComponents.map((specimenComponent, index) => (
        <React.Fragment key={index}>
          {specimenComponent.type === 'tab' && (
            <>
              <RecordInvestigationToggleButton
                title={title}
                tabs={serumPregnancyTabs}
                getSelectedTab={item =>
                  updateForm(specimenComponent.specimen, {
                    category: 'Specimen',
                    name: specimenComponent.specimen,
                    leadingRangeValue: 0,
                    maxRangeValue: 0,
                    minRangeValue: 0,
                    unit: EMPTY_STRING,
                    result: item,
                    reference:
                      CONSTANT_SPECIMEN_REFERENCE.NON_DETECTED_AND_DETECTED,
                  })
                }
                defaultTab={form['']?.result || EMPTY_STRING}
              />
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default SerumPregnancyTestForm;
