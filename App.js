import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Login } from './login';
global.Buffer = global.Buffer || require('buffer').Buffer

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
      <Login>
      </Login>
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
