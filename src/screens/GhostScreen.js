import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const GhostScreen = ({ navigation }) => {
  const ghost = navigation.getParam('ghost');
  return (
    <View style={styles.ghostDetail}>
      <Text style={styles.ghostName}>{ghost.name}</Text>
      <View>
        {ghost.evidence.map((ev => {
          return <Text style={styles.ghostEvidence} key={ev} >{ev}</Text>;
        }))}
      </View>
      <Text style={styles.ghostWeakness}>{ghost.weakness}</Text>
      <Text style={styles.ghostStrength}>{ghost.strength}</Text>
      <Text style={styles.ghostDescription}>{ghost.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ghostDetail: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: 'center',
    margin: 20
    
  },
  ghostName: {
    fontSize: 45,
  },
  ghostEvidence:{
    fontSize: 25,
    textAlign: "center",
    paddingVertical: 5
  },
  ghostWeakness: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center'
  },
  ghostStrength:{
    fontSize: 20,
    color: 'red',
    textAlign: 'center'
  },
  ghostDescription: {
    fontSize: 18,
    textAlign: 'center'
  }
});


export default GhostScreen;