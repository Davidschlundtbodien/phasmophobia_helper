import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EvidenceScreen from './src/screens/EvidenceScreen';
import GhostScreen from './src/screens/GhostScreen';

const navigator = createStackNavigator(
  {
    Evidence: EvidenceScreen,
    Ghost: GhostScreen
  }, {
    initialRouteName: 'Evidence',
    defaultNavigationOptions: {
      title: 'Ghost Evidence'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <App />
  )
};