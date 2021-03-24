import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const cheerio = require('react-native-cheerio');
const axios = require('axios');

const login = async (username, password) => {
  const body = new FormData();
  body.append("username", username);
  body.append("password", password);

  try {
    const response = await axios({
      method: 'POST',
      url: "https://myclass.ssu.ac.kr/login/index.php",
      data: body
    });

    // const response = await axios({
    //   method: 'GET',
    //   url: "http://myclass.ssu.ac.kr/local/ubion/user/"
    // });

    const html = await response.data;
    // console.log(html);
    const $ = cheerio.load(html);
    return $('.user_department').text();
  } catch (e) {
    console.error(e);
  }
}

export class Login extends Component
{
  render()
  {
    return(
      <View style={styles.container}>
        <Text>로그인</Text>
        <TextInput style={styles.textInput} placeholder="학번">

        </TextInput>
        <TextInput style={styles.textInput} secureTextEntry={true} placeholder="비밀번호">

        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEAD0',
    paddingHorizontal: 30,
    flex: 1,
  },
  headerText: {
    paddingTop: 50,
    alignItems: 'center',
    fontSize: 30,
  },
  bodyContainer: {
    backgroundColor: '#FDF5DC',
    paddingHorizontal: 20,
    marginVertical: 30,
    flex: 1
  },
  textInput: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  showText: {
    marginTop: 10,
    fontSize: 25,
  }
})