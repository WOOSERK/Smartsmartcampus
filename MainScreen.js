import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MainScreen extends Component
{
    render()
    {
        return(
            <View>
                <Text>{this.props.route.params.name}님 안녕하세요</Text>
            </View>
        );
    }
}