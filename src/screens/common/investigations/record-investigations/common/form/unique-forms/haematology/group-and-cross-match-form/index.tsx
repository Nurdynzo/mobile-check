import {DownCaretIcon} from '@/assets/svg';
import {AppText} from '@/components/common';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {
  CONSTANT_SPECIMEN_REFERENCE,
  groupAndCrossMatchSpecimenComponents,
  groupAndCrossMatchTabs,
} from '@/constants/recordInvestigationsTests';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {detectTouch} from '@/resources/config';
import {SelectItem, SelectItemOptionsProp} from '@/types/selectItemsheet';
import {EMPTY_STRING} from '@/utils/constants';
import {convertObjectToArray} from '@/utils/helpers/convertObjectToArray';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import RangeInput from '../../../range-input';
import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';
import RecordInvestigationToggleButton from '../../../record-investigation-toggle-button';
import Reference from '../../../reference';
import useInvestigationUniqueFormState from '../../use-investigation-unique-form';
import {groupAndCrossMatchFormStyles} from './styles';
import {GroupAndCrossMatchFormSpecimensDataType} from './type';

const GroupAndCrossMatchForm = ({
  title,
  getData,
}: {
  title?: string;
  getData: (data: Array<RangeInputFormResponseValues>) => void;
}) => {
  const {form, updateForm} =
    useInvestigationUniqueFormState<GroupAndCrossMatchFormSpecimensDataType>(
      {},
      formData => {
        const formDataArray = convertObjectToArray(formData);
        getData(formDataArray);
      },
    );

  return (
    <>
      {groupAndCrossMatchSpecimenComponents.map((specimenComponent, index) => (
        <React.Fragment key={index}>
          {specimenComponent.type === 'tab with ranges' && (
            <>
              <RecordInvestigationToggleButton
                title={title}
                tabs={groupAndCrossMatchTabs}
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
              <Reference
                details="Reference"
                value={
                  CONSTANT_SPECIMEN_REFERENCE.NO_AGGLUTINATION_OR_AGGLUTINATION
                }
              />
              <RangeInput
                title={specimenComponent.specimen}
                defaultValue={
                  form[specimenComponent.specimen]?.leadingRangeValue || 0
                }
                name={`/${specimenComponent.unit}`}
                onPressAdd={() =>
                  updateForm(specimenComponent.specimen, {
                    ...form[specimenComponent.specimen],
                    leadingRangeValue:
                      (form[specimenComponent.specimen]?.leadingRangeValue ||
                        0) + 1,
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
            </>
          )}
          {specimenComponent.type === 'drop down' && (
            <>
              <InvestigationDropDown
                value={form[specimenComponent.specimen]?.result || EMPTY_STRING}
                data={[{item: {id: 1, value: 'blood component'}}]}
                getSelectedItem={item =>
                  updateForm(specimenComponent.specimen, {
                    category: 'Specimen', //TODO(ZUCCI): Find a way to make the typed info here dynamic.
                    name: specimenComponent.specimen,
                    leadingRangeValue: 0,
                    maxRangeValue: 0,
                    minRangeValue: 0,
                    result: item.value,
                    unit: EMPTY_STRING,
                  })
                }
              />
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default GroupAndCrossMatchForm;

const InvestigationDropDown = ({
  getSelectedItem = item => item,
  data = [],
  value,
}: {
  getSelectedItem?: (item: SelectItem<string>) => void;
  data: SelectItemOptionsProp<string> | undefined;
  value: string;
}) => {
  const {openSheet, sheetRef, closeSheet} = useSheet();
  const {colors} = useColors();
  const styles = groupAndCrossMatchFormStyles({colors});
  return (
    <>
      <TouchableOpacity
        hitSlop={detectTouch}
        onPress={openSheet}
        style={styles.container}>
        <AppText
          text={value || 'Select'}
          color={value ? 'text300' : 'neutral200'}
        />
        <DownCaretIcon width={30} height={30} fill={colors.text50} />
      </TouchableOpacity>
      <AppSelectItemSheet
        title={'Blood component'}
        sheetRef={sheetRef}
        selectOptions={data}
        onChanged={({item}) => {
          getSelectedItem(item);
          closeSheet();
        }}
      />
    </>
  );
};
