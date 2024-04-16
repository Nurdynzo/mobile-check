import {useColors} from '@/hooks/useColors';
import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, View} from 'react-native';
import {Portal} from 'react-native-portalize';
import AppActivityIndicator from '../app-activity-indicator';
import {dropDownstyles} from './styles';
import {SearchSelectDropdownProps} from './types';
import {AppText} from '../common';

const DropdownList = <T,>({
  viewRef,
  visible = false,
  isLoading,
  offset = 0,
  ...otherProps
}: SearchSelectDropdownProps<T>) => {
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
    width: number;
  }>({top: 0, left: 0, width: 0});

  const [isVisible, setIsVisible] = useState(false);
  const {colors} = useColors();

  const styles = dropDownstyles({colors});

  const measure = () =>
    viewRef?.current?.measure((x, y, width, height, pageX, pageY) => {
      setDropdownPosition({top: pageY + height + offset, left: pageX, width});
    });

  useEffect(() => {
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewRef, offset]);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  if (!isVisible && !isLoading) {
    return <></>;
  }
  return (
    <Portal>
      <Pressable
        onLayout={measure}
        style={styles.flex1}
        onPress={() => setIsVisible(false)}
      />
      <View
        style={[
          styles.dropdown,
          {
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            width: dropdownPosition.width,
          },
        ]}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <AppActivityIndicator />
          </View>
        ) : otherProps.data?.length ? (
          <FlatList
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            {...otherProps}
          />
        ) : (
          <View style={styles.loadingContainer}>
            <AppText text="No result found" align="center" />
          </View>
        )}
      </View>
    </Portal>
  );
};

export default DropdownList;
