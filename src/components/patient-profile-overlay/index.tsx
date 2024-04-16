import React from 'react';
import {CircularFloatingButton} from '../buttons';
import {AppRow, AppText} from '../common';
import VoidFunction from '@/types/voidfunction';
import {EncounterTimelineIcon, HorizontalMoreIcon} from '@/assets/svg';
import {wp} from '@/resources/config';
import Overlay from '../overlay';
import useOverlay from '@/hooks/use-overlay';
import {patientProfileOverlayStyles} from './styles';
import {ProfileNavCardProps} from '../patient-profile-screen/types';
import {useNavigation} from '@react-navigation/native';
import {FrontDeskNavProp, GeneralNavProp} from '@/navigation/types';
import {
  frontdeskPatientProfileData,
  generalPatientProfileData,
} from '@/constants/patientProfileData';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';

/**
 * This Patient profile component is used by the doctor's and nurse's all input screen
 */
export const GeneralPatientProfileMenuModal = () => {
  const navigation = useNavigation<GeneralNavProp>();
  const {id: patientId} = useAppSelector(selectPatient);
  return (
    <>
      <EncounterTimelineFAB />
      <PatientProfileModalMenu
        items={generalPatientProfileData}
        handleRoute={routeName =>
          // TODO(Philip): replace this when actual implementation starts
          navigation.navigate(routeName, {patientId, encounterId: 0})
        }
      />
    </>
  );
};

/**
 * This Patient profile component is used in front desk
 */
export const FrontDeskPatientProfileMenuModal = () => {
  const navigation = useNavigation<FrontDeskNavProp>();
  return (
    <PatientProfileModalMenu
      items={frontdeskPatientProfileData}
      handleRoute={routeName => navigation.navigate(routeName)}
    />
  );
};

const EncounterTimelineFAB = () => {
  return (
    <>
      <CircularFloatingButton
        onPress={() => {}}
        bottom={152}
        right={23.92}
        icon={<EncounterTimelineIcon height={wp(16)} width={wp(16)} />}
      />
    </>
  );
};

const PatientProfileModalMenu = <
  R extends keyof ReactNavigation.RootParamList,
>({
  items,
  handleRoute,
}: {
  items: ProfileNavCardProps<R>[];
  handleRoute: (routeName: R) => void;
}) => {
  const {isOpen, onOpen, onClose} = useOverlay();
  const styles = patientProfileOverlayStyles();
  return (
    <>
      <PatientProfileMenuFAB onPress={onOpen} />
      <Overlay
        show={isOpen}
        onOverlayTap={onClose}
        backgroundColor={'overlayVariant2'}
        shouldUserOverlayContentStyles={false}
        containerStyles={styles.overlay}>
        {items.map((item, index) => {
          return (
            <MenuItem
              key={index}
              item={item}
              onClose={() => {
                handleRoute(item.routeName);
                onClose();
              }}
            />
          );
        })}
      </Overlay>
    </>
  );
};

const PatientProfileMenuFAB = ({onPress}: {onPress: VoidFunction}) => {
  return (
    <CircularFloatingButton
      onPress={onPress}
      right={23.92}
      bottom={88}
      icon={<HorizontalMoreIcon height={wp(16)} width={wp(16)} />}
    />
  );
};

const MenuItem = <R extends keyof ReactNavigation.RootParamList>({
  item,
  onClose,
}: {
  item: ProfileNavCardProps<R>;
  onClose: VoidFunction;
}) => {
  return (
    <AppRow justifyContent={'flex-end'} alignItems={'center'}>
      <AppText text={item.title} type={'body_1_semibold'} color={'white'} />
      <CircularFloatingButton
        position={'relative'}
        icon={<item.Icon height={wp(16)} width={wp(16)} />}
        onPress={onClose}
      />
    </AppRow>
  );
};
