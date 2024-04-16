import React from 'react';
import {View} from 'react-native';
import AppText from '../../common/app-text';
import {formHeaderStyles} from './styles';
import {formHeaderProp} from './type';

const FormHeader = ({
  desc = 'description',
  title = 'title',
}: formHeaderProp) => {
  const styles = formHeaderStyles;
  return (
    <View style={styles.container}>
      <AppText
        color={'text400'}
        text={title}
        type={'title_semibold'}
        align={'left'}
      />
      <AppText
        color={'text300'}
        text={desc}
        type={'subtitle_medium'}
        align={'left'}
      />
    </View>
  );
};

export default FormHeader;
