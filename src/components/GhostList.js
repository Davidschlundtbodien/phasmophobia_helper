import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ghostInfo as ghosts} from '../components/GhostInfo';


const GhostFilter = (evidence) => {
  
};


const GhostList = ({ evidence }) => {
  const ev = evidence.filter(ev => ev.isChecked).map(ev => ev.name);

  return (
    <>
      {ghosts.map(ghost => {
        return <Text key={ghost.name}>{ghost.name}</Text>;
      })}
    </>
  );
};


const styles = StyleSheet.create({});

export default GhostList;