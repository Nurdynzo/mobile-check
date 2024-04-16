import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ForwardIcon, HospitalIcon} from '@/assets/svg';
import {AppLink} from '@/components/buttons';
import {AuthHeader} from '@/components/headers';
import {AppFormContainer, AppText} from '@/components/common';
import {welcomeBackStyles} from './styles';
import {cardProps} from './type';
import AppScreen from '@/components/app-screen';
import {wp} from '@/resources/config';

const Card = ({
  desc = 'Doctor, Laboratory Scientist, Super Admin',
  title = 'Bluemoon Specialist Hospital, Ikeja',
  leftIcon = <HospitalIcon />,
  rightIcon = <ForwardIcon />,
  hasBorder = true,
  titleAlign = 'left',
  descAlign = 'left',
  subCardTextFull = false,
}: cardProps) => {
  const styles = welcomeBackStyles({subCardTextFull});

  return (
    <>
      <TouchableOpacity activeOpacity={0.6} style={styles.card}>
        <View style={styles.left}>{leftIcon}</View>
        <View style={styles.middle}>
          <AppText color={'text400'} text={title} align={titleAlign} />
          <View style={styles.subCardText}>
            <AppText color={'text300'} text={desc} align={descAlign} />
          </View>
        </View>
        <View style={styles.right}>{rightIcon}</View>
      </TouchableOpacity>
      {hasBorder && <View style={styles.line} />}
    </>
  );
};

const WelcomeBack = () => {
  const styles = welcomeBackStyles({});

  return (
    <AppScreen
      isScrollable={false}
      contentContainerStyle={{marginTop: wp(15.67)}}>
      <AuthHeader
        title="Welcome Back"
        desc="Choose a facility below to get back to working with your team."
      />
      <View style={styles.cardContainer}>
        <Card
          subCardTextFull
          leftIcon={<></>}
          rightIcon={<></>}
          titleAlign="center"
          descAlign="center"
          title="Facilities for"
          desc="someone@xyzmedicals.com"
        />
        <Card />
        <Card hasBorder={false} />
      </View>
      <AppFormContainer extraStyles={{gap: wp(16)}}>
        <AppText
          text="Not this email address?"
          align="center"
          color={'text300'}
        />
        <AppLink
          text="Sign in with another email"
          onPress={() => null}
          align="center"
        />
      </AppFormContainer>
    </AppScreen>
  );
};

export default WelcomeBack;
