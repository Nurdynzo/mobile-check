import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const vitalSignsStyles = ({colors}: {colors?: ColorDefinitions} = {}) =>
  StyleSheet.create({
    container: {
      gap: wp(16),
    },
    suggestedPillContainer: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      gap: wp(12),
    },
    contentTitle: {
      borderBottomColor: colors?.text50,
      borderWidth: 0,
      borderBottomWidth: 0.2,
      paddingBottom: wp(10),
    },
    sheetFooter: {
      marginHorizontal: wp(20),
      marginBottom: wp(50),
      marginTop: wp(16),
      alignSelf: 'flex-end',
    },
    content: {
      backgroundColor: colors?.white,
      padding: wp(16),
      borderRadius: wp(10),
      gap: wp(16),
    },
    takeContainer: {
      paddingHorizontal: wp(24),
      gap: wp(10),
    },
    topContent: {
      paddingVertical: wp(16),
      paddingHorizontal: wp(24),
      paddingTop: 0,
      borderRadius: wp(10),
      gap: wp(16),
    },
    predictiveTextContainer: {
      minHeight: wp(48),
      width: '100%',
      paddingVertical: wp(8),
      paddingHorizontal: wp(12),
      borderRadius: wp(10),
      borderWidth: 1,
      borderColor: colors?.neutral100,
      justifyContent: 'center',
    },
    chipsContainer: {
      height: wp(300),
      padding: wp(16),
      width: '100%',
      borderRadius: wp(10),
      borderWidth: 1,
      borderColor: colors?.neutral100,
      flexDirection: 'row',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: wp(16),
    },
    score: {
      flexDirection: 'row',
    },
    extra: {
      borderTopWidth: 1,
      marginTop: wp(20),
      borderColor: colors?.neutral100,
      flex: 1,
      paddingTop: wp(12),
    },
    rowContainer: {
      padding: wp(6),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    deleteRecentContainer: {
      padding: wp(16),
      borderWidth: 1,
      borderRadius: wp(10),
      borderColor: colors?.neutral100,
    },
    seperator: {marginTop: wp(32), marginBottom: wp(24)},
    selectCardContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(16),
      flex: 1,
      paddingHorizontal: wp(24),
      paddingVertical: wp(10),
    },
    selectCardDesc: {flex: 1, gap: wp(4)},
    attentionContainer: {marginBottom: wp(16), gap: wp(16)},
    attentionSummary: {
      paddingHorizontal: wp(16),
      paddingVertical: wp(8),
      backgroundColor: colors?.neutral100,
      borderRadius: wp(10),
    },
  });
