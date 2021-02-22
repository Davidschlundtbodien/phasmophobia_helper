import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const GhostScreen = ({ navigation }) => {
  const ghost = navigation.getParam('ghost');
  return (
    <View style={styles.ghostList}>
      <Text>{ghost.name}</Text>
      <Text>{ghost.evidence}</Text>
      <Text>{ghost.weakness}</Text>
      <Text>{ghost.strength}</Text>
      <Text>{ghost.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ghostList: {
    alignItems: "center",
    margin: 12
  }
});


export default GhostScreen;