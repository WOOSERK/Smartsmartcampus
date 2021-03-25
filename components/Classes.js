import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default function Classes(props)
{
    let list = [];

    for(let i in props.data)
    {
        list.push(
            <Text key={i}>
                {props.data[i].title}
                {props.data[i].link}
            </Text>
        );
    }

    return(
        <View>
            {list}
        </View>
    );
}