import React from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import AppText from '@/components/common/app-text';
import {allInputsPanelWithTitleCardStyles} from './styles';
import {useColors} from '@/hooks/useColors';
import {AppSeperator} from '@/components/common';
import VoidFunction from '@/types/voidfunction';

const AllInputsPanelWithTitleCard = ({
  title,
  children,
  showSeparator = true,
  onPressHeader,
  TralingComponent,
  disableHeaderPress,
  style,
}: {
  title: string;
  onPressHeader?: VoidFunction;
  disableHeaderPress?: boolean;
  showSeparator?: boolean;
  children: React.ReactNode;
  TralingComponent?: React.ReactNode;
  style?: ViewStyle;
}) => {
  const {colors} = useColors();
  const styles = allInputsPanelWithTitleCardStyles({colors});

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        disabled={disableHeaderPress}
        onPress={onPressHeader}
        style={styles.titleConatiner}>
        <AppText text={title} type={'title_semibold'} />
        {TralingComponent}
      </TouchableOpacity>
      {showSeparator && <AppSeperator style={styles.divider} />}

      {children}
    </View>
  );
};

export default AllInputsPanelWithTitleCard;
