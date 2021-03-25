import React, { Component } from 'react';
import { View, Text } from 'react-native';
import cheerio from 'react-native-cheerio';
import axios from 'axios';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { Input, Button } from 'react-native-elements';

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
          <Input onChangeText={(text) => this.setState({"username" : text})} label='스마트캠퍼스 학번을 입력하세요.' placeholder='학번'/>
          <Input onChangeText={(text) => this.setState({"password" : text})} label='스마트캠퍼스 비밀번호를 입력하세요' placeholder='비밀번호' secureTextEntry={true} />
          <Button onPress={async function(e)
          {
            let ret = await login(this.state.username, this.state.password);
            this.setState({"name":ret});

            if(this.state.name === "")
              this.setState({"name":"스마트캠퍼스 로그인 실패"})
            else
              this.props.navigation.reset({index:0, routes: [{ name: 'Main', params: { name : this.state.name }}]});
          }.bind(this)} title="로그인" type="clear"/>
          <Text style={[s.justifyContentCenter]}>{this.state.name}</Text>
        </View>
      </View>
    );
  }
}