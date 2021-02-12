import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import EvidenceCheckBox from '../components/EvidenceCheckBox';
import GhostList from '../components/GhostList';

const evidenceList = [
  {id: 1, name: 'Ghost Writing', isChecked: false},
  {id: 2, name: 'EMF Level 5', isChecked: false},
  {id: 3, name: 'Ghost Orbs', isChecked: false},
  {id: 4, name: 'Fingerprints', isChecked: false},
  {id: 5, name: 'Freezing Temps', isChecked: false},
  {id: 6, name: 'Spirit Box', isChecked: false}
];

const reducer = (evidence, action) => {
  switch (action.type) {
  case 'check_box':
    return evidence.map(ev => {
      if (ev.id === action.payload.id) {
        return { ...ev, isChecked: !ev.isChecked };
      }
      return ev;
    });
  }
};

const EvidenceScreen = ({ navigation }) => {
  const [evidence, dispatch] = useReducer(reducer, evidenceList);

  return (
    <>
      <Text>Evidence Screen</Text>
      {evidence.map(evidence => {
        return <EvidenceCheckBox  key={evidence.id} evidence={evidence} dispatch={dispatch} />;
      })}
      <GhostList />
      <Button 
        title="Go to Ghost Screen"
        onPress={() => navigation.navigate('Ghost')}
      />
    </>
  );
};

const styles = StyleSheet.create({});


export default EvidenceScreen;