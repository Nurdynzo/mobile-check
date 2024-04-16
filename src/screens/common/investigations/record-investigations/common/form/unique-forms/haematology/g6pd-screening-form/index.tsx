import {
  CONSTANT_SPECIMEN_REFERENCE,
  g6pdScreeningSpecimenComponents,
  g6pdScreeningTabs,
} from '@/constants/recordInvestigationsTests';
import convertObjectToArray from '@/utils/helpers/convert-object-to-array';
import React from 'react';
import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';
import useInvestigationUniqueFormState from '../../use-investigation-unique-form';
import {G6pdScreeningFormSpecimensDataType} from './type';
import RecordInvestigationToggleButton from '../../../record-investigation-toggle-button';
import {EMPTY_STRING} from '@/utils/constants';

const G6pdScreeningForm = ({
  title,
  getData = type => type,
}: {
  title?: string;
  getData: (data: Array<RangeInputFormResponseValues>) => void;
}) => {
  const {form, updateForm} =
    useInvestigationUniqueFormState<G6pdScreeningFormSpecimensDataType>(
      {},
      formData => {
        const formDataArray = convertObjectToArray(formData);
        getData(formDataArray);
      },
    );

  return (
    <>
      {g6pdScreeningSpecimenComponents.map((specimenComponent, index) => (
        <React.Fragment key={index}>
          {specimenComponent.type === 'tab' && (
            <>
              <RecordInvestigationToggleButton
                title={title}
                tabs={g6pdScreeningTabs}
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
                      CONSTANT_SPECIMEN_REFERENCE.NO_AGGLUTINATION_OR_AGGLUTINATION,
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

export default G6pdScreeningForm;
