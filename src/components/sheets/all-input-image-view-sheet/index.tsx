import {ArrowLeftIcon, BinIcon} from '@/assets/svg';
import AppActivityIndicator from '@/components/app-activity-indicator';
import AppZoomableView from '@/components/app-zoomable-view';
import {AppRow, AppText, DisplayImage} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';
import {BaseSheetProps} from '@/types/sheet';
import VoidFunction from '@/types/voidfunction';
import {formatListData} from '@/utils/helpers';
import {imageFileSchema} from '@/utils/schema';
import React, {FunctionComponent} from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppContentSheet from '../app-content-sheet';
import AppSheetList from '../app-sheet-list';
import {imageListViewSheetStyles, imageViewStyles} from './styles';

const AllInputImageListViewSheet: FunctionComponent<
  {
    images: ((imageFileSchema & {id?: number}) | undefined)[];
    onDelete?: (index: number, closeSheet: VoidFunction) => void;
    shouldCache?: boolean;
    isImageDeleting?: boolean | undefined;
    isAllImagesLoading?: boolean | undefined;
  } & BaseSheetProps
> = ({
  sheetRef,
  closeSheet = () => null,
  images,
  onDelete = () => null,
  shouldCache,
  isImageDeleting,
  isAllImagesLoading,
}) => {
  const styles = imageListViewSheetStyles;

  return (
    <AppSheetList
      headerTitle="View uploaded images"
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      data={formatListData([...images], 2)}
      keyExtractor={(_, index) => index?.toString()}
      contentContainerStyle={styles.contentContainer}
      columnWrapperStyle={{gap: wp(8)}}
      // eslint-disable-next-line react/no-unstable-nested-components
      ListEmptyComponent={() =>
        isAllImagesLoading ? (
          <AppActivityIndicator />
        ) : (
          <AppText
            text={'No image available'}
            color="text400"
            type="status_tag_semibold"
            align="center"
          />
        )
      }
      numColumns={2}
      renderItem={({item, index}) =>
        item && 'empty' in item ? (
          <View style={styles.emptyImage} />
        ) : item && 'path' in item ? (
          <ImageView
            image={item}
            uploadedBy="me"
            shouldCache={shouldCache}
            isLoading={isImageDeleting}
            onDelete={closeImageSheet => {
              onDelete(item?.id ?? index, () => {
                closeImageSheet();
                if (images.length === 1) {
                  closeSheet();
                }
              });
            }}
          />
        ) : (
          <></>
        )
      }
    />
  );
};

export default AllInputImageListViewSheet;

const ImageView: FunctionComponent<{
  image: imageFileSchema;
  onDelete?: (closeSheet: VoidFunction) => void;
  uploadedBy: string;
  shouldCache?: boolean;
  isLoading?: boolean;
}> = ({image, onDelete = () => null, uploadedBy, shouldCache, isLoading}) => {
  const {colors} = useColors();
  const styles = imageViewStyles({colors});
  const {closeSheet, openSheet, sheetRef} = useSheet();

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={openSheet}>
        <DisplayImage
          isCircular={false}
          borderRadius={9.5}
          size={140}
          uri={image?.path}
          shouldCache={shouldCache}
          style={styles.image}
        />
        <AppText
          text={image?.name as string}
          color="text400"
          type="status_tag_semibold"
          style={styles.imageName}
        />
        <AppText
          text={`Uploaded by ${uploadedBy}`}
          color="text400"
          type="nav_bar_menu_semibold"
        />
      </TouchableOpacity>
      <AppContentSheet
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        removeHeader
        panGestureEnabled={!isLoading}
        closeOnOverlayTap={!isLoading}
        containerStyle={{paddingHorizontal: wp(24), gap: wp(16)}}>
        <>
          <AppRow>
            <TouchableOpacity onPress={closeSheet}>
              <ArrowLeftIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onDelete(closeSheet);
              }}>
              <BinIcon />
            </TouchableOpacity>
          </AppRow>
          <View style={styles.imageConatainer}>
            <AppZoomableView
              maxZoom={2}
              minZoom={1}
              zoomStep={0.5}
              initialZoom={1}
              bindToBorders={true}
              captureEvent={true}>
              <DisplayImage
                isCircular={false}
                size={550}
                shouldCache={false}
                uri={image?.path}
                style={styles.image}
              />
            </AppZoomableView>
            {isLoading && (
              <View style={styles.overLayContainer}>
                <AppActivityIndicator color="white" />
              </View>
            )}
          </View>
        </>
      </AppContentSheet>
    </>
  );
};
