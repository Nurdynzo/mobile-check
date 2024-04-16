import React from 'react';
import {View} from 'react-native';
import {SuccessIcon} from '@/assets/svg';
import {useColors} from '@/hooks/useColors';
import AppButton from '../../buttons/app-button';
import AppText from '../app-text';
import {appAlertStyles} from './styles';
import {appAlertTypes} from './type';

const AppAlert = ({
  icon = <SuccessIcon />,
  buttonText = 'Return to login',
  description = 'Your new password has been created successfully',
  title = 'Congratulations',
  onPress = () => null,
  containerStyle,
  showButton = true,
  buttonWidth,
}: appAlertTypes) => {
  const {colors} = useColors();
  const styles = appAlertStyles({colors});
  return (
    <View style={[styles.sheetContainer, containerStyle]}>
      {icon}
      <View style={styles.sheetTextWrapper}>
        <AppText
          type="title_semibold"
          color="text400"
          text={title}
          align="center"
        />
        <AppText
          type="subtitle_medium"
          color="text300"
          text={description}
          align="center"
        />
      </View>
      {showButton && (
        <AppButton text={buttonText} width={buttonWidth} onPress={onPress} />
      )}
    </View>
  );
};

export default AppAlert;
