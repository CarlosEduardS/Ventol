import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigator_Bar from './components/Navigator-Bar';
import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';
import ContactScreen from './screens/ContactScreen';
import ControllerScreen from './screens/ControllerScreen';
import ProfileScreen from './screens/ProfileScreen';

type RotasDoApp = {
  Home: undefined;
  Info: undefined;
  Contact: undefined;
  Controller: undefined;
  Profile: undefined;
};

const Pilha = createNativeStackNavigator<RotasDoApp>();

function AppContent() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Pilha.Navigator screenOptions={{ headerShown: false }}>
          <Pilha.Screen name="Home" component={HomeScreen} />
          <Pilha.Screen name="Info" component={InfoScreen} />
          <Pilha.Screen name="Contact" component={ContactScreen} />
          <Pilha.Screen name="Controller" component={ControllerScreen} />
          <Pilha.Screen name="Profile" component={ProfileScreen} />
        </Pilha.Navigator>
      </View>
      <Navigator_Bar />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppContent />
    </NavigationContainer>
  );
}