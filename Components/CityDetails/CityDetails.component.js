import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView, TouchableHighlight } from 'react-native';
import styles from './CityDetails.style'
// import { ScrollView } from 'react-native-gesture-handler';

import Tags from '../Tags/Tags.component'
export default class DetailsScreen extends Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.main}>
                    <Text style={styles.heading1}>Memory title</Text>
                    <Text style={styles.heading2}>Summer in Barcelona</Text>

                    <View style={styles.imgView}>
                        <Image source={require('./barcelona2.jpg')}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.divide}>
                        <View style={styles.box}>
                            <Text style={styles.heading1}>Location</Text>
                            <Text style={styles.heading2}>Barcelona,Spain</Text>


                        </View>
                        <View style={styles.box}>
                            <Text style={styles.heading1}>Date</Text>
                            <Text style={styles.heading2}>1.01.2019</Text>

                        </View>
                        <View style={styles.box} >
                            <Text style={[styles.heading1, { marginBottom: 10 }]}>Tags</Text>
                          

                                <View style={styles.tags}>
                                    <Tags text="Facade" />
                                    <Tags text="Outside" />
                                    <Tags text="Bedroom" />


                                </View>
                                <View style={styles.tags}>
                                    <Tags text="Restaurant" />
                                    <Tags text="Bar" />
                                    <Tags text="Other" />
                                </View>
                            



                        </View>
                        <View style={styles.box} >
                            <Text style={styles.heading1}>Notes</Text>
                            <Text style={styles.heading2}>Add Description</Text>

                        </View>

                    </View>

                </View>
            </ScrollView>

        );
    }
}
