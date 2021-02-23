import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ghostInfo } from '../components/GhostInfo';


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
    <View style={styles.ghostList}>
      {ghosts.map(ghost => {
        if (GhostFilter(ev, ghost.evidence)) {
          return <TouchableOpacity style={styles.buttonLabel} key={ghost.name} onPress={() => navigation.navigate('Ghost', {ghost: ghost})}>
            <Text style={styles.ghostLabel}>{ghost.name}</Text>
          </TouchableOpacity>;
        }
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  ghostLabel: {
    fontSize: 22,
    padding: 10
  },
  ghostList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  buttonLabel: {
    borderWidth:1,
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 4
  }
});

export default GhostList;