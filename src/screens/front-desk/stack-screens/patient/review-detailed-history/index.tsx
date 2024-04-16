import AppScreen from '@/components/app-screen';
import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import {AppHeader} from '@/components/headers';
import {ScrollableTab} from '@/components/tabs';
import {useBackHandler} from '@/hooks/useBackHandler';
import {useColors} from '@/hooks/useColors';
import {GeneralScreenProps} from '@/navigation/types';
import {useApiServicesAppPatientsGetpatientforeditGetQuery} from '@/state/services/patientApi';
import React, {FunctionComponent, useRef, useState} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  FamilyHistory,
  FamilyHistoryEdit,
} from './patient-detailed-history/family-history';
import {
  InsuranceHistory,
  InsuranceHistoryEdit,
} from './patient-detailed-history/insurance-history';
import {
  OccupationHistory,
  OccupationHistoryEdit,
} from './patient-detailed-history/occupation-history';
import {
  PatientInfo,
  PatientInfoEdit,
} from './patient-detailed-history/patient-info';
import {patientDetailedHistoryStyles} from './styles';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import {EMPTY_STRING} from '@/utils/constants';

const tabs = [
  'Patient Info',
  'Family History',
  'Occupational History',
  'Insurance History',
];

const ReviewDetailedHistory: FunctionComponent<
  GeneralScreenProps<'FD_REVIEW_DETAILED_HISTORY'>
> = ({navigation}) => {
  const {colors} = useColors();

  const [currentTab, setCurrentTab] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<number | null>(null);

  const styles = patientDetailedHistoryStyles({
    colors,
    showScrollableTab: editForm === null,
  });
  const scrollRef = useRef<ScrollView | null>(null);

  const {
    id: patientId,
    code,
    dateOfBirth,
    fullName,
    gender,
    pic,
  } = useAppSelector(selectPatient);

  const {data: patientData} =
    useApiServicesAppPatientsGetpatientforeditGetQuery({
      id: patientId,
    });

  const handleCloseEdit = () => {
    setEditForm(null);
  };

  useBackHandler(() => {
    editForm !== null ? handleCloseEdit() : navigation.goBack();

    return true;
  }, [editForm]);

  return (
    <AppScreen
      isScrollable={editForm === null}
      scrollRef={scrollRef}
      paddingHorizontal={24}
      contentContainerStyle={styles.screenContainer}
      onContentSizeChange={() =>
        scrollRef?.current?.scrollTo({y: 0, animated: true})
      }
      ScreenHeader={
        <>
          <AppHeader
            middleTitle={'Review detailed history'}
            onPressBack={editForm !== null ? handleCloseEdit : undefined}
          />

          <PatientInfoCard
            fullName={fullName}
            dateOfBirth={dateOfBirth}
            code={code}
            gender={gender}
            avatar={pic}
            containerStyle={styles.patientInfo}
          />

          <ScrollableTab
            tabs={tabs}
            currentIndex={currentTab}
            activeColor={{background: 'white', border: 'primary400'}}
            unActiveColor={{background: 'default300'}}
            onPress={index =>
              setCurrentTab(currentTab !== index ? index : null)
            }
            style={styles.scrollableTab}
          />
        </>
      }>
      <View style={styles.detailedHistoryContainer}>
        {editForm === null ? (
          <>
            {(currentTab === null || currentTab === 0) && (
              <PatientInfo
                patientData={patientData}
                onPressEdit={() => setEditForm(0)}
              />
            )}
            {(currentTab === null || currentTab === 1) && (
              <FamilyHistory
                patientId={patientData?.id as number}
                noOfSpouses={patientData?.numberOfSpouses}
                nuclearFamilySize={patientData?.nuclearFamilySize}
                positionInFamily={patientData?.positionInFamily ?? EMPTY_STRING}
                onPressEdit={() => setEditForm(1)}
              />
            )}
            {(currentTab === null || currentTab === 2) && (
              <OccupationHistory
                patientId={patientData?.id as number}
                onPressEdit={() => setEditForm(2)}
              />
            )}
            {(currentTab === null || currentTab === 3) && (
              <InsuranceHistory
                patientData={patientData}
                onPressEdit={() => setEditForm(3)}
              />
            )}
          </>
        ) : (
          <>
            {editForm === 0 && (
              <PatientInfoEdit
                patientData={patientData}
                onClose={handleCloseEdit}
              />
            )}
            {editForm === 1 && (
              <FamilyHistoryEdit
                patientId={patientData?.id as number}
                onClose={handleCloseEdit}
              />
            )}
            {editForm === 2 && (
              <OccupationHistoryEdit
                patientId={patientData?.id as number}
                onClose={handleCloseEdit}
              />
            )}
            {editForm === 3 && (
              <InsuranceHistoryEdit
                patientData={patientData}
                onClose={handleCloseEdit}
              />
            )}
          </>
        )}
      </View>
    </AppScreen>
  );
};

export default ReviewDetailedHistory;
