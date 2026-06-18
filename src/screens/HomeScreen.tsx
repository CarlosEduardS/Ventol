import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../components/cards';

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function HomeScreen() {
  const [bateryPorcent, setBateryPorcent] = useState(11);
  const [state, setState] = useState('Operando');

  let color = '#bebebe';
  if (state === 'Carregando') {
    color = '#a5e29d';
  } else if (state === 'Operando') {
    color = '#f8d4a4';
  } else if (state === 'Desativado') {
    color = '#f5a5a5'; 
  } else if ( state === 'Voltando para a doca') {
    color = '#f8f0a4'
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBateryPorcent(prev => {
        let newPercent = prev;
        
        if (state === 'Carregando') {
          newPercent += 1;
        } else if (state === 'Operando') {
          newPercent -= 1;
        } else if (state === 'Voltando para a doca'){
          newPercent -= random(0.100, 0.350);
        }

        if (newPercent > 100 && state === 'Carregando') {
          newPercent = 100;
          setState('Operando');
        } else if (newPercent < 6 && newPercent > 4 && state === 'Operando') {
          setState('Voltando para a doca');
        } else if (newPercent <= 4 && newPercent > 0 && random(0, 1) == 1) {
          setState('Carregando');
        } else if (newPercent <= 0) {
          setState('Desativado');
          newPercent = 0;
        }

        return newPercent;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [state]);

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.h1}>Bem vindo a Ventol</Text>
      </View>
      <Text style={styles.p}>Conheca nossos mecanismos</Text>
      <View style={styles.container}>
        <Card 
          title="Estado da bateria" 
          content={
            <View>
              <Text style={styles.h6}>{bateryPorcent.toFixed(0)}%  -  {state}</Text>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Ver mais</Text>
              </TouchableOpacity>
            </View>
          }
          color={color}
        />
        <Card 
          title="Mecanismo de controle" 
          content={<Text style={styles.h6}>Controle por aplicativo</Text>}
          color="#9de2bc"
        />
        <Card
          title="Mecanismo de segurança"
          content={<Text style={styles.h6}>Sistema de proteção contra sobrecarga</Text>}
          color="#a5cef5"
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
  button: {
    backgroundColor: '#e1ecde',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#000000de',
    fontSize: 20,
    fontWeight: 'bold',    
  },
});