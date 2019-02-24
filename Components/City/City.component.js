import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, } from 'react-native';

import styles from './city.style'


export default class CityNav extends Component {

    //  location = require(`./${this.props.name}.jpg`)
    // a=this.props.imgLoc
    //const imagePath = require('./../../Images/'.concat(this.props.data.image));
    // location=require('./'.concat(this.props.imgLoc))
    location=require('./barcelona.jpg')
    render() {
        console.log("this is props",this.props)
        console.log("sdfsd")
        
        return (    
            
            <View style={{borderRadius:20}}>
                <ImageBackground source={this.location} style={styles.dimension} >
                    <View style={styles.content}>
                        <Text style={styles.fontStyle}>Barcelona</Text>
                    </View>
                </ImageBackground>
            </View>

        )

    }
}