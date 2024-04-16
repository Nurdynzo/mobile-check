import {CameraIcon} from '@/assets/svg';
import {AppIconButton} from '@/components/buttons';
import {AppImageUploadSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';
import {imageFileSchema} from '@/utils/schema';
import React, {FunctionComponent} from 'react';

const AllInputImageUploadInput: FunctionComponent<{
  onChangeImage?: (image?: imageFileSchema) => void;
}> = ({onChangeImage = () => null}) => {
  const {colors} = useColors();

  const {
    closeSheet: closeUploadSheet,
    openSheet: openUploadSheet,
    sheetRef: uploadSheetRef,
  } = useSheet();

  return (
    <>
      <AppIconButton
        buttonColor="text50"
        borderColor="text50"
        icon={<CameraIcon fill={colors.text400} />}
        containerStyle={{marginBottom: wp(16)}}
        onPress={openUploadSheet}
      />

      <AppImageUploadSheet
        sheetRef={uploadSheetRef}
        closeSheet={closeUploadSheet}
        onUplaodImage={img => {
          if (img?.path) {
            onChangeImage({
              path: img?.path,
              type: img?.mime,
              name: img?.filename,
            });
          }
        }}
      />
    </>
  );
};

export default AllInputImageUploadInput;
