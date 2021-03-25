import React, { Component } from 'react';
import { View, Text } from 'react-native';
import cheerio from 'react-native-cheerio';
import axios from 'axios';
import Classes from './components/Classes';

export default class MainScreen extends Component
{
    state = {classes : null};

    getClasses = async () =>
    {
        const response = await axios({
        method: 'GET',
        url: "http://myclass.ssu.ac.kr/local/ubion/user/"
        });

        let list = [];

        const html = await response.data;
        const $ = cheerio.load(html);
        const classes = $("div.course_label_re a");
        classes.each((index, e) => {
            list.push({
                link : e.attribs.href,
                title : e.children[0].data
            });
        });

        this.setState({classes: list});
    }

    constructor(props)
    {
        super(props);

        this.getClasses();
    }

    render()
    {
        return(
            <View>
                <Text>{this.props.route.params.name}님 안녕하세요</Text>
                <Classes key={1} data={this.state.classes}></Classes>
            </View>
        );
    }
}