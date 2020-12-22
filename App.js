import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import ZearchScreen from './src/screens/ZearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Search" 
        component={ZearchScreen}
        options={{title:'Buisnes Search',animationEnabled:true}}
         />
         <Stack.Screen 
        name="Results" 
        component={ResultsShowScreen}
        options={{title:'Show Results',animationEnabled:true}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
