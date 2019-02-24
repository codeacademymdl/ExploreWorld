import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, } from 'react-native';

import styles from './Header.style'


export default class Header extends Component {

    render() {
        
        
        return (    
            <View style={styles.main}>
                <Text style={styles.content}>Explore Memories</Text>
            </View>

        )

    }
}