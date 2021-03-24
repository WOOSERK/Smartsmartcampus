import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';

const Stack = createStackNavigator();

export default function App() {

  const [data, setData] = useState();

  // const result = async() => {
  //   let result = await login();
  //   setData(result);
  // }

  // useEffect(() => {
  //   result()
  // },[]);

  return (
    // <View style={styles.container}>
    //   <Text>
    //     {data}님 안녕하세요.
    //   </Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
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
