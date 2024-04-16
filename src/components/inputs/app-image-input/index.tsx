import React, {FunctionComponent, useState} from 'react';
import {useSheet} from '../../../hooks/useSheet';
import {getFileName} from '../../../utils/helpers';
import AppUploadButton from '../../buttons/app-upload-button';
import {AppImageUploadSheet} from '../../sheets';
import {AppImageInputProps} from './type';

const AppImageInput: FunctionComponent<AppImageInputProps> = ({
  imageSrc,
  onChangeImage,
  placeholder = 'Capture or upload',
}) => {
  const {closeSheet, openSheet, sheetRef} = useSheet();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <AppUploadButton
        onPress={openSheet}
        isFocused={isFocused}
        label={imageSrc ? getFileName(imageSrc) : placeholder}
        isUploaded={!!imageSrc}
      />
      <AppImageUploadSheet
        sheetRef={sheetRef}
        onOpen={() => setIsFocused(true)}
        onClose={() => setIsFocused(false)}
        closeSheet={closeSheet}
        onUplaodImage={onChangeImage}
      />
    </>
  );
};

export default AppImageInput;
