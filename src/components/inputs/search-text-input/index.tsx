import React from 'react';
import AppTextInput from '../app-text-input';
import {SearchIcon} from '@/assets/svg';
import {View, ViewStyle} from 'react-native';
import AppActivityIndicator from '@/components/app-activity-indicator';
import {searchTextInputStyles} from './styles';
import {useColors} from '@/hooks/useColors';

const SearchTextInput = ({
  height = 41,
  value,
  placeholder,
  autoFocus,
  onChangeText,
  baseContainerStyle,
  inputContainerStyle,
  isLoading = false,
}: {
  value?: string;
  autoFocus?: boolean;
  isLoading?: boolean;
  onChangeText: ((text: string) => void) | undefined;
  height?: number;
  placeholder: string;
  baseContainerStyle?: ViewStyle | undefined;
  inputContainerStyle?: ViewStyle | undefined;
}) => {
  const styles = searchTextInputStyles();
  const {colors} = useColors();
  return (
    <AppTextInput
      value={value}
      onChangeText={onChangeText}
      autoFocus={autoFocus}
      height={height}
      LeftContent={
        <View style={styles.leftContent}>
          {isLoading ? (
            <AppActivityIndicator />
          ) : (
            <SearchIcon stroke={colors.text50} />
          )}
        </View>
      }
      placeholder={placeholder}
      baseContainerStyle={baseContainerStyle}
      inputContainerStyle={{...inputContainerStyle, ...styles.inputContainer}}
    />
  );
};

export default SearchTextInput;
