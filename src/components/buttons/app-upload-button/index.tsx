import React, {FunctionComponent} from 'react';
import {RefreshAltIcon} from '@/assets/svg';
import AppButton from '../app-button';
import {uploadButtonStyles} from './styles';
import {AppImageInputProps} from './type';
import AppActivityIndicator from '@/components/app-activity-indicator';

const AppUploadButton: FunctionComponent<AppImageInputProps> = ({
  onPress,
  label = 'Upload',
  isFocused,
  isUploaded,
  isUploading,
  disabled,
}) => {
  const styles = uploadButtonStyles;

  return (
    <>
      <AppButton
        onPress={onPress}
        borderColor={
          isFocused ? 'primary400' : isUploaded ? 'default300' : 'neutral100'
        }
        isDisabled={disabled || isUploading}
        borderWidth={2}
        borderRadius={10}
        buttonColor={isUploaded ? 'default300' : 'white'}
        textColor="primary400"
        textType="button_semibold"
        borderStyle="dashed"
        containerStyle={styles.btn}
        text={label}
        textStyle={styles.text}
        RightContent={
          isUploading ? (
            <AppActivityIndicator color="primary400" />
          ) : (
            isUploaded && <RefreshAltIcon />
          )
        }
      />
    </>
  );
};

export default AppUploadButton;
