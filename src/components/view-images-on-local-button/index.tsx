import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';
import VoidFunction from '@/types/voidfunction';
import {imageFileSchema} from '@/utils/schema';
import React, {FunctionComponent} from 'react';
import {AppButton} from '../buttons';
import {AppRow, AppText} from '../common';
import {AllInputImageListViewSheet} from '../sheets';

/** @description this component let you select an image from the device and view it   */
const ViewImagesOnLocalButton: FunctionComponent<{
  images: imageFileSchema[];
  onDelete: (index: number, closeSheet: VoidFunction) => void;
}> = ({images = [], onDelete}) => {
  const {closeSheet, openSheet, sheetRef} = useSheet();

  return (
    <>
      <AppRow extraStyles={{marginVertical: wp(16)}}>
        <AppText
          type="body_2_semibold"
          text={`${images?.length} images uploaded in total`}
        />
        <AppButton
          text="View"
          height={32}
          isDisabled={!images.length}
          onPress={openSheet}
        />
      </AppRow>
      <AllInputImageListViewSheet
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        images={images}
        onDelete={onDelete}
      />
    </>
  );
};

export default ViewImagesOnLocalButton;
