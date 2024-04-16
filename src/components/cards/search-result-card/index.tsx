import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {useColors} from '@/hooks/useColors';
import {AppText} from '../../common';
import {searchResultCardStyles} from './styles';

const SearchResultCard = ({
  name = 'results',
  id = 'HOS049020',
  showId = true,
  onPress,
  containerStyle,
}: {
  name?: string;
  id?: string;
  showId?: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}) => {
  const {colors} = useColors();

  const styles = searchResultCardStyles({colors});
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <AppText text={`${name}`} type="body_1_semibold" color={'text400'} />
      {showId ? (
        <AppText text={` - ${id}`} type="body_1_semibold" color={'text300'} />
      ) : null}
    </TouchableOpacity>
  );
};
export default SearchResultCard;
