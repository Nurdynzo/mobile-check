import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {AppText} from '../../../../common';
import AppButton from '../../../../buttons/app-button';
import {addressBtnStyles} from './styles';

const AddressBtn: FunctionComponent<{onPress?: () => void}> = ({onPress}) => {
  const styles = addressBtnStyles();
  return (
    <View style={styles.container}>
      <AppText text="S/A" type="caption_medium" />
      <AppButton
        text="Click"
        borderRadius={5}
        buttonColor="white"
        textColor="primary400"
        borderColor="primary400"
        borderWidth={1}
        containerStyle={styles.btn}
        onPress={onPress}
      />
    </View>
  );
};

export default AddressBtn;
