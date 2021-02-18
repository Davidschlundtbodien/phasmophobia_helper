import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const GhostScreen = ({ navigation }) => {
  const ghost = navigation.getParam('ghost');
  return (
    <Text>{ghost.name}</Text>
  );
};

const styles = StyleSheet.create({});


export default GhostScreen;