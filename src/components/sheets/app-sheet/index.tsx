import React, {FunctionComponent} from 'react';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {useColors} from '@/hooks/useColors';
import {appSheetStyles} from './styles';
import {AppSheetTypes} from './type';
import {wp} from '@/resources/config';

/**
 *
 * @param enableSlideToClose defaults to true
 * @param snapHeight defaults to 0
 * @param contentHeight used to set the height of the sheet's content
 */
const AppSheet: FunctionComponent<AppSheetTypes> = (_props: AppSheetTypes) => {
  const {
    enableSlideToClose = true,
    disableBackDrop,
    sheetRef,
    onBackPress,
    modalStyle,
    snapHeight = 0,
    children,
    portal = true,
    topContent,
    contentHeight,
    ...otherProps
  } = _props;
  const Container = portal ? Portal : React.Fragment;
  const {colors} = useColors();
  const _contentHeight = contentHeight ? wp(contentHeight) : undefined;
  return (
    <Container>
      <Modalize
        childrenStyle={{height: _contentHeight}}
        panGestureEnabled={enableSlideToClose}
        closeOnOverlayTap={disableBackDrop}
        overlayStyle={appSheetStyles({colors}).overlay}
        keyboardAvoidingOffset={30}
        alwaysOpen={snapHeight}
        scrollViewProps={{
          keyboardShouldPersistTaps: 'always',
          showsVerticalScrollIndicator: false,
        }}
        ref={sheetRef}
        onBackButtonPress={() => {
          if (onBackPress) {
            onBackPress();
          }
          return true;
        }}
        modalStyle={modalStyle}
        {...otherProps}>
        {topContent}
        {children}
      </Modalize>
    </Container>
  );
};

export default AppSheet;
