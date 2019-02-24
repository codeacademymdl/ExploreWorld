
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import styles from './Tags.style'

export default class Tags extends Component {
    state={
        color: '#f5f5f6',
        clicked:true

    }
    onClick = ()=>{
        this.setState({
            clicked:!this.state.clicked,
            color:this.state.clicked?"#2e7df6": '#f5f5f6'
        })
    }
    render() {


        return (
            <TouchableHighlight style={[styles.button, { backgroundColor: this.state.color }]}
            onPress={this.onClick}>
                <Text> {this.props.text}</Text>
            </TouchableHighlight>


        )
    }
}
