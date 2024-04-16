import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const imageListViewSheetStyles = StyleSheet.create({
  contentContainer: {paddingHorizontal: wp(24), gap: wp(16)},
  emptyImage: {
    flex: 1,
    padding: wp(8),
  },
});

export const imageViewStyles = ({colors}: {colors?: ColorDefinitions} = {}) =>
  StyleSheet.create({
    container: {
      padding: wp(8),
      backgroundColor: colors?.neutral25,
      flex: 1,
      borderRadius: wp(16),
    },
    imageConatainer: {flex: 1, borderRadius: wp(9.5), overflow: 'hidden'},
    image: {flex: 1, width: 'auto'},
    imageName: {paddingTop: wp(8), paddingBottom: wp(4)},
    overLayContainer: {
      flex: 1,
      position: 'absolute',
      backgroundColor: colors?.overlay,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
