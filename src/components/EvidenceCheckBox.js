import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

const EvidenceCheckBox = ({ evidence, dispatch }) => {
  return (
    <>
      <CheckBox 
        title={evidence.name}
        checked={evidence.isChecked}
        onPress={() => dispatch({type: 'check_box', payload: {id: evidence.id }})}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default EvidenceCheckBox;

