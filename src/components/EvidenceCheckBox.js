import React from 'react';
import { CheckBox } from 'react-native-elements';
import { globalStyles } from '../../styles/global';

const EvidenceCheckBox = ({ evidence, dispatch }) => {
  return (
    <>
      <CheckBox 
        containerStyle={globalStyles.evidenceCheckBoxBackground}
        title={evidence.name}
        checked={evidence.isChecked}
        textStyle={globalStyles.checkboxText}
        checkedColor={"#2d611f"}
        uncheckedColor={"#2D611F"}
        onPress={() => dispatch({type: 'check_box', payload: {id: evidence.id }})}
      />
    </>
  );
};

export default EvidenceCheckBox;

