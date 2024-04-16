import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const viewPaperRecordsStyles = StyleSheet.create({
  header: {
    marginBottom: wp(16),
    rowGap: wp(16),
    paddingHorizontal: wp(24),
  },
  scrollContainer: {
    // TODO(Franklyn): i need to sync with temitope to know why this color is not in the DLS
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
});
