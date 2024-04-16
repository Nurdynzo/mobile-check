import {AppButton} from '@/components/buttons';
import {AppRow, AppText, DisplayImage} from '@/components/common';
import {AppContentSheet} from '@/components/sheets';
import {useSheet} from '@/hooks/useSheet';
import {fs} from '@/resources/config';
import React from 'react';
import {View} from 'react-native';
import {investigationUploadedImageViewStyles} from './styles';

const InvestigationsUploadedImageView = ({
  images = [],
}: {
  images: Array<string>;
}) => {
  const {openSheet, sheetRef} = useSheet();
  const styles = investigationUploadedImageViewStyles();
  return (
    <>
      <AppButton
        isDisabled={false}
        onPress={openSheet}
        text="View"
        containerStyle={[styles.miniSaveBtn, styles.viewBtn]}
      />
      <AppContentSheet headerTitle="View uploaded images" sheetRef={sheetRef}>
        <View style={styles.mediaContainer}>
          <AppRow>
            {images.map((image, index) => (
              <MediaPreview key={index} uri={image} name={image} />
            ))}
          </AppRow>
        </View>
      </AppContentSheet>
    </>
  );
};

const MediaPreview = ({uri}: {uri: string; name: string}) => {
  const styles = investigationUploadedImageViewStyles();

  const imageName = () => {
    const splittedUri = uri.split('/');
    return splittedUri[splittedUri.length - 1];
  };

  return (
    <View style={styles.mediaPreview}>
      <DisplayImage size={140} borderRadius={5} uri={uri} />
      <View>
        <AppText text={imageName()} type={'body_1_semibold'} />
        <AppText
          text={'Uploaded by Dr Adepetun'}
          type={'body_1_semibold'}
          color="text300"
          style={{fontSize: fs(8)}} //TODO(ZUCCI): Ask Temitope for the actual font type.
        />
      </View>
    </View>
  );
};

export default InvestigationsUploadedImageView;
