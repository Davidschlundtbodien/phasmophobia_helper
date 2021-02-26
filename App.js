import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import EvidenceScreen from './src/screens/EvidenceScreen';
import GhostScreen from './src/screens/GhostScreen';

const navigator = createStackNavigator(
  {
    Evidence: EvidenceScreen,
    Ghost: GhostScreen
  }, {
    initialRouteName: 'Evidence',
    defaultNavigationOptions: {
      title: 'Phasmophobia Helper',
      headerStyle: { backgroundColor: '#c8c8c8'},
      headerTintColor: '#5e5e5e'
    }
  }
);

const getFonts = () => Font.loadAsync({
  'gentium-regular': require('./assets/fonts/GentiumBasic-Regular.ttf'),
  'gentium-bold': require('./assets/fonts/GentiumBasic-Bold.ttf'),
  'gentium-italic': require('./assets/fonts/GentiumBasic-Italic.ttf'),
  'gentium-bold-italic': require('./assets/fonts/GentiumBasic-BoldItalic.ttf')
});

const App = createAppContainer(navigator);

export default () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <App />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
  

};