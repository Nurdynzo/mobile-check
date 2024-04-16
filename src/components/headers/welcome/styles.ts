import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const welcomeHeaderStyles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      gap: wp(16),
      paddingTop: wp(11.67),
    },
    logoArea: {},
    contentArea: {
      flex: 1,
      flexDirection: 'row',
      gap: wp(8),
    },
    name: {
      gap: wp(4),
    },
    welcomeContent: {
      flexDirection: 'row',
      gap: wp(8),
    },
  });
