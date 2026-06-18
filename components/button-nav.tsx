import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Button_Nav({
  onPress, 
  iconName = 'home'
}: {
  onPress: () => any;
  iconName?: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {iconName && <Ionicons name={iconName} size={24} color="#2c3a42" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e1ecde',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
  },
});