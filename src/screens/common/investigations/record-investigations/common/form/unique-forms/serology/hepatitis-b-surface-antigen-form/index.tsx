import {AppSeperator} from '@/components/common';
import {
  CONSTANT_SPECIMEN_REFERENCE,
  hepatitisBsurfaceAntigenSpecimenComponents,
  hepatitisBsurfaceAntigenTabs,
} from '@/constants/recordInvestigationsTests';
import {EMPTY_STRING} from '@/utils/constants';
import convertObjectToArray from '@/utils/helpers/convert-object-to-array';
import React from 'react';
import {View} from 'react-native';
import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';
import RecordInvestigationToggleButton from '../../../record-investigation-toggle-button';
import Reference from '../../../reference';
import useInvestigationUniqueFormState from '../../use-investigation-unique-form';
import {HepatitisBsurfaceAntigenFormSpecimensDataType} from './type';

const HepatitisBsurfaceAntigenForm = ({
  getData = data => data,
}: {
  title?: string;
  getData: (data: Array<RangeInputFormResponseValues>) => void;
}) => {
  const {form, updateForm} =
    useInvestigationUniqueFormState<HepatitisBsurfaceAntigenFormSpecimensDataType>(
      {},
      formData => {
        const formDataArray = convertObjectToArray(formData);
        getData(formDataArray);
      },
    );

  return (
    <View style={{gap: 16}}>
      {hepatitisBsurfaceAntigenSpecimenComponents.map((specimen, index) => (
        <React.Fragment key={index}>
          <RecordInvestigationToggleButton
            title={specimen}
            tabs={hepatitisBsurfaceAntigenTabs}
            getSelectedTab={item =>
              updateForm(specimen, {
                category: 'Specimen', //TODO(ZUCCI): Find a way to make the typed info here dynamic.
                name: specimen, //TODO(ZUCCI): Find a way to make the typed info here dynamic.
                leadingRangeValue: 0,
                maxRangeValue: 0,
                minRangeValue: 0,
                reference: CONSTANT_SPECIMEN_REFERENCE.NON_REACTIVE_OR_REACTIVE,
                result: item,
                unit: EMPTY_STRING,
              })
            }
            defaultTab={form[specimen]?.result || EMPTY_STRING}
          />
          <Reference
            details="Reference"
            value={CONSTANT_SPECIMEN_REFERENCE.NON_REACTIVE_OR_REACTIVE}
          />
          <AppSeperator />
        </React.Fragment>
      ))}

      <AppSeperator />
    </View>
  );
};

export default HepatitisBsurfaceAntigenForm;
