import {
  CONSTANT_SPECIMEN_REFERENCE,
  CSFAnalysisTabs,
  csfAnalysisSpecimenComponents,
} from '@/constants/recordInvestigationsTests';
import {EMPTY_STRING} from '@/utils/constants';
import {convertObjectToArray} from '@/utils/helpers/convertObjectToArray';
import React from 'react';
import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';
import RecordInvestigationToggleButton from '../../../record-investigation-toggle-button';
import useInvestigationUniqueFormState from '../../use-investigation-unique-form';
import {CSFAnalysisFormSpecimensDataType} from './type';

const CSFAnalysisForm = ({
  title,
  getData = data => data,
}: {
  title?: string;
  getData: (data: Array<RangeInputFormResponseValues>) => void;
}) => {
  const {form, updateForm} =
    useInvestigationUniqueFormState<CSFAnalysisFormSpecimensDataType>(
      {},
      formData => {
        const formDataArray = convertObjectToArray(formData);
        getData(formDataArray);
      },
    );

  return (
    <>
      {csfAnalysisSpecimenComponents.map((specimenComponent, index) => (
        <React.Fragment key={index}>
          {specimenComponent.type === 'tab' && (
            <>
              <RecordInvestigationToggleButton
                title={title}
                tabs={CSFAnalysisTabs}
                getSelectedTab={item =>
                  updateForm(specimenComponent.specimen, {
                    category: 'Specimen',
                    name: specimenComponent.specimen,
                    leadingRangeValue: 0,
                    maxRangeValue: 0,
                    minRangeValue: 0,
                    unit: EMPTY_STRING,
                    result: item,
                    reference: CONSTANT_SPECIMEN_REFERENCE.NEGATIVE_OR_POSITIVE,
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

export default CSFAnalysisForm;
