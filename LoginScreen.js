import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import cheerio from 'react-native-cheerio';
import axios from 'axios';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { Input, Button } from 'react-native-elements';

// const cheerio = require('react-native-cheerio');
// const axios = require('axios');

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

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
    const $ = cheerio.load(html);
    return $('.user_department').text();
  } catch (e) {
    console.error(e);
  }
}

export default class LoginScreen extends Component
{
  state = {"username":null, "password":null, "name":""};

  render()
  {
    return(
      <View style={[s.body]}>
        <View style={[s.container, s.h100, s.justifyContentCenter]}>
          <Input onChangeText={(text) => this.setState({"username" : text})} placeholder='학번'/>
          <Input onChangeText={(text) => this.setState({"password" : text})} placeholder='비밀번호' secureTextEntry={true} />
          <Button onPress={async function(e)
          {
            console.log(this.state.name);
            let ret = await login(this.state.username, this.state.password);
            this.setState({"name":ret});

            if(this.state.name === "")
              console.log("로그인 실패");
            else
              this.props.navigation.navigate('Main', { name : this.state.name });
          }.bind(this)} title="로그인" type="clear"/>
          <Text>{this.state.name}</Text>
        </View>
      </View>
    );
  }
}