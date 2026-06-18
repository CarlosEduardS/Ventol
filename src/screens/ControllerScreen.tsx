import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ControllerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle</Text>
      <Text style={styles.text}>Esta é a tela de controle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});
