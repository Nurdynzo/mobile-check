import {
  AllInputsSuggestionForm,
  useAllInputsSuggestionForm,
} from '@/components/forms';
import {bloodFilmSpecimenComponents} from '@/constants/recordInvestigationsTests';
import {EMPTY_STRING} from '@/utils/constants';
import convertObjectToArray from '@/utils/helpers/convert-object-to-array';
import React from 'react';
import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';
import useInvestigationUniqueFormState from '../../use-investigation-unique-form';
import {BloodFilmFormSpecimensDataType} from './type';

const BloodFilmForm = ({
  getData = data => data,
}: {
  getData: (data: Array<RangeInputFormResponseValues>) => void;
}) => {
  const {updateForm, setForm} =
    useInvestigationUniqueFormState<BloodFilmFormSpecimensDataType>(
      {},
      formData => {
        const formDataArray = convertObjectToArray(formData);
        getData(formDataArray);
      },
    );

  const bloodFilmForm = useAllInputsSuggestionForm();
  const {setSelectedItems: setSelectedSearchResult} = bloodFilmForm;

  return (
    <>
      {bloodFilmSpecimenComponents.map((specimenComponent, index) => (
        <React.Fragment key={index}>
          <>
            <AllInputsSuggestionForm
              formProps={{
                ...bloodFilmForm,
                handleAddItem: props => {
                  setSelectedSearchResult([props]);
                  updateForm(specimenComponent.specimen, {
                    category: 'Specimen',
                    name: specimenComponent.specimen,
                    leadingRangeValue: 0,
                    maxRangeValue: 0,
                    minRangeValue: 0,
                    unit: EMPTY_STRING,
                    result: props?.name || EMPTY_STRING,
                  });
                },
                handleRemoveItem: _ => {
                  setForm({}), setSelectedSearchResult([]);
                },
              }}
              suggestions={[{id: '1', name: 'Normocytes'}]}
              expandSheetHeaderTitle="Click on predictive text or search results"
              placeholder="Click on predictive text or search results"
            />
          </>
        </React.Fragment>
      ))}
    </>
  );
};

export default BloodFilmForm;
