
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

                    <CityNav   />
        </TouchableOpacity>
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
</ScrollView>

        );
    }
}

