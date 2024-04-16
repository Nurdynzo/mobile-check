import {viralLoadSpecimenComponents} from '@/constants/recordInvestigationsTests';
import {wp} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import {convertObjectToArray} from '@/utils/helpers/convertObjectToArray';
import React from 'react';
import {View} from 'react-native';
import RangeInput from '../../../range-input';
import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';
import useInvestigationUniqueFormState from '../../use-investigation-unique-form';
import {ViralLoadFormSpecimensDataType} from './type';

const ViralLoadForm = ({
  getData = data => data,
}: {
  title?: string;
  getData: (data: Array<RangeInputFormResponseValues>) => void;
}) => {
  const {form, updateForm} =
    useInvestigationUniqueFormState<ViralLoadFormSpecimensDataType>(
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
        {viralLoadSpecimenComponents.map((specimenComponent, index) => (
          <React.Fragment key={index}>
            {specimenComponent.type === 'range' && (
              <RangeInput
                title={specimenComponent.specimen}
                defaultValue={
                  form[specimenComponent.specimen]?.leadingRangeValue || 0
                }
                name={`/${specimenComponent.unit}`}
                onPressAdd={() =>
                  updateForm(specimenComponent.specimen, {
                    ...form[specimenComponent.specimen],
                    category: 'Specimen',
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
            )}
          </React.Fragment>
        ))}
      </View>
    </>
  );
};

export default ViralLoadForm;
