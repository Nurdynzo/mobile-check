import AppLogo from '@/components/app-logo';
import {AppHeader} from '@/components/headers';
import React from 'react';
import {View} from 'react-native';
import forgotPasswordScreensHeaderStyles from './styles';

const ForgotPasswordScreensHeader = () => {
  const styles = forgotPasswordScreensHeaderStyles;
  return (
    <View style={styles.container}>
      <AppLogo marginBottom={0} />
      <AppHeader paddingVertical={0} paddingHorizontal={0} paddingBottom={0} />
    </View>
  );
};

export default ForgotPasswordScreensHeader;
