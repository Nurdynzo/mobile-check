import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const wardRoundAndClinicNoteStyles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: wp(24),
    rowGap: wp(16),
  },
  subHeader: {
    marginBottom: wp(16),
    rowGap: wp(16),
    paddingHorizontal: wp(24),
  },
  filter: {flexDirection: 'row', alignItems: 'center'},
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: wp(8),
    borderRadius: wp(23),
  },
});
