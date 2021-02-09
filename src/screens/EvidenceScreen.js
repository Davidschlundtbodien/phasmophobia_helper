import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const EvidenceScreen = ({ navigation }) => {
  return (
    <>
      <Text>Evidence Screen</Text>
      <Button 
        title="Go to Ghost Screen"
        onPress={() => navigation.navigate('Ghost')}
      />
    </>
  );
};

const styles = StyleSheet.create({});


export default EvidenceScreen;