import {wp} from '@/resources/config';
import {typography} from '@/resources/fonts';
import {StyleSheet} from 'react-native';

export const allInputsAddNotesButtonStyles = () => {
  return StyleSheet.create({
    closeButton: {alignSelf: 'flex-end'},
    inputStyle: {
      textAlignVertical: 'top',
      ...typography.body_2_medium,
    },
    inputContainerStyle: {
      paddingVertical: wp(8),
    },
    buttonStyle: {
      width: undefined,
      paddingHorizontal: 0,
    },
  });
};
