import {ReactNode} from 'react';
import {
  KeyboardType,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

export type appTextInputTypes = {
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  baseContainerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  onClear?: () => void;
  onSearch?: () => void;
  showClose?: boolean;
  value?: string;
  editable?: boolean;
  iconPressable?: boolean;
  iconOnPress?: () => void;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  placeHolderFontSize?: number;
  shouldTranslate?: boolean;
  isJustInput?: boolean;
  multiline?: boolean;
  borderColor?: string;
  label?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onPressIn?: () => void;
  valSymbol?: string | undefined;
  borderWidth?: number;
  keyboardType?: KeyboardType;
  autoFocus?: boolean;
  showRequiredTag?: boolean;
  isPassword?: boolean;
  rightIcon?: ReactNode;
  onPressRightIcon?: () => void;
  RightContent?: ReactNode;
  LeftContent?: ReactNode;
  inputRef?: React.RefObject<TextInput>;
  inputViewRef?: React.RefObject<View>;
  textContentType?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode';
  leftIcon?: ReactNode;
  height?: number;
  numberOfLines?: number;
};
