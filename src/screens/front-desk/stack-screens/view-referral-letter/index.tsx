import {ContinuousAltIcon, NoteIcon} from '@/assets/svg';
import AppScreen from '@/components/app-screen';
import {AppIconButton} from '@/components/buttons';
import {PdfDocumentDisplay} from '@/components/document-display';
import {AppHeader} from '@/components/headers';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import * as Contants from '@/constants/index';
import {useSheet} from '@/hooks/useSheet';
import {GeneralScreenProps} from '@/navigation/types';
import {SelectItem} from '@/types/selectItemsheet';
import React, {FunctionComponent, useState} from 'react';
import {FlatList, View} from 'react-native';
import {viewPaperRecordsStyles} from './styles';

const ViewReferralLetter: FunctionComponent<
  GeneralScreenProps<'FD_VIEW_REFERRAL_LETTER'>
> = ({route}) => {
  const [scrollType, setScrollType] = useState<SelectItem<boolean> | undefined>(
    Contants.paperRecordsPageScrollOptions[0].item,
  );

  const styles = viewPaperRecordsStyles;

  const {
    closeSheet: closeScrollSheet,
    openSheet: openScrollSheet,
    sheetRef: scrollSheetRef,
  } = useSheet();

  return (
    <AppScreen
      isScrollable={false}
      ScreenHeader={
        <>
          <AppHeader middleTitle="Referral letter" />
          <View style={styles.header}>
            <AppIconButton
              icon={true ? <NoteIcon /> : <ContinuousAltIcon />}
              height={32}
              onPress={openScrollSheet}
            />
          </View>
        </>
      }>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={scrollType?.data}
        pagingEnabled={scrollType?.data}
        data={[route.params.docId]}
        keyExtractor={item => item}
        renderItem={({item, index}) => (
          <PdfDocumentDisplay
            docId={item}
            docNum={index + 1}
            isHorizontalScroll={scrollType?.data}
          />
        )}
        style={styles.scrollContainer}
      />

      <AppSelectItemSheet
        sheetRef={scrollSheetRef}
        closeSheet={closeScrollSheet}
        title="Page scroll"
        selectOptions={Contants.paperRecordsPageScrollOptions}
        onSelectItem={({item}) => setScrollType(item)}
        selectedValue={scrollType?.value}
      />
    </AppScreen>
  );
};

export default ViewReferralLetter;
