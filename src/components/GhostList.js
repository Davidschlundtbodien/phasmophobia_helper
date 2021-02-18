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
    <>
      {ghosts.map(ghost => {
        if (GhostFilter(ev, ghost.evidence)) {
          return <TouchableOpacity key={ghost.name} onPress={() => navigation.navigate('Ghost', {ghost: ghost})}>
            <Text>{ghost.name}</Text>
          </TouchableOpacity>;
        }
      })}
    </>
  );
};


const styles = StyleSheet.create({});

export default GhostList;