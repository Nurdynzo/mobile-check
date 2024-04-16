import {ColorDefinitions} from '@/resources/colors';
import {StyleSheet} from 'react-native';

export const addNewPatientStyles = ({
  currentForm,
  lastIndex,
  colors,
}: {
  currentForm: number;
  lastIndex: number;
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    container: {flex: 1},
    formTab: {marginBottom: 8},
    screenTitle: {paddingTop: 8, paddingBottom: 16, paddingHorizontal: 24},
    buttonsContainer: {paddingHorizontal: 24, marginTop: 8},
    createAppointBtn: {marginTop: 22, marginBottom: 16},
    formContainer: {paddingHorizontal: 24, paddingVertical: 20, gap: 20},
    scrollContainer: {
      height: currentForm === lastIndex ? '100%' : undefined,
      paddingBottom: 30,
    },
    formViewContainer: {flex: 1},
    overlayContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: colors?.overlay,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export const formStyles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 24,
      paddingVertical: 16,
      gap: 20,
    },
    flex1: {flex: 1},
  });
