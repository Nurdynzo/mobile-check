import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '@/resources/colors';
import {fs, wp} from '@/resources/config';

// TODO(Philip): This file needs to be optimized
export const doctorPatientStyle = ({
  colors,
  cardHeaderHasBackground,
}: {
  containerWidth?: number;
  colors?: ColorDefinitions;
  cardHeaderHasBackground?: boolean;
} = {}) =>
  StyleSheet.create({
    rowSpaceBetween: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    wrapper: {
      backgroundColor: colors?.white,
      borderRadius: wp(10),
      overflow: 'hidden',
      marginBottom: wp(16),
    },
    tabButton: {
      alignItems: 'center',
      width: undefined,
      paddingVertical: wp(8),
      paddingHorizontal: wp(16),
      borderRadius: wp(23),
    },
    header: {
      paddingHorizontal: wp(24),
      backgroundColor: colors?.default400,
    },
    listTypeViewContainer: {
      paddingHorizontal: wp(24),
      flex: 1,
    },
    container: {
      borderRadius: wp(32),
      backgroundColor: 'white',
      width: wp(300),
      height: wp(40),
      padding: wp(4),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: wp(12),
      marginBottom: wp(16),
    },
    innerViewCommon: {
      borderRadius: wp(23),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: wp(7),
      padding: wp(12),
      backgroundColor: cardHeaderHasBackground
        ? colors?.neutral100
        : 'transparent',
      borderRadius: wp(10),
    },
    headerAvatar: {
      height: wp(30),
      width: wp(30),
      borderRadius: wp(30),
      backgroundColor: colors?.neutral25,
      alignSelf: 'center',
    },
    headerContent: {
      flex: 1,
      alignItems: 'flex-start',
      gap: wp(4),
    },
    headerStatus: {
      paddingVertical: wp(2),
      paddingHorizontal: wp(8),
      backgroundColor: colors?.primary25,
      borderRadius: wp(8),
    },
    cardContainer: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      gap: wp(16),
      padding: wp(16),
      paddingTop: 0,
    },
    tabSwitcherContainer: {
      alignSelf: 'flex-start',
      marginTop: wp(12),
      marginBottom: wp(16),
      backgroundColor: colors?.white,
    },
  });

export const profileStyles = ({colors}: {colors?: ColorDefinitions}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: wp(15),
      backgroundColor: colors?.default300,
      borderRadius: wp(10),
    },
    greyContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: wp(15),
      backgroundColor: colors?.neutral100,
      borderRadius: wp(10),
    },
    avatar: {
      width: wp(50),
      height: wp(50),
      borderRadius: wp(25),
      marginRight: wp(15),
      backgroundColor: colors?.text300,
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: wp(5),
      width: '71%',
    },
    primaryButton: {
      paddingVertical: wp(2),
      paddingHorizontal: wp(4),
      borderRadius: wp(5),
      backgroundColor: colors?.neutral50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: fs(12),
      color: colors?.text300,
    },
    navCenteredText: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '75%',
      marginTop: wp(5),
    },
    navContainer: {
      width: '100%',
      flexDirection: 'row',
      gap: wp(16),
    },
    tabStyles: {
      marginRight: wp(5),
      paddingVertical: wp(8),
      paddingHorizontal: wp(8),
    },
    cardWrapper: {
      height: 'auto',
      width: '100%',
      padding: wp(15),
      backgroundColor: colors?.white,
      borderRadius: wp(10),
      overflow: 'hidden',
    },
    wrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: wp(16),
    },
    text: {
      fontSize: fs(16),
    },
    line: {
      height: 1,
      width: '70%',
      backgroundColor: colors?.neutral100,
    },

    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: wp(10),
      paddingHorizontal: wp(15),
      backgroundColor: colors?.white,
      borderRadius: wp(10),
    },
    iconContainer: {
      width: wp(40),
      height: wp(40),
      borderRadius: wp(20),
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: wp(10),
    },
    iconContainerBackground: {
      backgroundColor: colors?.default300,
    },
    buttonTextBolder: {
      flex: 1,
      fontSize: fs(16),
      color: colors?.black,
    },
    //call button
    successButton: {
      backgroundColor: colors?.success600,
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      padding: wp(8),
      paddingHorizontal: wp(10),
      flexDirection: 'row',
      gap: wp(8),
      borderRadius: wp(8),
      alignSelf: 'flex-start',
    },
    marginLeft12: {
      marginLeft: wp(12),
    },
  });
