import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ghostInfo } from '../components/GhostInfo';
import { evidenceInfo } from './EvidenceInfo';


const GhostFilter = (evidence, ghost) => {
  var value = 0;
  evidence.forEach(ev => {
    value = value + ghost.includes(ev);
  });
  return (value === evidence.length);
};


const GhostList = ({ evidence }) => {
  const ev = evidence.filter(ev => ev.isChecked).map(ev => ev.name);
  const ghosts = ghostInfo;
  return (
    <>
      {ghosts.map(ghost => {
        if (GhostFilter(ev, ghost.evidence)) {
          return <Text key={ghost.name}>{ghost.name}</Text>;
        }
      })}
    </>
  );
};


const styles = StyleSheet.create({});

export default GhostList;