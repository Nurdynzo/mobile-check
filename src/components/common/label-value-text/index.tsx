import React, {FunctionComponent} from 'react';
import RecordRow from '../../cards/record-row';
import {AppText} from '..';

const LabelValueText: FunctionComponent<{
  label: string;
  value?: string | number;
}> = ({label, value}) => (
  <RecordRow detail={label}>
    <AppText color="text400" type="body_2_semibold" text={value} />
  </RecordRow>
);

export default LabelValueText;
