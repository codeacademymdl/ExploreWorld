import React, { Component } from 'react';
import { Platform, StyleSheet,Button, Text, View, ImageBackground, TouchableHighlight } from 'react-native';

import styles from './city.style'


export default class CityNav extends Component {

    //  location = require(`./${this.props.name}.jpg`)
    // a=this.props.imgLoc
    //const imagePath = require('./../../Images/'.concat(this.props.data.image));
    // location=require('./'.concat(this.props.imgLoc))
    
    

    
    
    render() {
       

        let location=require('./barcelona.jpg')
        // console.log(this.props.imgLoc)
        
        return (    

          
          
            <View style={styles.main} >
           
                <ImageBackground source={require('./barcelona.jpg')} style={styles.dimension} imageStyle={{ borderRadius: 20 }} >
                    <View style={styles.content}>
                        <Text style={styles.fontStyle}>Barcelona</Text>
                        <Text style={styles.date}>6th January 2019</Text>
                    </View>
                </ImageBackground>
            </View>


        )

    }
}