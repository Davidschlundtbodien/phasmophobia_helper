import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import EvidenceCheckBox from '../components/EvidenceCheckBox';

const evidenceList = [
  { name: 'Ghost Writing', isChecked: false},
  { name: 'EMF Level 5', isChecked: false},
  { name: 'Ghost Orbs', isChecked: false},
  { name: 'Fingerprints', isChecked: false},
  { name: 'Freezing Temps', isChecked: false},
  { name: 'Spirit Box', isChecked: false}
];

const EvidenceScreen = ({ navigation }) => {

  return (
    <>
      <Text>Evidence Screen</Text>
      <FlatList
        keyExtractor={evidence => evidence.name}
        data={evidenceList}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
      <Button 
        title="Go to Ghost Screen"
        onPress={() => navigation.navigate('Ghost')}
      />
    </>
  );
};

const styles = StyleSheet.create({});


export default EvidenceScreen;