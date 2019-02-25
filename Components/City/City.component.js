import React, { Component } from 'react';
import { Platform, StyleSheet,Button, Text, View, ImageBackground, TouchableHighlight } from 'react-native';

import styles from './city.style'


export default class CityNav extends Component {


    
    
AllImages={

// barcelona:require('./barcelona.jpg'),
// london:require('./london.jpg'),
// newyork:require('./newyork1.jpg'),
// langkawi:require('./langkawi.jpg'),
// paris:require('./paris.jpg'),
// sydney:require('./sydney.jpg'),
// vegas:require('./vegas.jpg'),
barcelona:require('../../src/assets/city/barcelona.jpg'),
london:require('../../src/assets/city/london.jpg'),
newyork:require('../../src/assets/city/newyork1.jpg'),
langkawi:require('../../src/assets/city/langkawi.jpg'),
paris:require('../../src/assets/city/paris.jpg'),
sydney:require('../../src/assets/city/sydney.jpg'),
vegas:require('../../src/assets/city/vegas.jpg')

}
    
    
    render() {
       

        
        return (    

          
          
            <View style={styles.main} >
           
                <ImageBackground source={this.AllImages[this.props.name]} style={styles.dimension} imageStyle={{ borderRadius: 20 }} >
                    <View style={styles.content}>
                        <Text style={styles.fontStyle}>{this.props.name.toUpperCase()}</Text>
                        <Text style={styles.date}>{this.props.date}</Text>
                    </View>
                </ImageBackground>
            </View>


        )

    }
}