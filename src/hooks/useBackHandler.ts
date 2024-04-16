import {useCallback} from 'react';
import {BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

export const useBackHandler = (
  onBackHandler: () => boolean,
  deps: ReadonlyArray<unknown>,
) => {
  useFocusEffect(
    useCallback(() => {
      const handleBackHandler = () => {
        return onBackHandler();
      };
      BackHandler.addEventListener('hardwareBackPress', handleBackHandler);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handleBackHandler);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps),
  );
};
