/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, FlatList, View, Image, SectionList, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
// import axios from 'axios'
import CityNav from './Components/City/City.component';
import styles from './App.style'

import Header from './Components/Header/Header.component'


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


export default class App extends Component {

    render() {

        return (
            

            
            <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Header/>

                <View style={styles.main}>
                    <CityNav  />
                    <CityNav />
                </View>
                <View style={styles.main}>
                    <CityNav />
                    <CityNav />
                </View>
                <View style={styles.main}>
                    <CityNav />
                    <CityNav  />
                </View>
                <View style={styles.main}>
                    <CityNav />
                    <CityNav />
                </View>
            </SafeAreaView>


        );
    }
}


