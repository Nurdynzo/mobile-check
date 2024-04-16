import {GeneralScreenProps} from '@/navigation/types';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {viewPaperRecordsRegularStyles} from './styles';

const Regular: FunctionComponent<
  GeneralScreenProps<'VIEW_PARER_RECORDS_TAB'>
> = () => {
  const styles = viewPaperRecordsRegularStyles;
  return <View style={styles.container} />;
};

export default Regular;
