import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ghostInfo as ghosts} from '../components/GhostInfo';


const GhostFilter = (evidence, ghost) => {
  const evCollected = evidence.filter(ev =>  ev.isChecked).map(ev => ev.name);
  let passes = true;
  evCollected.forEach(ev => {
    if (ghost.evidence.includes(ev)) {
      passes = true;
    } else {
      passes = false;
    }
    
  });
  return passes;
};


const GhostList = ({ evidence }) => {
  
  return (
    <>
      {ghosts.map(ghost => {
        if (GhostFilter(evidence, ghost)) {
          return <Text key={ghost.name}>{ghost.name}</Text>;
        }
      })}
    </>
  );
};


const styles = StyleSheet.create({});

export default GhostList;