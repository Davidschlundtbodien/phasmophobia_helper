import React from 'react';
import { CheckBox } from 'react-native-elements';
import { globalStyles } from '../../styles/global';

const EvidenceCheckBox = ({ evidence, dispatch }) => {
  return (
    <>
      <CheckBox 
        title={evidence.name}
        center={true}
        checked={evidence.isChecked}
        textStyle={globalStyles.checkboxText}
        onPress={() => dispatch({type: 'check_box', payload: {id: evidence.id }})}
      />
    </>
  );
};

export default EvidenceCheckBox;

