import {StyleSheet} from 'react-native';

export const recordRowStyles = () =>
  StyleSheet.create({
    cardDetail: {
      flexDirection: 'row',
      gap: 8,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    leftRow: {
      flex: 1,
      gap: 5,
    },
    subRow: {flexDirection: 'row', justifyContent: 'space-between'},
    detailRow: {flexDirection: 'row', gap: 5},
  });
