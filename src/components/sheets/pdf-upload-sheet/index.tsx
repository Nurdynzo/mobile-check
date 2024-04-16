import React, {FunctionComponent} from 'react';
import {
  convertImageToPdf,
  generateRandomText,
  uploadImage,
  uploadPDF,
} from '@/utils/helpers';
import AppMenuSheet from '../app-menu-sheet';
import {AppImageUploadSheetProps} from './type';
import ReactNativeBlobUtil from 'react-native-blob-util';
import File from '@/types/file';
import {logThis} from '@/utils/helpers/logThis';

const PdfUploadSheet: FunctionComponent<AppImageUploadSheetProps> = ({
  closeSheet,
  sheetRef,
  onClose,
  onOpen,
  onUploadImage = () => null,
  onUploading = () => null,
}) => {
  const uploadFromCamera = async () => {
    onUploading(true);
    try {
      const res = await uploadImage({
        from: 'openCamera',
      });
      if (res) {
        const outputPath = `file://${
          ReactNativeBlobUtil.fs.dirs.DocumentDir
        }/${generateRandomText(10)}`;

        await convertImageToPdf({
          pages: [{imagePath: `file://${res.path}`}],
          outputPath,
        });

        const file: File = {
          uri: outputPath,
          type: 'application/pdf',
          name: `${generateRandomText(10)}`,
        };
        onUploadImage(file);
      }
    } catch (error) {
      logThis('Upload Camera Error!==', error);
    } finally {
      onUploading(false);
    }
  };
  const uploadFromStorage = async () => {
    onUploading(true);
    try {
      const res = await uploadPDF();
      if (res) {
        onUploadImage({
          name: res.name as string,
          type: res.type as string,
          uri: res.uri,
        });
      }
    } catch (error) {
      logThis('Upload from storage Error!==', error);
    } finally {
      onUploading(false);
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
          onPress: uploadFromStorage,
        },
      ]}
    />
  );
};

export default PdfUploadSheet;
