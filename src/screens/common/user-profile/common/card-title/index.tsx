import {AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {EMPTY_STRING} from '@/utils/constants';
import React from 'react';
import {View} from 'react-native';
import {cardTitleStyles} from './styles';

const CardTitle = ({
  title = EMPTY_STRING,
  showLine = true,
}: {
  title?: string;
  showLine?: boolean;
}) => {
  const {colors} = useColors();
  const styles = cardTitleStyles({colors});
  return title ? (
    <View style={styles.personalInforCardHeader}>
      <AppText type="title_semibold" color="text400" text={title} />
      {showLine && <View testID="line" style={styles.line} />}
    </View>
  ) : (
    <></>
  );
};

export default CardTitle;
