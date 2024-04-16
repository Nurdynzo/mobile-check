import {UserIcon} from '@/assets/svg';
import {useColors} from '@/hooks/useColors';
import React, {FunctionComponent} from 'react';
import {Image, View} from 'react-native';
import {displayImageStyles} from './styles';
import {AppDisplayImageProps} from './type';

const DisplayImage: FunctionComponent<AppDisplayImageProps> = ({
  uri,
  size = 50,
  borderRadius,
  style,
  isCircular = true,
  shouldCache = true,
}) => {
  const {colors} = useColors();
  const styles = displayImageStyles({
    colors,
    size,
    borderRadius,
    isCircular,
  });
  return (
    <View style={[styles.imgContainer, style]}>
      {uri ? (
        <Image
          source={{
            uri,
            cache: shouldCache ? 'force-cache' : undefined,
          }}
          style={styles.img}
        />
      ) : (
        <UserIcon
          fill={colors.white}
          width={size * 0.7}
          height={size * 0.7}
          style={styles.imgPlaceholder}
        />
      )}
    </View>
  );
};

export default DisplayImage;
