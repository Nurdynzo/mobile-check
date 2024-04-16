import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const presentingComplaintsSuggestionSelectionStyles = () => {
  return StyleSheet.create({
    preSaveSummary: {gap: wp(16), paddingTop: wp(16)},
    saveButton: {marginTop: wp(32)},
    tabButtonScrollView: {
      paddingLeft: wp(24),
      paddingRight: wp(24),
      gap: wp(12),
    },
    tabButtonScrollViewContainer: {paddingVertical: wp(16)},
    socialAndPastHistoryContainer: {
      flexDirection: 'row',
      gap: wp(16),
      marginTop: wp(32),
    },
    socialAndPastHistoryFlex: {flex: 145.5},
    addNotesButton: {flex: 157},
    plusButton: {alignSelf: 'flex-end', width: undefined, flex: 117},
    addNoteOpenedContainer: {marginTop: wp(16), gap: wp(16)},
    addNoteClosedContainer: {
      marginTop: wp(16),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    searchBarAndAudioButtonContainer: {
      flexDirection: 'row',
      gap: wp(16),
      alignItems: 'center',
    },
    reviewDetailedHistoryButton: {
      marginTop: wp(16),
      justifyContent: 'space-between',
    },
    tabButtons: {
      paddingHorizontal: 0,
      width: wp(52),
      alignItems: 'center',
      marginHorizontal: 0,
    },
    typeNotesHeader: {
      marginBottom: wp(16),
      marginHorizontal: wp(24),
    },
    searchBarContainer: {
      paddingHorizontal: wp(24),
      gap: wp(16),
    },
    speechTextInput: {
      minHeight: wp(120),
      maxHeight: wp(320),
    },
  });
};
