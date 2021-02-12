import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ghosts = [
  { name: 'Demon', evidence: ['Freezing Temperatures', 'Ghost Writing', 'Spirit Box'], weakness: 'Asking a Demon Succeeful questions on the Ouija board does not lower sanity', strength: 'Demons will begin hunts more often', description: 'A Demon is one of the worst Ghosts you can encounter. It has been known to attack without a reason.'},
  { name: 'Spirit', evidence: ['Ghost Writing', 'Fingerprints', 'Spirit Box'], weakness: 'Smudge Sticks will stop it attacking for 180 seconds instead of 90', strength: 'None', description: 'A Spirit is the most common Ghost you will come across however it is still very powerful and dangerous. They are usually discovered at one of their hunting grounds after an unexplained death.'},
];

const GhostList = () => {
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