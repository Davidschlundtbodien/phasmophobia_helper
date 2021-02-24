import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import EvidenceCheckBox from '../components/EvidenceCheckBox';
import GhostList from '../components/GhostList';
import { evidenceInfo } from '../components/EvidenceInfo'; 
import { globalStyles } from '../../styles/global';


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
    <View style={globalStyles.container}>

      <View style={globalStyles.evidenceList}>
        {evidence.map(evidence => {
          return <EvidenceCheckBox key={evidence.id} evidence={evidence} dispatch={dispatch} />;
        })}
      </View>
      <GhostList evidence={evidence} navigation={navigation}/>
    </View>
  );
};

export default EvidenceScreen;