import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const investigationUploadedImageViewStyles = () =>
  StyleSheet.create({
    viewBtn: {marginTop: 0, height: wp(35)},
    mediaPreview: {
      width: wp(160),
      overflow: 'hidden',
      gap: wp(5),
    },
    mediaContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    seperator: {marginTop: wp(32), marginBottom: wp(24)},

    miniSaveBtn: {
      marginTop: wp(16),
      width: wp(80),
      alignSelf: 'flex-end',
    },
  });
