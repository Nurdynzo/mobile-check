import {ColorDefinitions, ColorKeys} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const bottomIndicatorTabSwitcherStyles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
});
export const bottomIndicatorTabStyles = ({
  colors,
  indicatorColor = 'primary400',
}: {colors?: ColorDefinitions; indicatorColor?: ColorKeys} = {}) =>
  StyleSheet.create({
    tabContainer: {
      alignItems: 'center',
      flex: 1,
    },
    tabContent: {
      paddingVertical: wp(4),
      marginBottom: wp(6),
    },
    indicatorContainer: {
      height: wp(2),
      backgroundColor: colors?.neutral100,
      width: '100%',
      alignItems: 'center',
    },
    indicator: {
      flex: 1,
      width: '30%',
      borderRadius: wp(10),
      backgroundColor: colors?.[indicatorColor],
    },
  });
