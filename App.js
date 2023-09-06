import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button } from 'react-native';
import tw from 'twrnc';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

