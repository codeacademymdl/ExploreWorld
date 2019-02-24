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
import HomeScreen from './Components/Home/Home.component'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DetailsScreen from './Screen2'
import CityNav from './Components/City/City.component'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


export default class App extends Component {

    render() {

        return (

            <AppContainer />

        );
    }
}


const AppStackNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        City:CityNav

    }, {

        initialRouteName: "Home"
    });

const AppContainer=createAppContainer(AppStackNavigator);