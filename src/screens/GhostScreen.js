import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { globalStyles } from '../../styles/global';

const GhostScreen = ({ navigation }) => {
  const ghost = navigation.getParam('ghost');
  return (
    <View style={globalStyles.ghostDetail}>
      <Text style={globalStyles.ghostName}>{ghost.name}</Text>
      <View>
        {ghost.evidence.map((ev => {
          return <Text style={globalStyles.ghostEvidence} key={ev} >{ev}</Text>;
        }))}
      </View>
      <Text style={globalStyles.ghostWeakness}>{ghost.weakness}</Text>
      <Text style={globalStyles.ghostStrength}>{ghost.strength}</Text>
      <Text style={globalStyles.ghostDescription}>{ghost.description}</Text>
    </View>
  );
};

export default GhostScreen;