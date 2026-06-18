import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button_Nav from './button-nav';

type RotasDoApp = {
  Home: undefined;
  Info: undefined;
  Contact: undefined;
  Controller: undefined;
  Profile: undefined;
};

const iconMap: Record<string, string> = {
  home: 'home',
  info: 'information-circle',
  contact: 'call',
  controller: 'game-controller',
  profile: 'person-circle',
};

interface NavigatorBarProps {
  buttons?: string[];
}

export default function Navigator_Bar({ buttons = ['home', 'info', 'contact', 'controller', 'profile'] }: NavigatorBarProps = {}) {
  const navigation = useNavigation<any>();

  const handleNavigation = (buttonName: string) => {
    const screenName = buttonName.charAt(0).toUpperCase() + buttonName.slice(1) as keyof RotasDoApp;
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
        <View style={styles.container_bar}>
            {buttons.map((button) => (
                <Button_Nav 
                key={button}
                onPress={() => handleNavigation(button)} 
                iconName={iconMap[button] as any} 
                />
            ))}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    height: 90,
    backgroundColor: '#f2f7f0',
    borderTopWidth: 1,
    borderTopColor: '#e3ecdf',
  },
  container_bar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  }
});