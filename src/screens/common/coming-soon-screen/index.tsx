import AppScreen from '@/components/app-screen';
import {AppAlert} from '@/components/common';
import {WelcomeHeader} from '@/components/headers';
import React from 'react';
import {View} from 'react-native';

import {useColors} from '@/hooks/useColors';
import {comingSoonStyles} from './styles';
import AnimatedBubble from '@/components/animated-bubble';
import {ComingSoonExclamation} from '@/assets/svg';
import AlertBubbleIconWrapper from '@/components/alert-bubble-icon-wrapper';
import {wp} from '@/resources/config';

const ComingSoonScreen = () => {
  const {colors} = useColors();

  const styles = comingSoonStyles();

  return (
    <AppScreen
      isScrollable={false}
      paddingHorizontal={24}
      ScreenHeader={
        <View style={{paddingHorizontal: wp(24)}}>
          <WelcomeHeader />
        </View>
      }>
      <View style={styles.majorAxisAlignment}>
        <AppAlert
          showButton={false}
          title={'Coming soon'}
          description={
            'Stay tuned! Something exciting is just around the corner'
          }
          icon={
            <AnimatedBubble
              bgColor="alert25"
              size={90}
              Icon={
                <AlertBubbleIconWrapper
                  colorKey="alert100"
                  icon={
                    <ComingSoonExclamation
                      fill={colors.alert100}
                      width={36}
                      height={36}
                    />
                  }
                />
              }
            />
          }
        />
      </View>
    </AppScreen>
  );
};

export default ComingSoonScreen;
