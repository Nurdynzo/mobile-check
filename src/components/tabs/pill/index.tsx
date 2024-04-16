import React from 'react';
import {AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {TouchableOpacity} from 'react-native';
import {pillStyles} from './styles';

const Pill = ({text}: {text: string}) => {
  const {colors} = useColors();
  const styles = pillStyles({colors});
  return (
    <TouchableOpacity style={styles.container}>
      <AppText text={text} color="text400" />
    </TouchableOpacity>
  );
};

export default Pill;
