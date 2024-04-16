import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {Host} from 'react-native-portalize';
import {StyleSheet} from 'react-native';
import {useColors} from './src/hooks/useColors';
import RootNavigation from './src/navigation';
import AppToast from './src/components/app-toast';
import {useIgnore} from './src/hooks/useIgnore';

const App = () => {
  const {colors} = useColors();
  useIgnore();

  const appStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors?.default400,
    },
  });

  return (
    <GestureHandlerRootView style={appStyles.container}>
      <Host>
        <RootNavigation />
      </Host>
      <AppToast />
    </GestureHandlerRootView>
  );
};

export default App;
