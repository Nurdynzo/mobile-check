import React, {FunctionComponent} from 'react';
import {uploadImage} from '../../../utils/helpers';
import AppMenuSheet from '../app-menu-sheet';
import {AppImageUploadSheetProps} from './type';

const AppImageUploadSheet: FunctionComponent<AppImageUploadSheetProps> = ({
  closeSheet,
  sheetRef,
  onClose,
  onOpen,
  onUplaodImage = () => null,
}) => {
  const uploadFromCamera = async () => {
    const res = await uploadImage({from: 'openCamera'});
    if (res) {
      onUplaodImage(res);
    }
  };
  const uploadFromGallery = async () => {
    const res = await uploadImage({from: 'openPicker'});
    if (res) {
      onUplaodImage(res);
    }
  };

  return (
    <AppMenuSheet
      title="Input file"
      sheetRef={sheetRef}
      onClose={onClose}
      onOpen={onOpen}
      closeSheet={closeSheet}
      menuOptions={[
        {
          value: 'Capture using camera',
          onPress: uploadFromCamera,
        },
        {
          value: 'Upload from device',
          onPress: uploadFromGallery,
        },
      ]}
    />
  );
};

export default AppImageUploadSheet;
