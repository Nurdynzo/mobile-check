import AppScreen from '@/components/app-screen';
import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import {PdfDocumentDisplay} from '@/components/document-display';
import {AppHeader} from '@/components/headers';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import * as Contants from '@/constants/index';
import {useSheet} from '@/hooks/useSheet';
import {GeneralScreenProps} from '@/navigation/types';
import {useApiServicesAppPatientsGetpatientforeditGetQuery} from '@/state/services/patientApi';
import {useApiServicesAppPatientdocumentuploadGetscanneddocumentsbypatientcodeGetQuery} from '@/state/services/patientDocumentUploadApi';
import {SelectItem} from '@/types/selectItemsheet';
import React, {FunctionComponent, useState} from 'react';
import {FlatList, View} from 'react-native';
import {viewPaperRecordsStyles} from './styles';
import ViewPaperRecordsHeader from './view-paper-record-header';

const PaperRecords: FunctionComponent<
  GeneralScreenProps<'VIEW_PARER_RECORDS_TAB'>
> = ({route, navigation}) => {
  const {data: patientData} =
    useApiServicesAppPatientsGetpatientforeditGetQuery({
      id: route.params?.patient.id,
    });

  const [scrollType, setScrollType] = useState<SelectItem<boolean> | undefined>(
    Contants.paperRecordsPageScrollOptions[0].item,
  );

  const [sortBy, setSortBy] = useState('Earliest');
  const styles = viewPaperRecordsStyles;

  const {data: paperRecordsdata} =
    useApiServicesAppPatientdocumentuploadGetscanneddocumentsbypatientcodeGetQuery(
      {patientCode: route.params?.patient?.code},
    );

  const {
    closeSheet: closeSortBySheet,
    openSheet: openSortBySheet,
    sheetRef: sortBySheetRef,
  } = useSheet();
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
          <AppHeader
            middleTitle="Ward round & Clinic notes"
            onPressBack={() => navigation.goBack()}
          />
          <View style={styles.header}>
            <PatientInfoCard
              fullName={`${patientData?.firstName} ${patientData?.lastName}`}
              dateOfBirth={patientData?.dateOfBirth}
              code={patientData?.patientCode}
              gender={patientData?.genderType}
            />
            <ViewPaperRecordsHeader
              onPressHorizontalScroll={openScrollSheet}
              disbaleCalendarButton={route.params?.disableRegularTab}
              isHorizontalScroll={scrollType?.data}
              sortByText={sortBy}
              onSortPress={openSortBySheet}
            />
          </View>
        </>
      }>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={scrollType?.data}
        pagingEnabled={scrollType?.data}
        data={paperRecordsdata}
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
        sheetRef={sortBySheetRef}
        closeSheet={closeSortBySheet}
        title="Sort by"
        selectOptions={Contants.paperRecordsSortByOptions}
        onSelectItem={({item}) => setSortBy(item.value)}
        selectedValue={sortBy}
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

export default PaperRecords;
