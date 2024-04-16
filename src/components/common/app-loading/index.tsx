import React, {FunctionComponent} from 'react';
import {ActivityIndicator} from 'react-native';
import Overlay from '../../overlay';
import {appLoadingStyles} from './styles';
import {useColors} from '@/hooks/useColors';

const AppLoading: FunctionComponent<{
  isLoading: boolean;
  placeOnTop?: boolean;
}> = ({isLoading, placeOnTop = false}) => {
  const {colors} = useColors();
  const styles = appLoadingStyles({colors});

  return (
    <Overlay
      show={isLoading}
      containerStyles={placeOnTop ? styles.placeOntop : styles.overlay}
      shouldUserOverlayContentStyles={false}>
      <ActivityIndicator size={50} />
    </Overlay>
  );
};

export default AppLoading;
