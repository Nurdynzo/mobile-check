import React from 'react';
import {View} from 'react-native';
import {LogoIcon} from '../../../assets/svg';
import AppText from '../../common/app-text';
import {authHeaderStyles} from './styles';
import {authHeaderProp} from './type';

const AuthHeader = ({
  desc = 'Please enter your email address and password',
  title = 'Welcome',
  justLogo = false,
}: authHeaderProp) => {
  const style = authHeaderStyles();

  return (
    <View style={style.container}>
      <LogoIcon />
      {!justLogo && (
        <>
          <AppText color={'text400'} text={title} />
          <AppText color={'text300'} text={desc} align="center" />
        </>
      )}
    </View>
  );
};

export default AuthHeader;
