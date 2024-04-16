import {ArrowRightIcon} from '@/assets/svg';
import AppScreen from '@/components/app-screen';
import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import {AppText} from '@/components/common';
import {AppHeader} from '@/components/headers';
import {useColors} from '@/hooks/useColors';
import React from 'react';
import {Pressable, View} from 'react-native';
import {patientProfileStyles, profileNavCardStyles} from './styles';
import {PatientProfileScreenProps} from './types';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import {SvgProps} from 'react-native-svg';
import {wp} from '@/resources/config';

const PatientProfileScreen = <R extends keyof ReactNavigation.RootParamList>({
  handleRoute,
  profileData = [],
}: PatientProfileScreenProps<R>) => {
  const styles = patientProfileStyles;

  const patient = useAppSelector(selectPatient);

  return (
    <AppScreen
      paddingHorizontal={24}
      ScreenHeader={<AppHeader middleTitle="Patient profile" />}>
      <PatientInfoCard
        fullName={patient.fullName}
        code={patient.code}
        dateOfBirth={patient.dateOfBirth}
        gender={patient.gender}
      />
      <View style={styles.navsList}>
        {profileData.map(item => (
          <ProfileNavCard
            key={item.title}
            title={item.title}
            Icon={item.Icon}
            onPress={() => handleRoute(item?.routeName)}
          />
        ))}
      </View>
    </AppScreen>
  );
};

export default PatientProfileScreen;

const ProfileNavCard = ({
  Icon,
  title,
  onPress,
}: {
  title: string;
  Icon: React.FC<SvgProps>;
  onPress?: () => void;
}) => {
  const {colors} = useColors();
  const styles = profileNavCardStyles({colors});
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <Icon height={wp(24)} width={wp(24)} />
        </View>
        <AppText text={title} color="text400" type="body_1_semibold" />
      </View>
      <ArrowRightIcon />
    </Pressable>
  );
};
