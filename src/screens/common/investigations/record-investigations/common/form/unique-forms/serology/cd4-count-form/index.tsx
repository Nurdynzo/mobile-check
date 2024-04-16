import {cd4SpecimenComponents} from '@/constants/recordInvestigationsTests';
import {wp} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import convertObjectToArray from '@/utils/helpers/convert-object-to-array';
import React from 'react';
import {View} from 'react-native';
import RangeInput from '../../../range-input';
import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';
import useInvestigationUniqueFormState from '../../use-investigation-unique-form';
import {CD4CountFormSpecimensDataType} from './type';

const CD4Form = ({
  getData = data => data,
}: {
  title?: string;
  getData: (data: Array<RangeInputFormResponseValues>) => void;
}) => {
  const {form, updateForm} =
    useInvestigationUniqueFormState<CD4CountFormSpecimensDataType>(
      {},
      formData => {
        const formDataArray = convertObjectToArray(formData);
        getData(formDataArray);
      },
    );

  return (
    <>
      <View
        style={{
          gap: wp(16),
        }}>
        {cd4SpecimenComponents.map((specimenComponent, index) => (
          <React.Fragment key={index}>
            {specimenComponent.type === 'tab with ranges' ? (
              <RangeInput
                title={specimenComponent.specimen}
                defaultValue={
                  form[specimenComponent.specimen]?.leadingRangeValue || 0
                }
                name={`/${specimenComponent.unit}`}
                onPressAdd={() =>
                  updateForm(specimenComponent.specimen, {
                    category: 'Specimen', //TODO(ZUCCI): Find a way to make the typed info here dynamic.
                    name: specimenComponent.specimen,
                    leadingRangeValue:
                      (form[specimenComponent.specimen]?.leadingRangeValue ||
                        0) + 1,
                    maxRangeValue: 0,
                    minRangeValue: 0,
                    reference: EMPTY_STRING,
                    result: EMPTY_STRING,
                    unit: specimenComponent.unit,
                  })
                }
                onPressMinus={() =>
                  updateForm(specimenComponent.specimen, {
                    ...form[specimenComponent.specimen],
                    leadingRangeValue:
                      (form[specimenComponent.specimen]?.leadingRangeValue ||
                        0) - 1,
                  })
                }
              />
            ) : (
              <></>
            )}
          </React.Fragment>
        ))}
      </View>
    </>
  );
};

export default CD4Form;
