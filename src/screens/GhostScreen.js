import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';

const GhostScreen = ({ navigation }) => {
  const ghost = navigation.getParam('ghost');
  return (
    <View style={globalStyles.container} onAccessibilityEscape={() => navigation.navigate('Evidence')}>
      <View style={globalStyles.ghostDetail}>
        <Text 
          style={globalStyles.ghostName}
          accessibilityLabel={`Ghost name, ${ghost.name}`}
        >
          {ghost.name}
        </Text>
        <View 
          style={globalStyles.ghostEvidenceList}
          accessible={true} 
          accessibilityLabel={`Evidence for a ${ghost.name} are ${ghost.evidence[0]}, ${ghost.evidence[1]}, ${ghost.evidence[2]}`}
        >
          {ghost.evidence.map((ev => {
            return (
              <Text 
                style={globalStyles.ghostEvidence}
                key={ev} 
              >
                {ev}
              </Text>
            );
          }))}
        </View>
        <View style={globalStyles.ghostDetailList}>
          <Text 
            style={globalStyles.headerText}
            accessibilityLabel={`A ${ghost.name}'s weakness is`}
          >
            Weakness
          </Text>
          <Text style={globalStyles.ghostWeakness}>{ghost.weakness}</Text>
          <Text 
            style={globalStyles.headerText}
            accessibilityLabel={`A ${ghost.name}'s strength is`}
          >
            Strength
          </Text>
          <Text style={globalStyles.ghostStrength}>{ghost.strength}</Text>
          <Text 
            style={globalStyles.headerText}
            accessibilityLabel={`The Journal description of a ${ghost.name} is`}
          >
            Journal Description
          </Text>
          <Text style={globalStyles.ghostDescription}>{ghost.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default GhostScreen;