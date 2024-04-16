import {StyleSheet} from 'react-native';

export const allInputSummaryStyle = () =>
  StyleSheet.create({
    description: {
      width: '60%',
    },

    rowSpaceBetween: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  });
