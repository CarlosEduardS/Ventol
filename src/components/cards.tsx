// components/Card.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
  title: string;
  content: string | React.ReactNode;
  color?: string;
}

export default function Card({ title, content, color = '#1e40af' }: CardProps) {
  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        {typeof content === 'string' ? (
          <Text style={styles.contentText}>{content}</Text>
        ) : (
          content
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginVertical: 10,
    borderLeftWidth: 6,
    borderRadius: 5,
    width: 360,
    minHeight: 180,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    padding: 5,
  },
  contentText: {
    fontSize: 16,
  },
});