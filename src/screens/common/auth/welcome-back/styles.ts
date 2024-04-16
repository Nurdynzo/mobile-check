import {StyleSheet} from 'react-native';

export const welcomeBackStyles = ({
  subCardTextFull,
}: {
  subCardTextFull?: boolean;
}) =>
  StyleSheet.create({
    cardContainer: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 10,
      gap: 8,
      marginBottom: 24,
    },

    //----CARD STYLES
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 8,
      paddingHorizontal: 8,
      paddingVertical: 8,
    },
    middle: {
      flex: 1,
      justifyContent: 'space-around',
      gap: 8,
    },
    subCardText: {
      width: subCardTextFull ? '100%' : '80%',
    },
    left: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    right: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    line: {
      height: 1,
      backgroundColor: '#DFE2E9',
      width: '80%',
      alignSelf: 'center',
    },
  });
