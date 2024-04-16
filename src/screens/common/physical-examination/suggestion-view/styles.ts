import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const physicalExaminationSuggestionStyles = StyleSheet.create({
  addNotesButton: {alignSelf: 'flex-start'},
  sheetFooter: {
    marginHorizontal: wp(20),
    marginBottom: wp(50),
    marginTop: wp(16),
    alignSelf: 'flex-end',
  },
  takeContainer: {
    paddingHorizontal: wp(24),
    gap: wp(10),
  },
  seperator: {marginTop: wp(32), marginBottom: wp(24)},
});
