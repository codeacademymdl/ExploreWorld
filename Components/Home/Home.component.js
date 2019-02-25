
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, FlatList, View,TouchableOpacity, ScrollView,Button, ActivityIndicator, SafeAreaView } from 'react-native';
// import axios from 'axios'
import CityNav from '../City/City.component';
import styles from './Home.style'

import Header from '../Header/Header.component'




// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


export default class HomeScreen extends Component {

    render() {

        return (
            
        <ScrollView >
            <Header/>
            <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            

                <View style={styles.main}>
              
          <TouchableOpacity underlayColor="blue" onPress={() => this.props.navigation.navigate('Details')}>

                    <CityNav  name="barcelona" date="10 February 2019"/>
        </TouchableOpacity>
                    <CityNav name="london" date="1 January 2019"/>
                    
                </View>
                <View style={styles.main}>
                    <CityNav name="newyork" date="10 December 2018" />
                    <CityNav name="paris"  date="22 August 2018"/>
                </View>
                <View style={styles.main}>
                    <CityNav name="langkawi" date="25 December 2018"/>
                    <CityNav name="vegas" date="20 November 2019" />
                </View>
                <View style={styles.main}>
                    <CityNav name="sydney" date="10 March 2018"/>
                    <CityNav name="barcelona" date="20 Feb 2018"/>
                </View>
            </SafeAreaView>
</ScrollView>

        );
    }
}

