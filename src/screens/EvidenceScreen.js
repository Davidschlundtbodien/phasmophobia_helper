import React from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';

const EvidenceScreen = ({ navigation }) => {
  const evidence = [
    {title: 'Ghost Writing'},
    {title: 'EMF Level 5'},
    {title: 'Freezing Temperatures'},
    {title: 'Ghost Orbs'},
    {title: 'Spirit Box'},
    {title: 'Fingerprints'}
  ];

  return (
    <>
      <Text>Evidence Screen</Text>
      <FlatList
        keyExtractor={(evidence) => evidence.title }
        data={evidence}
        renderItem={({ item }) => {
          return <CheckBox 
            title={item.title}
          />;
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