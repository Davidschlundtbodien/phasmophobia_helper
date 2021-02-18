import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import EvidenceCheckBox from '../components/EvidenceCheckBox';
import GhostList from '../components/GhostList';
import { evidenceInfo } from '../components/EvidenceInfo'; 

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
  const [evidence, dispatch] = useReducer(reducer, evidenceInfo);

  return (
    <>
      <Text>Evidence Screen</Text>
      {evidence.map(evidence => {
        return <EvidenceCheckBox  key={evidence.id} evidence={evidence} dispatch={dispatch} />;
      })}
      <GhostList evidence={evidence}/>
      <Button 
        title="Go to Ghost Screen"
        onPress={() => navigation.navigate('Ghost')}
      />
    </>
  );
};

const styles = StyleSheet.create({});


export default EvidenceScreen;