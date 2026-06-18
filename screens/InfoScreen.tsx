import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/cards';

export default function InfoScreen() {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.h1}>Bem vindo a Ventol</Text>
      </View>
      <Text style={styles.p}>Conheca nossos mecanismos</Text>
      <View style={styles.container}>
        <Card
          title='Esp32 Info'
          content="Informacões sobre o esp32"
          color='blue'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F7F9F5',
    alignItems: 'center',
    paddingTop: 50,
  },
  container: {
      flex: 1,
      backgroundColor: '#F7F9F5',
      alignItems: 'center',
      justifyContent: 'center',
  },
  header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
  },
  h1: {
      fontSize: 36,
      fontWeight: 'bold',
  },
  h2: {
      fontSize: 32,
      fontWeight: 'bold',
  },
  h3: {
      fontSize: 28,
      fontWeight: 'bold',
  },
  h4: {
      fontSize: 24,
      fontWeight: 'bold',
  },
  h5: {
      fontSize: 20,
      fontWeight: 'bold',
  },
  h6: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#555',
  },
  p: {
      fontSize: 16,
      color: '#333',
  },
});