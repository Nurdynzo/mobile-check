import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const suggestionsExpandedSelectionViewStyles = () =>
  StyleSheet.create({
    sheetContent: {padding: wp(20), paddingTop: 0, gap: wp(16)},
  });
