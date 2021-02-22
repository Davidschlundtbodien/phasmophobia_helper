import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
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
    <View >
      <Image
        source={require('../../assets/JournalBG.jpg')}
        style={styles.journalBG}
      />
      <div style={styles.evidenceGrid}>
        {evidence.map(evidence => {
          return <EvidenceCheckBox  key={evidence.id} evidence={evidence} dispatch={dispatch}/>;
        })}
      </div>
      <GhostList evidence={evidence} navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  journalBG: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.8,
  },
  evidenceGrid: {
    
  }
});


export default EvidenceScreen;