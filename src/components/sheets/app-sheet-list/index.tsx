import {AppText} from '@/components/common';
import React from 'react';
import {View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {appSheetListStyle} from './styles';
import {AppSheetListProps} from './type';
import {useColors} from '@/hooks/useColors';

/**
 *
 * @description This is a bottom sheet component that renders it's content using flatlist
 * @param adjustToContentHeight defaults to true
 */
const AppSheetList = <ItemT,>({
  sheetRef = null,
  closeSheet = () => null,
  headerTitle,
  HeaderRightContent,
  onClose = () => null,
  onOpen,
  removeHeader,
  contentHeight,
  panGestureEnabled,
  closeOnOverlayTap,
  FooterComponent,
  adjustToContentHeight = true,
  AdditionalHeaderContent,
  modalHeight,
  ...flatlistProps
}: AppSheetListProps<ItemT>) => {
  const {colors} = useColors();

  const styles = appSheetListStyle({colors});

  return (
    <Portal>
      <Modalize
        panGestureEnabled={panGestureEnabled}
        closeOnOverlayTap={closeOnOverlayTap}
        overlayStyle={styles.overlay}
        keyboardAvoidingOffset={30}
        ref={sheetRef}
        onClose={onClose}
        handlePosition="inside"
        handleStyle={styles.handle}
        onBackButtonPress={() => {
          closeSheet();
          return true;
        }}
        onOpen={onOpen}
        childrenStyle={{height: contentHeight}}
        modalStyle={styles.modal}
        {...(modalHeight ? {modalHeight} : {adjustToContentHeight})}
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
        FooterComponent={
          FooterComponent ? FooterComponent : <View style={styles.footer} />
        }
        flatListProps={flatlistProps}
      />
    </Portal>
  );
};

export default AppSheetList;
