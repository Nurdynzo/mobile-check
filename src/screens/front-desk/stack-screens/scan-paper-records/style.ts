import {StyleSheet} from 'react-native';
import {ColorDefinitions, ColorKeys} from '../../../../resources/colors';

export const scanPaperRecordsStyles = ({colors}: {colors?: ColorDefinitions}) =>
  StyleSheet.create({
    container: {
      gap: 10,
      flex: 1,
      backgroundColor: colors?.neutral100,
    },
    loading: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors?.background,
      zIndex: 1000,
    },
    image: {width: '100%', height: '100%'},
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    cameraWrapper: {
      height: undefined,
      gap: 6,
      alignItems: 'center',
      padding: 10,
      backgroundColor: colors?.white,
      paddingBottom: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    header: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    headerRightContent: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      gap: 30,
    },
    headerLeftContent: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      flex: 0.2,
    },
    cameraContainer: {
      flex: 1,
      position: 'relative',
    },
    imageWrapper: {
      height: 48,
      width: 48,
      backgroundColor: colors?.default300,
    },
    badge: {
      position: 'absolute',
      top: 0,
      right: 0,
      paddingHorizontal: 6,
      backgroundColor: colors?.neutral100,
      fontSize: 8,
    },
    undo: {
      transform: [{scaleX: -1}],
    },
    sendToReviewerBtn: {width: '90%', alignSelf: 'center'},
  });

export const scanPaperRecordsCardStyles = ({
  colors,
}: {
  colors?: ColorDefinitions;
}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: colors?.white,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 28,
      padding: 20,
      borderRadius: 16,
    },
    textWrapper: {
      gap: 3,
    },
  });
export const buttonStyles = ({
  colors,
  bg,
  borderColor,
}: {
  colors: ColorDefinitions;
  bg: ColorKeys;
  borderColor: ColorKeys;
}) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 14,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: 48,
      width: 48,
      backgroundColor: colors[bg] || colors?.transparent,
      borderWidth: 1,
      borderColor: colors[borderColor] || colors?.primary400,
    },
  });
