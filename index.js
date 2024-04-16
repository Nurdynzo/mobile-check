/**
 * @format
 */
import React from 'react';
import {AppRegistry, Text, TextInput} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {setupStore} from '@/state/store';
import {Provider} from 'react-redux';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.maxFontSizeMultiplier = 1.12;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.maxFontSizeMultiplier = 1.12;

const Root = () => {
  return (
    <Provider store={setupStore()}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
