import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {appContentSheetStyle} from './styles';
import {AppContentSheetProps} from './type';
import AppActivityIndicator from '@/components/app-activity-indicator';
import {useColors} from '@/hooks/useColors';
import AppSheet from '../app-sheet';
import {AppText} from '@/components/common';

/**
 * This component is used to render components in a bottom sheet
 *
 * @param sheetRef is set to null by default.
 * @param headerTitle is set to 'Header Title' by default.
 * @param isScrollable is set to true by default.
 * @param adjustToContentHeight is set to true by default.
 */
const AppContentSheet: FunctionComponent<AppContentSheetProps> = ({
  sheetRef = null,
  closeSheet = () => null,
  headerTitle = 'Header Title',
  HeaderRightContent,
  onClose = () => null,
  onOpen,
  children,
  removeHeader,
  containerStyle,
  contentHeight,
  isLoading,
  FooterComponent,
  isScrollable = true,
  adjustToContentHeight = true,
  AdditionalHeaderContent,
  closeOnOverlayTap,
  panGestureEnabled,
}) => {
  const {colors} = useColors();
  const styles = appContentSheetStyle({colors});

  return (
    <AppSheet
      sheetRef={sheetRef}
      handlePosition="inside"
      adjustToContentHeight={adjustToContentHeight}
      enableSlideToClose
      onClose={onClose}
      onOpen={onOpen}
      onPressButton={closeSheet}
      onBackPress={closeSheet}
      overlayStyle={styles.overlay}
      modalStyle={styles.modal}
      childrenStyle={{height: contentHeight}}
      scrollViewProps={{
        scrollEnabled: isScrollable,
        contentContainerStyle: [styles.container, containerStyle],
        showsVerticalScrollIndicator: false,
      }}
      FooterComponent={FooterComponent}
      panGestureEnabled={panGestureEnabled}
      closeOnOverlayTap={closeOnOverlayTap}
      HeaderComponent={
        <View style={styles.titleContainer}>
          {!removeHeader && (
            <>
              <View style={styles.headerContent}>
                <AppText
                  text={headerTitle}
                  type="title_semibold"
                  color="text300"
                />
                {HeaderRightContent}
              </View>
              {AdditionalHeaderContent}
            </>
          )}
        </View>
      }
      handleStyle={styles.handle}>
      {isLoading ? <AppActivityIndicator /> : children}
    </AppSheet>
  );
};

export default AppContentSheet;
