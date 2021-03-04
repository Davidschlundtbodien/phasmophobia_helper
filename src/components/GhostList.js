import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ghostInfo } from '../components/GhostInfo';
import { globalStyles } from '../../styles/global';


const GhostFilter = (evidence, ghost) => {
  var value = 0;
  evidence.forEach(ev => {
    value = value + ghost.includes(ev);
  });
  return (value === evidence.length);
};


const GhostList = ({ evidence, navigation }) => {
  const ev = evidence.filter(ev => ev.isChecked).map(ev => ev.name);
  const ghosts = ghostInfo;
  return (
    <View style={globalStyles.ghostList}>
      {ghosts.map(ghost => {
        if (GhostFilter(ev, ghost.evidence)) {
          return (
            <TouchableOpacity 
              style={globalStyles.buttonLabel}
              accessibilityLabel={`Possible Ghost, ${ghost.name}, tap for more information`} 
              key={ghost.name} 
              onPress={() => navigation.navigate('Ghost', {ghost: ghost})}
            >
              <Text style={globalStyles.ghostLabel}>
                {ghost.name}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default GhostList;