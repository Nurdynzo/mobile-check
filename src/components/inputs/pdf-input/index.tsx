import React, {FunctionComponent, useState} from 'react';
import {AppImageInputProps} from './type';
import {AppUploadButton} from '@/components/buttons';
import {useSheet} from '@/hooks/useSheet';
import {getFileName} from '@/utils/helpers';
import {PdfUploadSheet} from '@/components/sheets';

const PdfInput: FunctionComponent<AppImageInputProps> = ({
  imageSrc,
  onChangeImage,
  placeholder = 'Capture or upload',
}) => {
  const {closeSheet, openSheet, sheetRef} = useSheet();
  const [isFocused, setIsFocused] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  return (
    <>
      <AppUploadButton
        onPress={openSheet}
        isFocused={isFocused}
        label={imageSrc ? getFileName(imageSrc) : placeholder}
        isUploaded={!!imageSrc}
        isUploading={isUploading}
      />
      <PdfUploadSheet
        sheetRef={sheetRef}
        onOpen={() => setIsFocused(true)}
        onClose={() => setIsFocused(false)}
        closeSheet={closeSheet}
        onUploadImage={onChangeImage}
        onUploading={setIsUploading}
      />
    </>
  );
};

export default PdfInput;
