import React from 'react';
import {View} from 'react-native';
import PatientInfoCard from '../Patients/patient-info-card';
import {nextOfKinCardDetailsStyles} from './styles';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import {AppAlert, AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {
  Relationship,
  useApiServicesAppPatientrelationsGetallnextofkinGetQuery,
} from '@/state/services/patientApi';
import {NOT_AVAILABLE} from '@/utils/constants';
import {FlashList} from '@shopify/flash-list';
import {UsersIcon} from '@/assets/svg';
import AnimatedBubble from '@/components/animated-bubble';
import AlertBubbleIconWrapper from '@/components/alert-bubble-icon-wrapper';
import {wp} from '@/resources/config';
import AppActivityIndicator from '@/components/app-activity-indicator';

const NextOfKinDetailsView = () => {
  const styles = nextOfKinCardDetailsStyles({});
  const patient = useAppSelector(selectPatient);

  return (
    <View style={styles.container}>
      <PatientInfoCard
        fullName={patient.fullName}
        code={patient.code}
        dateOfBirth={patient.dateOfBirth}
        gender={patient.gender}
        avatar={patient.pic}
      />
      <NextOfKinListView />
    </View>
  );
};

export default NextOfKinDetailsView;

const NextOfKinListView = () => {
  const contentHeight = wp(331);
  const {colors} = useColors();
  const styles = nextOfKinCardDetailsStyles({});
  const {id: patientId} = useAppSelector(selectPatient);
  const {currentData, isFetching} =
    useApiServicesAppPatientrelationsGetallnextofkinGetQuery({
      patientId,
    });

  if (isFetching) {
    return (
      <View style={styles.progressIndicator}>
        <AppActivityIndicator size={36} />
      </View>
    );
  }

  if (currentData?.length === 0 && !isFetching) {
    return (
      <AppAlert
        title="Next of kin"
        description="No next of kin has been added"
        showButton={false}
        containerStyle={{
          marginTop: wp(42),
        }}
        icon={
          <AnimatedBubble
            bgColor="primary25"
            size={90}
            Icon={
              <AlertBubbleIconWrapper
                icon={<UsersIcon fill={colors.white} width={36} height={36} />}
              />
            }
          />
        }
      />
    );
  }

  return (
    <View style={{height: contentHeight}}>
      <FlashList
        estimatedItemSize={contentHeight}
        data={currentData}
        ItemSeparatorComponent={CardSeparator}
        renderItem={({index, item}) => (
          <Card
            key={index}
            fullName={item.fullName}
            phoneNumber={item.phoneNumber}
            relationShip={item.relationship}
          />
        )}
      />
    </View>
  );
};

const Card = ({
  fullName,
  phoneNumber,
  relationShip,
}: {
  fullName?: string | null;
  phoneNumber?: string | null;
  relationShip?: Relationship;
}) => {
  const {colors} = useColors();
  const styles = nextOfKinCardDetailsStyles({colors});
  return (
    <View style={styles.card}>
      <LabelAndValueText flex={0} label={'Next of kin'} value={fullName} />
      <View style={styles.cardSubView}>
        <LabelAndValueText label={'Relationship'} value={relationShip} />
        <LabelAndValueText label={'Phone number'} value={phoneNumber} />
      </View>
    </View>
  );
};

const LabelAndValueText = ({
  label,
  value,
  flex = 1,
}: {
  label: string;
  value?: string | null;
  flex?: number;
}) => {
  return (
    <View style={{flex}}>
      <AppText
        text={label}
        type={'label_semibold'}
        numberOfLines={1}
        color={'text300'}
      />
      <AppText
        text={value || NOT_AVAILABLE}
        type={'body_2_semibold'}
        numberOfLines={1}
        color={'text400'}
      />
    </View>
  );
};

const CardSeparator = () => {
  const contentSeparatorHeight = wp(16);
  return <View style={{height: contentSeparatorHeight}} />;
};
