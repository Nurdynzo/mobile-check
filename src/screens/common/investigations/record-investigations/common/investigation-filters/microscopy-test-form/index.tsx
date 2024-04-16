import {AppRow, AppText} from '@/components/common';
import {AppTextInput} from '@/components/inputs';
import {fs} from '@/resources/config';
import React, {useState} from 'react';
import {View} from 'react-native';
import InvestigationFormInputGroup from '../../form/form-input-group';
import InvestigationCellCountSelectionView from '../../form/investigation-cell-count-selection-view';
import {cellCountType} from '../../form/investigation-cell-count-selection-view/type';
import {EMPTY_STRING} from '@/utils/constants';
import {microscopyEstimatedCellCountOptions} from '@/constants/recordInvestigationsTests';

const MicroscopyTestForm = () => {
  const [form, setForm] = useState<{
    estimatedCellCount: cellCountType;
    numericCellCount: string | '';
  }>({
    estimatedCellCount: EMPTY_STRING,
    numericCellCount: EMPTY_STRING,
  });

  return (
    <>
      <InvestigationFormInputGroup>
        <AppText
          type="title_semibold"
          color="text50"
          text={'Numeric cell count'}
          style={{fontSize: fs(14)}}
        />
        <AppRow>
          <AppTextInput
            value={`${form.numericCellCount}`}
            onChangeText={text => {
              setForm({
                ...form,
                numericCellCount: text,
                estimatedCellCount: EMPTY_STRING,
              });
            }}
            placeholder="0"
            baseContainerStyle={{flex: 1}}
          />
          <View style={{flex: 1}}>
            <AppText text="/F" type="body_1_semibold" />
          </View>
        </AppRow>
      </InvestigationFormInputGroup>
      <InvestigationFormInputGroup>
        <AppText
          type="title_semibold"
          color="text50"
          text={'Estimated cell count'}
          style={{fontSize: fs(14)}}
        />
        <InvestigationCellCountSelectionView
          data={microscopyEstimatedCellCountOptions}
          getSelectedTab={cell => {
            setForm({
              ...form,
              estimatedCellCount: cell,
              numericCellCount: EMPTY_STRING,
            });
          }}
          selected={form.estimatedCellCount}
        />
      </InvestigationFormInputGroup>
    </>
  );
};

export default MicroscopyTestForm;
