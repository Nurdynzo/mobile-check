import {AppText} from '@/components/common';
import {wp} from '@/resources/config';
import React from 'react';
import {View} from 'react-native';

const Reference = ({
  value = 'value',
  details = 'details',
}: {
  value: string;
  details: string;
}) => {
  return (
    <View style={{gap: wp(16)}}>
      <AppText color={'text300'} text={details} />
      <AppText color={'text400'} text={value} />
    </View>
  );
};

export default Reference;
