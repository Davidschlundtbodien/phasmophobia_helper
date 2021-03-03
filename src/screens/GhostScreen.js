import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';

const GhostScreen = ({ navigation }) => {
  const ghost = navigation.getParam('ghost');
  return (
    <View style={globalStyles.container} onAccessibilityEscape={() => navigation.navigate('Evidence')}>
      <View style={globalStyles.ghostDetail}>
        <Text style={globalStyles.ghostName}>{ghost.name}</Text>
        <View style={globalStyles.ghostEvidenceList}>
          {ghost.evidence.map((ev => {
            return <Text style={globalStyles.ghostEvidence} key={ev} >{ev}</Text>;
          }))}
        </View>
        <View style={globalStyles.ghostDetailList}>
          <Text style={globalStyles.headerText}>Weakness</Text>
          <Text style={globalStyles.ghostWeakness}>{ghost.weakness}</Text>
          <Text style={globalStyles.headerText}>Strength</Text>
          <Text style={globalStyles.ghostStrength}>{ghost.strength}</Text>
          <Text style={globalStyles.headerText}>Journal Description</Text>
          <Text style={globalStyles.ghostDescription}>{ghost.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default GhostScreen;