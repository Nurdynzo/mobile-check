import {AppSeperator} from '@/components/common';
import {
  CONSTANT_SPECIMEN_REFERENCE,
  sicklingTestSpecimenComponents,
  sicklingTestTabs,
} from '@/constants/recordInvestigationsTests';
import {EMPTY_STRING} from '@/utils/constants';
import {convertObjectToArray} from '@/utils/helpers/convertObjectToArray';
import React from 'react';
import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';
import RecordInvestigationToggleButton from '../../../record-investigation-toggle-button';
import Reference from '../../../reference';
import useInvestigationUniqueFormState from '../../use-investigation-unique-form';
import {SicklingTestFormSpecimensDataType} from './type';

const SicklingTestForm = ({
  title,
  getData = data => data,
}: {
  title?: string;
  getData: (data: Array<RangeInputFormResponseValues>) => void;
}) => {
  const {form, updateForm} =
    useInvestigationUniqueFormState<SicklingTestFormSpecimensDataType>(
      {},
      formData => {
        const formDataArray = convertObjectToArray(formData);
        getData(formDataArray);
      },
    );

  return (
    <>
      {sicklingTestSpecimenComponents.map((specimenComponent, index) => (
        <React.Fragment key={index}>
          {specimenComponent.type === 'tab' && (
            <>
              <RecordInvestigationToggleButton
                title={title}
                tabs={sicklingTestTabs}
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
                details="Reference"
                value={CONSTANT_SPECIMEN_REFERENCE.NEGATIVE_OR_POSITIVE}
              />
              <AppSeperator />
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default SicklingTestForm;
