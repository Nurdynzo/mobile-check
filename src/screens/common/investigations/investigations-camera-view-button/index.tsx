import {CameraIcon} from '@/assets/svg';
import {AppIconButton} from '@/components/buttons';
import {AppImageUploadSheet} from '@/components/sheets';
import {useSheet} from '@/hooks/useSheet';
import React from 'react';
import {Image} from 'react-native-image-crop-picker';

const InvestigationsCameraViewButton = ({
  getSelectedImage = image => image,
}: {
  getSelectedImage: ((image?: Image | undefined) => void) | undefined;
}) => {
  const {openSheet, sheetRef, closeSheet} = useSheet();
  return (
    <>
      <AppIconButton
        width={35}
        height={35}
        buttonColor={'text50'}
        borderColor="transparent"
        icon={<CameraIcon />}
        onPress={openSheet}
      />

      <AppImageUploadSheet
        closeSheet={() => closeSheet()}
        sheetRef={sheetRef}
        onUplaodImage={image => getSelectedImage(image)}
      />
    </>
  );
};

export default InvestigationsCameraViewButton;
