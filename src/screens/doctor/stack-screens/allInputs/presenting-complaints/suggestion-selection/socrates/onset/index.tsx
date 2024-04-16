import {AppSelectInput} from '@/components/inputs';
import SelectWithLeftInput from '@/components/inputs/select-with-left-input';
import {wp} from '@/resources/config';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {
  selectTempState,
  setTempStateOnset,
} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import React from 'react';
import {View} from 'react-native';
import {SocratesQuestionText} from '../common';

const OnsetView = () => {
  const {onSet} = useAppSelector(selectTempState);
  const dispatch = useAppDispatch();
  const {cyclicality, interval, intervalUnit} = onSet;

  return (
    <>
      <SocratesQuestionText text={'When did it start?'} />
      <View style={{gap: wp(16)}}>
        <SelectWithLeftInput
          label="When/How long ago?"
          placeholder="Select interval"
          leftValuePlaceholder="0"
          leftValue={interval ? interval?.toString() : ''}
          value={intervalUnit}
          selectOptions={[
            'seconds',
            'minutes',
            'hours',
            'days',
            'weeks',
            'months',
          ].map(el => ({
            item: {id: el, value: el},
          }))}
          onChangeLeftValueText={text => {
            dispatch(
              setTempStateOnset({type: 'interval', data: Number(text) || 0}),
            );
          }}
          onChange={data => {
            dispatch(
              setTempStateOnset({type: 'intervalUnit', data: data.value}),
            );
          }}
        />
        <AppSelectInput
          label={'Cyclicality'}
          value={cyclicality}
          placeholder={'Select cyclicality'}
          selectOptions={['intermittent', 'constant', 'gradual', 'sudden'].map(
            el => ({
              item: {id: el, value: el},
            }),
          )}
          onChange={({value}) =>
            dispatch(setTempStateOnset({type: 'cyclicality', data: value}))
          }
        />
      </View>
    </>
  );
};

export default OnsetView;
