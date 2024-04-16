import React from 'react';
import {View} from 'react-native';
import {HiIcon, PIcon} from '@/assets/svg';
import {AppText} from '../../common';
import {welcomeHeaderStyles} from './styles';
import {getFormattedDate} from '@/utils/helpers/convertDateTime';
import {useSelector} from 'react-redux';
import {RootState} from '@/state/store';
import {NOT_AVAILABLE} from '@/utils/constants';

const WelcomeHeader = () => {
  const styles = welcomeHeaderStyles();
  const {user} = useSelector((state: RootState) => state.auth);

  return (
    <View style={styles.container}>
      <PIcon />
      <View style={styles.contentArea}>
        <View style={styles.name}>
          <View style={styles.welcomeContent}>
            <AppText
              type={'body_1_semibold'}
              color={'text400'}
              text={`Hi, ${user?.title ?? NOT_AVAILABLE} ${
                user?.surname ?? NOT_AVAILABLE
              }`}
            />
            <HiIcon />
          </View>
          <AppText
            type={'caption_medium'}
            color={'text300'}
            text={getFormattedDate()}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomeHeader;
