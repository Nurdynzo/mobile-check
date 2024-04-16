import {AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {isPatientNewCardStyles} from './styles';

const IsPatientNewCard: FunctionComponent = () => {
  const {colors} = useColors();
  const styles = isPatientNewCardStyles({colors});
  return (
    <View style={styles.headerStatus}>
      <AppText type="status_tag_semibold" color="primary400" text={'New'} />
    </View>
  );
};

export default IsPatientNewCard;
