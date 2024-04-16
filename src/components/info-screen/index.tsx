import React, {FunctionComponent} from 'react';
import {View, Linking, Alert} from 'react-native';
import {AppText} from '../common';
import {infoScreenStyles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {navigationType} from '@/types/screen';
import {routesNames} from '@/navigation/routes';

const InfoScreen: FunctionComponent = () => {
  const navigation: navigationType = useNavigation();
  const url = 'https://crest.app.plateaumed-dev.com/';
  const handlePress = React.useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <View style={infoScreenStyles.container}>
      <AppText onPress={handlePress} text="Use the Platmed website" />
      <AppText onPress={handlePress} text="Or" />
      <AppText
        onPress={() => navigation.navigate(routesNames.LOGIN)}
        text="Login"
      />
    </View>
  );
};

export default InfoScreen;
