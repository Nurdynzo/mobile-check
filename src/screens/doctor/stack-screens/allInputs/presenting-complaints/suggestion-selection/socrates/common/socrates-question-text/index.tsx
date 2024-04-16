import {AppText} from '@/components/common';
import {wp} from '@/resources/config';
import React from 'react';

const SocratesQuestionText = ({text}: {text: string}) => {
  return (
    <AppText
      text={text}
      type={'subtitle_semibold'}
      color={'text50'}
      style={{marginBottom: wp(16)}}
    />
  );
};

export default SocratesQuestionText;
