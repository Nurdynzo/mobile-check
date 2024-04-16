import React, {FunctionComponent} from 'react';

import {View} from 'react-native';
import {AppSeperator, AppText} from '../../../../common';
import {
  BinIcon,
  FingerPrintIcon,
  PlusCircleIcon,
} from '../../../../../assets/svg';
import {FormNestedFooterProps, FormNestedHeaderProps} from './types';
import AppButton from '../../../../buttons/app-button';
import {nestedFormStyles} from './styles';
import {useColors} from '@/hooks/useColors';

const FormNestedHeader: FunctionComponent<FormNestedHeaderProps> = ({
  showSeperator,
  title,
  onThumbPress,
  removeThumbBtn,
}) => {
  const styles = nestedFormStyles;
  return (
    <>
      {showSeperator && <AppSeperator />}
      <View style={styles.container}>
        <AppText text={title} type="title_semibold" color="primary400" />
        {!removeThumbBtn && (
          <AppButton
            onPress={onThumbPress}
            text="Add fingerprint"
            RightContent={<FingerPrintIcon style={styles.rightIcon} />}
            containerStyle={styles.btn}
          />
        )}
      </View>
    </>
  );
};

const FormNestedFooter: FunctionComponent<FormNestedFooterProps> = ({
  removeAddBtn,
  removeDeleteBtn,
  onAddPress,
  onRemovePress,
  addBtnTitle,
  removeBtnTitle = 'Remove',
}) => {
  const {colors} = useColors();
  const styles = nestedFormStyles;
  return (
    <View style={styles.container}>
      {!removeAddBtn && (
        <AppButton
          onPress={onAddPress}
          text={addBtnTitle}
          buttonColor="white"
          borderColor="primary400"
          textColor="primary400"
          borderWidth={1}
          LeftContent={<PlusCircleIcon fill={colors.primary400} />}
          containerStyle={styles.btn}
        />
      )}
      {!removeDeleteBtn && (
        <AppButton
          text={removeBtnTitle}
          onPress={onRemovePress}
          buttonColor="white"
          textColor="danger300"
          borderColor="danger300"
          borderWidth={1}
          LeftContent={<BinIcon />}
          containerStyle={styles.btn}
        />
      )}
    </View>
  );
};

export {FormNestedHeader, FormNestedFooter};
