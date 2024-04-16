import {AppSelectInput} from '@/components/inputs';
import SelectWithLeftInput from '@/components/inputs/select-with-left-input';
import {wp} from '@/resources/config';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {
  selectTempState,
  setTempStateTimeCourse,
} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import React from 'react';
import {View} from 'react-native';
import {SocratesQuestionText} from '../common';

const TimeCourseView = () => {
  const {timeCourse} = useAppSelector(selectTempState);
  const dispatch = useAppDispatch();
  const {symptomsFelt, interval, intervalUnit} = timeCourse;

  return (
    <>
      <SocratesQuestionText text={'Does it follow any time pattern?'} />
      <View style={{gap: wp(16)}}>
        <AppSelectInput
          label={'Symptoms usually felt'}
          value={symptomsFelt}
          placeholder={'Select time'}
          selectOptions={[
            'at night',
            'when asleep',
            'after meals',
            'on exertion',
          ].map(el => ({
            item: {id: el, value: el},
          }))}
          onChange={({value}) =>
            dispatch(
              setTempStateTimeCourse({type: 'symptomsFelt', data: value}),
            )
          }
        />
        <SelectWithLeftInput
          label="How long does it last?"
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
              setTempStateTimeCourse({
                type: 'interval',
                data: Number(text) || 0,
              }),
            );
          }}
          onChange={data => {
            dispatch(
              setTempStateTimeCourse({type: 'intervalUnit', data: data.value}),
            );
          }}
        />
      </View>
    </>
  );
};

export default TimeCourseView;
