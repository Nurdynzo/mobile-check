import {AppRow, AppText} from '@/components/common';
import {AppToggleSwitch} from '@/components/inputs';
import {settingOptions} from '@/constants/profile';
import {useColors} from '@/hooks/useColors';
import React from 'react';
import {View} from 'react-native';
import {settingsCardStyles} from './styles';
import CardTitle from '../card-title';

const SettingsCard = ({cardTitle}: {cardTitle?: string}) => {
  const {colors} = useColors();
  const styles = settingsCardStyles({colors});
  return (
    <View style={styles.personalInfoCard}>
      <CardTitle showLine={false} title={cardTitle} />
      <View style={styles.settingsCard}>
        {settingOptions.map((option, index) => (
          <Toggle key={index} isOn={option.isOn} title={option.title} />
        ))}
      </View>
    </View>
  );
};

export default SettingsCard;

const Toggle = ({
  isOn = true,
  title = 'Push notifications in app',
  onToggle,
}: {
  isOn: boolean;
  onToggle?: (isOn: boolean) => void;
  title: string;
}) => {
  return (
    <AppRow extraStyles={{justifyContent: 'flex-start'}}>
      <AppToggleSwitch isOn={isOn} onToggle={onToggle} />
      <AppText text={title} type="body_1_semibold" color="text300" />
    </AppRow>
  );
};
