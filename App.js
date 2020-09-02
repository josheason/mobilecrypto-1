import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import TableofContents from './List.js'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TableofContents}
          options={{ 
            title: 'Fundamental Secrets' ,
            headerStyle: {
              backgroundColor: '#000000',
              height: 100,
            },
            headerTitleStyle: {
              //alignSelf: 'center',
              //justifyContent: 'center',
              color: '#fff',
              fontSize: 25,
            }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
