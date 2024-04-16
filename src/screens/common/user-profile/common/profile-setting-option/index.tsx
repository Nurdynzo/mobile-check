import {LockIcon, RightCaretIcon} from '@/assets/svg';
import {AppRow, AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import VoidFunction from '@/types/voidfunction';
import {EMPTY_STRING} from '@/utils/constants';
import React, {ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {profileSettingOptionStyles} from './styles';

const ProfileSettingsOption = ({
  title = EMPTY_STRING,
  icon = <LockIcon />,
  onPress,
}: {
  title?: string;
  icon?: ReactNode;
  onPress?: VoidFunction;
}) => {
  const {colors} = useColors();
  const styles = profileSettingOptionStyles({colors});

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <AppRow extraStyles={styles.optionContainer}>
        <View style={styles.option}>
          {icon}
          <AppText text={title} type="body_1_semibold" />
        </View>
        <RightCaretIcon stroke={colors.text100} />
      </AppRow>
    </TouchableOpacity>
  );
};

export default ProfileSettingsOption;
