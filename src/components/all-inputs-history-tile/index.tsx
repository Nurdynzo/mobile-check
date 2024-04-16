import VoidFunction from '@/types/voidfunction';
import React from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import {AppText} from '../common';
import {MoreVerticalIcon} from '@/assets/svg';
import {allInputsHistoryTileStyles} from './styles';
import {ColorKeys} from '@/resources/colors';
import AppActivityIndicator from '../app-activity-indicator';
import {useColors} from '@/hooks/useColors';

/**
 *
 * Note: This component is referred to as Single Summary on figma
 */

const AllInputsHistoryTile = ({
  date,
  time,
  textComponent,
  onPress,
  containerStyles,
  isLoading,
  hideTimeAndDate = false,
}: {
  date?: string;
  time?: string;
  textComponent: JSX.Element;
  onPress: VoidFunction;
  containerStyles?: ViewStyle;
  isLoading?: boolean;
  hideTimeAndDate?: boolean;
}) => {
  const styles = allInputsHistoryTileStyles();
  const {colors} = useColors();
  return (
    <Pressable
      disabled={isLoading}
      onPress={onPress}
      style={[styles.container, containerStyles]}>
      {!hideTimeAndDate && (
        <View>
          <Text text={time} color={'text50'} />
          <Text text={date} color={'text100'} />
        </View>
      )}
      <View style={styles.textComponentContainer}>{textComponent}</View>
      <View>
        {!isLoading ? (
          <MoreVerticalIcon stroke={colors.black} />
        ) : (
          <AppActivityIndicator />
        )}
      </View>
    </Pressable>
  );
};

const Text = ({text, color}: {text?: string; color?: ColorKeys}) => {
  return <AppText text={text} type={'status_tag_semibold'} color={color} />;
};

export default AllInputsHistoryTile;
