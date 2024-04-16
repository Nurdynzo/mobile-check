import {wp} from '@/resources/config';
import React, {ReactNode} from 'react';
import {View} from 'react-native';

const InvestigationFormInputGroup = ({children}: {children: ReactNode}) => {
  return <View style={{gap: wp(5)}}>{children}</View>;
};

export default InvestigationFormInputGroup;
