import {StyleSheet} from 'react-native';
import {wp} from '@/resources/config';
import AlignTypes from '@/types/alignTypes';
import justifyContentType from '@/types/justifyContentType';

export const appRowStyles = ({
  alignItems,
  columnGap,
  justifyContent = 'space-between',
}: {
  alignItems?: AlignTypes;
  columnGap: number;
  justifyContent?: justifyContentType;
}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent,
      columnGap: wp(columnGap),
      alignItems,
    },
  });
