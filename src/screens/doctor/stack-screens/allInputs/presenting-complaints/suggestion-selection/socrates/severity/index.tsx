import SliderInput from '@/components/slider-input';
import {useAppSelector} from '@/state/hooks';
import {
  selectTempState,
  setTempStateSeverity,
} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import React from 'react';
import {useDispatch} from 'react-redux';

const SeverityView = () => {
  const {severity, mainSearchResult} = useAppSelector(selectTempState);
  const dispatch = useDispatch();
  return (
    <>
      <SliderInput
        number={severity}
        getValue={scale => dispatch(setTempStateSeverity(Math.round(scale)))}
        scaleSuffix="Severity"
        title={`On a scale of 1 - 10, how severe is the ${
          mainSearchResult?.name || 'Pain'
        }?`}
      />
    </>
  );
};

export default SeverityView;
